import React, { useState } from 'react';
import "./FormW.css"
import { useNavigate } from "react-router-dom";
import { Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function FormW() {
    var $ = require("jquery");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        var formulario = document.getElementById("form");
        var inputs = formulario.querySelectorAll("input, select")
        var form = new FormData();

        inputs.forEach(function (input) {
            if (input && input.name) {
                form.append(input.name, input.value);
            }
        });


        var settings = {
        "url": "https://api.abdielaldana.com/enviarcorreo.php",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
        };

        $.ajax(settings)
        .done(function (response) {
            console.log(response);
            if(response === "correct") {
                navigate("/bienvenido")
            } else {
                navigate("/error")
            }
        });
    };

    const darkTheme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#000',
            },
        },
      });

    const [seguro, setSeguro] = React.useState("")

    const handleChangeSeguro = (e) => {
        setSeguro(e.target.value)
    }

    return (
        <ThemeProvider theme={darkTheme}>
        <div id="FormW">
            <div className='filter'>
                {/* <div><h1>algo</h1></div> */}
                <div className='boxw'>
                    <h2>Registro</h2>
                    <form onSubmit={handleSubmit} id="form">
                        <TextField name="nombre" required className='input' id="nombre" label="Nombre(s)" variant="outlined" />
                        <TextField name="apellidos" required className='input' id="apellido" label="Apellidos" variant="outlined" />
                        <TextField name="correo" required type="email" className='input' id="correo" label="Correo" variant="outlined" />
                        <FormControl fullWidth className='input'>
                            <InputLabel id="demo-simple-select-label">Tipo de plan a escoger</InputLabel>
                            <Select
                                name="tipo"
                                required
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={seguro}
                                label="Tipo de plan a escoger"
                                onChange={handleChangeSeguro}
                            >
                                <MenuItem value={"Basico"}>Basico</MenuItem>
                                <MenuItem value={"Basico+"}>Basico +</MenuItem>
                                <MenuItem value={"Plus"}>Plus</MenuItem>
                                <MenuItem value={"Plus+"}>Plus +</MenuItem>
                                <MenuItem value={"Vip"}>Vip</MenuItem>
                                <MenuItem value={"Vip+"}>Vip +</MenuItem>
                            </Select>
                        </FormControl>
                        <Divider></Divider>
                        <TextField name="password" required type="password" className='input' id="pass" label="Contraseña" variant="outlined" />
                        <TextField required type="password" className='input' id="pass" label="Confirmar Contraseña" variant="outlined" />

                        {/* <div>
                            <label>Correo Electrónico:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div> */}
                        <button type="submit">Enviar Bienvenida</button>
                    </form>
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
}

export default FormW;