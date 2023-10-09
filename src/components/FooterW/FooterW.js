import { Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import "./FooterW.css"

import logoBlanco from "../../images/jupiter_Logotipo Blanco.png"
import { Link } from "react-router-dom";
function FooterW() {
  return(
    <div id="Footerw">
        <Container maxWidth="xl" sx={{height: "100%", color: "white"}}>
            <Grid container spacing={4} >
                <Grid xs={12} md={4} className="ajustFixed as">
                    <h4>Menu</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/cotizacion">Cotizacion</Link></li>
                        <li><Link to="/recursos">Recursos</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </Grid>
                <Grid xs={12} md={4} className="ajustFixed">
                    <img src={logoBlanco} alt="Logo Blanco Jupiter Seguros" height={"50px"}/>
                </Grid>
                <Grid xs={12} md={4} className="ajustFixed">
                    <h3>Aqui iria un Footer en forma</h3>
                </Grid>
                
            </Grid>
        </Container>
    </div>
  );
};

export default FooterW;