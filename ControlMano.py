import cv2
import mediapipe as mp
import pyautogui
import numpy as np
import time

# --- Configuración ---
ANCHO_CAM, ALTO_CAM = 640, 480
SMOOTHING = 5  # Factor de suavizado para el movimiento
MARGEN = 100   # Margen de la cámara que no se usa (para alcanzar los bordes de la pantalla)

# --- Inicialización de MediaPipe ---
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    max_num_hands=1,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)
mp_draw = mp.solutions.drawing_utils

# --- Inicialización de Cámara ---
cap = cv2.VideoCapture(0)
cap.set(3, ANCHO_CAM)
cap.set(4, ALTO_CAM)

# --- Variables de estado ---
plocX, plocY = 0, 0 # Ubicación previa
clocX, clocY = 0, 0 # Ubicación actual
agarre_activo = False

# Obtener tamaño de pantalla
ancho_pantalla, alto_pantalla = pyautogui.size()

print("Iniciando control por visión...")
print("Instrucciones:")
print("- Mueve tu mano para mover el ratón.")
print("- Junta el índice y el pulgar (pellizco) para hacer CLICK/ARRASTRAR (útil para mover piezas en SolidWorks).")
print("- Pulsa 'q' para salir.")

while True:
    success, img = cap.read()
    if not success:
        break

    # Invertir imagen horizontalmente (espejo) para que sea intuitivo
    img = cv2.flip(img, 1) 
    
    # Convertir a RGB para MediaPipe
    imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = hands.process(imgRGB)

    # Si se detectan manos
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Dibujar marcas de la mano
            mp_draw.draw_landmarks(img, hand_landmarks, mp_hands.HAND_CONNECTIONS)
            
            # Obtener coordenadas de los landmarks clave
            # 8: Punta del Índice (Para mover)
            # 4: Punta del Pulgar (Para el gesto de pinza)
            lmList = []
            for id, lm in enumerate(hand_landmarks.landmark):
                h, w, c = img.shape
                cx, cy = int(lm.x * w), int(lm.y * h)
                lmList.append([id, cx, cy])

            if len(lmList) != 0:
                x1, y1 = lmList[8][1], lmList[8][2] # Índice
                x2, y2 = lmList[4][1], lmList[4][2] # Pulgar

                # --- 1. Mover el Ratón (Modo Navegación) ---
                # Convertir coordenadas de la cámara a la pantalla con margen
                # np.interp mapea el rango de la cámara (dentro del margen) al rango de la pantalla
                x3 = np.interp(x1, (MARGEN, ANCHO_CAM - MARGEN), (0, ancho_pantalla))
                y3 = np.interp(y1, (MARGEN, ALTO_CAM - MARGEN), (0, alto_pantalla))

                # Suavizado para evitar el "tembleque"
                clocX = plocX + (x3 - plocX) / SMOOTHING
                clocY = plocY + (y3 - plocY) / SMOOTHING
                
                # Mover el ratón
                pyautogui.moveTo(clocX, clocY)
                plocX, plocY = clocX, clocY

                # --- 2. Detectar Click/Agarre (Modo Acción) ---
                # Calcular distancia entre índice y pulgar
                length = np.hypot(x2 - x1, y2 - y1)
                
                # Umbral de distancia para considerar "pellizco"
                if length < 30: 
                    cv2.circle(img, (x1, y1), 15, (0, 255, 0), cv2.FILLED) # Indicar visualmente
                    if not agarre_activo:
                        pyautogui.mouseDown() # Presionar click izquierdo
                        agarre_activo = True
                        print("Agarre INICIADO (Mouse Down)")
                else:
                    if agarre_activo:
                        pyautogui.mouseUp() # Soltar click izquierdo
                        agarre_activo = False
                        print("Agarre FINALIZADO (Mouse Up)")

    # Mostrar FPS y Feed
    cv2.imshow("Control de Mano MIK", img)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
