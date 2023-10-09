import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Welcome.css"

function Welcome(params) {
    const navigate = useNavigate();

    const returnHome = () => {
        navigate("/")
    }

    return(
        <div id="welcome">
            <h1>¡Bienvenido a Seguros Jupiter!</h1>
            <h3>Recibiras un correo con las indicaciones para empezar una vida segura junto a tu familia.</h3>
            <h5>Faltan textos e imagenes, pero tengo otras obligaciones y aun no subo el codigo al repositorio de Git</h5>
            <Button onClick={returnHome} variant="contained">Regresar a Inicio</Button>
        </div>
    );
};

export default Welcome;