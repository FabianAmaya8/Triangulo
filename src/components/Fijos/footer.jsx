import "./footer.css";
function PiedePagina(){
    //crea un footer con el nombre de los 4 mienbros con link a su git
    return(
        <div className="footer-conteiner">
            <h2>Desarrollado por</h2>
            <ul>
                <li>
                    <a href="https://github.com/FabianAmaya8">Fabian Amaya</a>
                </li>
                <li>
                    <a href="https://github.com/REDMAN8883">Julian Beltran</a>
                </li>
                <li>
                    <a href="https://github.com/DanielMMiranda17">Daniel Miranda</a>
                </li>
                <li>
                    <a href="https://github.com/Zarpien06">Oscar Cruz</a>
                </li>
            </ul>
        </div>
    )
}
export default PiedePagina;