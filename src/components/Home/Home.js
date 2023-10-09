import { Button, Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';

import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import CardMedia from '@mui/material/CardMedia';
import "./Home.css"

import aveoPortada from "../../images/aveoPortada.jpg"
// import as24 from "../../images/asistencia247.jfif"
// import asMed from "../../images/aisistenciamedica.jpg"
// import asCam from "../../images/asistenciacamino.jpeg"
import img1 from "../../images/img.svg"

import shield from "../../images/shield_circle.svg"
import health from "../../images/health.svg"
import steering from "../../images/steering_wheel.svg"

import { Link } from "react-router-dom"

function Home() {
    return(
        <div id="home">
            <Container maxWidth="xl">
                <div className="portada" style={{backgroundImage: "url("+aveoPortada+")"}}>
                    <div className="portadaTexto">
                        <h1>Un seguro de gran medida</h1>
                        <h3>Asegura tu futuro y el de tu familia.</h3>
                        <Link to="/asd">
                            <Button variant="contained" className="button1">Ver mas.</Button>
                        </Link>
                    </div>
                    {/* <img src={aveoPortada} alt="Portada" /> */}
                </div>
                <div className="presentacion">
                    <Grid container spacing={4}>
                        <Grid xs={12} md={4} sx={{display:"flex", alignItems: "center"}}>
                            <Card sx={{boxShadow:"0 0 0 0 transparent !important", minHeight: 100, display: {xs: 'flex', md: 'block', lg: "flex" }, alignItems:"center", padding:"20px 0" }}>
                                <div>
                                    <img src={steering} alt="Health" height="100px" style={{margin: "0px 20px 0px 30px "}}/>
                                </div>
                                <div>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} gutterBottom>
                                            Asistencia en el camino
                                        </Typography>
                                        <hr/>
                                        <Typography variant="body2">
                                            Aprovecha nuestros servicios de cerrajería, cambio de llantas, paso de corriente y hasta 2 grúas por año.
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Aprender mas</Button>
                                    </CardActions> */}
                                </div>
                            </Card>
                        </Grid>
                        <Grid xs={12} md={4} sx={{display:"flex", alignItems: "center"}}>
                            <Card sx={{boxShadow:"0 0 0 0 transparent !important", minHeight: 100, display: {xs: 'flex', md: 'block', lg: "flex" }, alignItems:"center", padding:"20px 0" }}>
                                <div>
                                    <img src={health} alt="Health" height="100px" style={{margin: "0px 20px 0px 30px "}}/>
                                </div>
                                <div>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} gutterBottom>
                                            Asistencia médica por accidente
                                        </Typography>
                                        <hr/>
                                        <Typography variant="body2">
                                            Obten una suma asegurada para atenderte en los hospitales en convenio.(3)
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Aprender mas</Button>
                                    </CardActions> */}
                                </div>
                            </Card>
                        </Grid>
                        <Grid xs={12} md={4} sx={{display:"flex", alignItems: "center"}}>
                            <Card sx={{boxShadow:"0 0 0 0 transparent !important", minHeight: 100, display: {xs: 'flex', md: 'block', lg: "flex" }, alignItems:"center", padding:"20px 0" }}>
                                <div>
                                    <img src={shield} alt="Health" height="100px" style={{margin: "0px 20px 0px 30px "}}/>
                                </div>
                                <div>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 20, fontWeight: "bold" }} gutterBottom>
                                            Asistencia 24/7
                                        </Typography>
                                        <hr/>
                                        <Typography variant="body2">
                                            Reporta siniestros y emergencias los 365 días del año.
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Aprender mas</Button>
                                    </CardActions> */}
                                </div>
                            </Card>
                        </Grid>
                    </Grid>

                    <div>
                        <p style={{textAlign: "center", margin: "50px 10vw", fontSize: "20px"}}>
                            Contrata ahora tu Seguro de Auto Protegido CBNX y descubre un precio preferencial para clientes Citibanamex. Tu seguridad y protección son nuestra prioridad. Llámanos para contratar tu Seguro de Auto Protegido CBNX.
                        </p>
                    </div>

                </div>
            </Container>
            <div style={{backgroundColor: "#eaeaea", width:"100%"}}>
                <Container  maxWidth="xl">
                    <Grid container spacing={4} >
                        <Grid xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center", padding:"50px"}}>
                            <img src={img1} alt="imagen" />
                        </Grid>
                        <Grid xs={12} md={5} sx={{display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", padding:"50px"}}>
                            <h1 style={{textAlign: "center", width: "100%"}}>¿Necesitas ayuda?</h1>
                            <p style={{textAlign: "justify"}}>El equipo de soporte está disponible de Lunes a Viernes de las 8:00 a 20:00 horas, dispuesto a brindar ayuda, a ti, a tu familia o tus beneficiarios.</p>
                            <h4>¿Tienes dudas o quieres adquirir un seguro?<br/> Llama al: <a href="#x">1515151515</a></h4>
                            <br/>
                            <h4>¿Tienes dudas sobre tu póliza?<br/> Llama al: <a href="#x">1515151515</a></h4>
                            <Button style={{alignSelf: "center"}} variant="contained" className="button1">Ver mas.</Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div style={{margin: "80px 0px"}}>
                <Container maxWidth="xl">
                    <Grid container spacing={4} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <Grid xs={12} md={6}>
                            <h2>¿Cómo utilizar tu Seguro?</h2>
                            <p>Si sufres un siniestro o quieres hacer uso de las asistencias de tu seguro de auto, sigue estos pasos:</p>
                            <ol>
                                <li>Ten a la mano tu póliza.</li>
                                <li>Comunícate con uno de nuestros ejecutivos.</li>
                            </ol>
                        </Grid>
                        <Grid xs={12} md={6} sx={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                            <h3>Utiliza tu seguro llamando al</h3>
                            <h1>81246663146</h1>
                            <h3>Selecciona la opción 1</h3>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
};

export default Home