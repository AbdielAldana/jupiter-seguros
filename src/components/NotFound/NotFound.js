import './NotFound.css';
import IdentidadColor from "../../images/jupiter_Identidad Color.png"
import { Link } from 'react-router-dom';

function NotFound() {
    return(
        <div id="NotFound">
            <img src={IdentidadColor} height="30%" alt='Logo Jupiter Seguros' />
            <h1>PÁGINA NO ENCONTRADA</h1>
            <h3>Regresar a <Link to="/">Inicio</Link></h3>
        </div>
    )
};

export default NotFound