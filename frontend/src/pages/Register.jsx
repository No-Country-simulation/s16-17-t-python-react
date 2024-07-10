/* eslint-disable arrow-body-style */

import "../App.css"

import { RegNav, FormInput } from "../components";

export const Register = () => {
    return (
        <>
            <div className="">
                <RegNav />
            </div>
            <div className="">
                <h1>Empecemos</h1>
                <p>Completa el formulario para crear tu cuenta</p>

                <ul>
                    <li>
                        <FormInput label="Nombre completo" type="text"/>
                        <span>Invalido</span>
                    </li>
                    <li>
                        <FormInput label="Correo Electrónico" type="email"/>
                        <span>Su correo no es válido</span>
                    </li>
                </ul>

                <button>Siguiente</button>
                <button>Registrarme con Google</button>
            </div>
        </>
        
    );
};