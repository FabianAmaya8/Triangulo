// components/TriangleForm.jsx
import { useState } from "react";

const TriangleForm = ({ onCalculate }) => {
    const [sides, setSides] = useState({ a: "", b: "", c: "" });

    const handleChange = (e) => {
        setSides({ ...sides, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const a = parseFloat(sides.a);
        const b = parseFloat(sides.b);
        const c = parseFloat(sides.c);

        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            alert("Por favor, ingresa valores numéricos válidos.");
            return;
        }

        onCalculate(a, b, c);
    };

    return (
        <di>
        <h2>Cálculo de propiedades de un triángulo</h2>
        <form onSubmit={handleSubmit} className="triangle-form">
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
            <button type="submit">Calcular</button>
        </form>
        </di>
    );
};

export default TriangleForm;
