/** 
 * Calcula los ángulos de un triángulo dados los lados utilizando la Ley de los Cosenos.
 * @param {Object} sides - Un objeto con las longitudes de los tres lados {a, b, c}.
 * @returns {Object|null} Un objeto con los ángulos {angleA, angleB, angleC} en grados
 *                        o `null` si los lados no forman un triángulo válido.
 */
export const calculateAngles = (sides) => {
    const { a, b, c } = sides;

    // Verificación de existencia de triángulo (desigualdad triangular)
    if (a + b <= c || a + c <= b || b + c <= a) {
        return null; // No es un triángulo válido
    }

    // Convierte radianes a grados
    const toDegrees = (radians) => (radians * 180) / Math.PI;

    // Aplicación de la Ley de los Cosenos para calcular los ángulos
    const angleA = toDegrees(Math.acos((b ** 2 + c ** 2 - a ** 2) / (2 * b * c)));
    const angleB = toDegrees(Math.acos((a ** 2 + c ** 2 - b ** 2) / (2 * a * c)));
    const angleC = 180 - angleA - angleB; // La suma de los ángulos internos es 180°

    return { angleA, angleB, angleC };
};

/**
 * Clasifica un triángulo según sus lados y ángulos.
 * @param {Object} sides - Un objeto con las longitudes de los lados {a, b, c}.
 * @param {Object} angles - Un objeto con los ángulos {angleA, angleB, angleC} en grados.
 * @returns {string} Una cadena que describe el tipo de triángulo en función de sus lados y ángulos.
 */
export const classifyTriangle = (sides, angles) => {
    const { a, b, c } = sides;
    const { angleA, angleB, angleC } = angles;

    // Clasificación según los lados
    let typeBySides = "";
    if (a === b && b === c) {
        typeBySides = "Equilátero"; // Todos los lados son iguales
    } else if (a === b || a === c || b === c) {
        typeBySides = "Isósceles"; // Dos lados son iguales
    } else {
        typeBySides = "Escaleno"; // Todos los lados son diferentes
    }

    // Clasificación según los ángulos
    let typeByAngles = "";
    if (angleA === 90 || angleB === 90 || angleC === 90) {
        typeByAngles = "Rectángulo"; // Tiene un ángulo de 90°
    } else if (angleA > 90 || angleB > 90 || angleC > 90) {
        typeByAngles = "Obtusángulo"; // Tiene un ángulo mayor a 90°
    } else {
        typeByAngles = "Acutángulo"; // Todos los ángulos son menores a 90°
    }

    return `${typeBySides} y ${typeByAngles}`;
};
