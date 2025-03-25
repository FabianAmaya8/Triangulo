const TriangleInfo = ({ sides, angles, classification }) => {
    if (!sides || !angles) return <p>Ingresa los lados para ver los resultados.</p>;

    return (
        <div className="triangle-info">
            <h2>Resultados</h2>
            <p><strong>Lados:</strong> A = {sides.a}, B = {sides.b}, C = {sides.c}</p>

            <p><strong>Ángulos:</strong> 
            A = {angles.angleA.toFixed(2)}°, B = {angles.angleB.toFixed(2)}°, C = {angles.angleC.toFixed(2)}°</p>

            <p><strong>Clasificación:</strong> {classification}</p>
        </div>
    );
};

export default TriangleInfo;
