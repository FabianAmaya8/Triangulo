import { useState } from "react";
import TriangleCanvas from "./components/TriangleCanvas";
import { calculateAngles, classifyTriangle } from "./utils/triangleUtils";
import "./styles/index.css";
import "./styles/triangle.css";

function App() {
    const [sides, setSides] = useState({ a: "", b: "", c: "" });
    const [angles, setAngles] = useState(null);
    const [classification, setClassification] = useState("");
    const [shouldDraw, setShouldDraw] = useState(false);

    const handleChange = (e) => {
        setSides({ ...sides, [e.target.name]: parseFloat(e.target.value) || "" });
        setShouldDraw(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación mínima (sin mejoras): Checar > 0
        if (sides.a > 0 && sides.b > 0 && sides.c > 0) {
            const angleResults = calculateAngles(sides);
            if (angleResults) {
                setAngles(angleResults);
                setClassification(classifyTriangle(sides, angleResults));
                setShouldDraw(true);
            } else {
                alert("Los valores ingresados no forman un triángulo válido.");
                setShouldDraw(false);
            }
        } else {
            alert("Por favor ingrese valores válidos para los lados.");
            setShouldDraw(false);
        }
    };

    return (
        <div className="App">
            <h1>Clasificación de Triángulos</h1>
            <div className="triangle-form-content">
              <h2>Ingrese los lados del triángulo</h2>
              <form className="triangle-form" onSubmit={handleSubmit}>
                  <label>
                      Lado A:
                      <input type="number" name="a" value={sides.a} onChange={handleChange} required />
                  </label>
                  <label>
                      Lado B:
                      <input type="number" name="b" value={sides.b} onChange={handleChange} required />
                  </label>
                  <label>
                      Lado C:
                      <input type="number" name="c" value={sides.c} onChange={handleChange} required />
                  </label>
                  <button type="submit">Consultar</button>
              </form>
            </div>

            {shouldDraw && angles && classification && (
                <div className="triangle-info">
                    <h2>Resultados</h2>
                    <h3>Angulos</h3>
                    <p>A = {angles.angleA.toFixed(2)}°</p>
                    <p>B = {angles.angleB.toFixed(2)}°</p>
                    <p>C = {angles.angleC.toFixed(2)}°</p>
                    <p>Tipo de triángulo: {classification}</p>
                    <TriangleCanvas sides={sides} angles={angles} shouldDraw={shouldDraw} />
                </div>
            )}
        </div>
    );
}

export default App;
