export const calculateAngles = (sides) => {
    const { a, b, c } = sides;
    // Verificación mínima de triángulo
    if (a + b <= c || a + c <= b || b + c <= a) {
        return null; // No es un triángulo válido
    }

    const toDegrees = (radians) => (radians * 180) / Math.PI;

    const angleA = toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)));
    const angleB = toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)));
    const angleC = 180 - angleA - angleB;

    return { angleA, angleB, angleC };
};

export const classifyTriangle = (sides, angles) => {
    const { a, b, c } = sides;
    const { angleA, angleB, angleC } = angles;

    let typeBySides = "";
    if (a === b && b === c) {
        typeBySides = "Equilátero";
    } else if (a === b || a === c || b === c) {
        typeBySides = "Isósceles";
    } else {
        typeBySides = "Escaleno";
    }

    let typeByAngles = "";
    if (angleA === 90 || angleB === 90 || angleC === 90) {
        typeByAngles = "Rectángulo";
    } else if (angleA > 90 || angleB > 90 || angleC > 90) {
        typeByAngles = "Obtusángulo";
    } else {
        typeByAngles = "Acutángulo";
    }

    return `${typeBySides} y ${typeByAngles}`;
};
