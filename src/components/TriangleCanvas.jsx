import { useEffect, useRef } from "react";

const TriangleCanvas = ({ sides, angles, shouldDraw }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!shouldDraw || !sides || !angles) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Obtener variables CSS desde :root
        const rootStyles = getComputedStyle(document.documentElement);
        const fillColor = rootStyles.getPropertyValue("--triangle-fill").trim();
        const borderColor = rootStyles.getPropertyValue("--triangle-border").trim();
        const textColor = rootStyles.getPropertyValue("--text-color").trim();
        const shadowColor = rootStyles.getPropertyValue("--shadow-color").trim();
        const shadowBlur = parseFloat(rootStyles.getPropertyValue("--shadow-blur")) || 0;
        const canvasBg = rootStyles.getPropertyValue("--canvas-bg").trim();

        // Ajustar tamaño del canvas desde CSS
        const canvasWidth = parseInt(rootStyles.getPropertyValue("--canvas-width"), 10) || 400;
        const canvasHeight = parseInt(rootStyles.getPropertyValue("--canvas-height"), 10) || 400;
        
        if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        }

        // Limpiar y aplicar fondo
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = canvasBg || "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Aplicar sombra
        ctx.shadowColor = shadowColor;
        ctx.shadowBlur = shadowBlur;

        // Calcular escala basada en el lado más grande
        const maxSide = Math.max(sides.a, sides.b, sides.c);
        const scaleFactor = (canvasWidth * 0.4) / maxSide;

        // Definir puntos de referencia
        const offsetY = canvasHeight * 0.7; 
        const A = { x: 50, y: offsetY };
        const B = { x: A.x + sides.c * scaleFactor, y: A.y };
        const C = {
            x: A.x + (sides.b * scaleFactor) * Math.cos((angles.angleA * Math.PI) / 180),
            y: A.y - (sides.b * scaleFactor) * Math.sin((angles.angleA * Math.PI) / 180),
        };

        // Dibujar triángulo
        ctx.beginPath();
        ctx.moveTo(A.x, A.y);
        ctx.lineTo(B.x, B.y);
        ctx.lineTo(C.x, C.y);
        ctx.closePath();
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = fillColor;
        ctx.fill();

        // Etiquetas con ángulos y lados
        ctx.fillStyle = textColor;
        ctx.font = "14px Arial";
        // Ángulos
        ctx.fillText(`A (${angles.angleA.toFixed(1)}°)`, A.x - 30, A.y + 15);
        ctx.fillText(`B (${angles.angleB.toFixed(1)}°)`, B.x + 5, B.y + 15);
        ctx.fillText(`C (${angles.angleC.toFixed(1)}°)`, C.x - 10, C.y - 10);
        // Lados
        ctx.fillText(`a = ${sides.a}`, (B.x + C.x) / 2, (B.y + C.y) / 2);
        ctx.fillText(`b = ${sides.b}`, (A.x + C.x) / 2, (A.y + C.y) / 2);
        ctx.fillText(`c = ${sides.c}`, (A.x + B.x) / 2, (A.y + B.y) / 2);

    }, [shouldDraw, sides, angles]);

    return <canvas ref={canvasRef} className="triangle-canvas"></canvas>;
};

export default TriangleCanvas;
