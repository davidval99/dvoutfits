import React, {useState} from "react";
import '../CssFiles/ContactForm.css';

const ContactForm = (props) => {
    const initialStateValues = {
        name: '',
        email: '',
        phone_number: '',
        message: ''
    };

    const [values, setValues] = useState(initialStateValues);

    const inputChange = (e) =>{
        const {name, value } = e.target;
        setValues({...values, [name]: value}) //con los tres puntos copia
    };

    const insertConsult = (e) => {
        e.preventDefault();
        console.log(values);
        props.addOrEditConsult(values)
        setValues({...initialStateValues})
    };

    return (
        <form className="contactForm" onSubmit={insertConsult}>
            <div className="form-group">
                <h1 className="formName"> Contáctenos </h1>
                <text> Nombre </text>
                <input type="text" name="name" onChange={inputChange} value={values.name}/>
                <text> Correo electrónico </text>
                <input type="text" name="email" onChange={inputChange} value={values.email}/>
                <text> Número de teléfono </text>
                <input type="text" name="phone_number" onChange={inputChange} value={values.phone_number}/>
                <text> Mensaje </text>
                <textarea name="message" onChange={inputChange} value={values.message}/>
                <button className="send" id="send">
                    ENVIAR
                </button>
            </div>
        </form>
    )
};

export default ContactForm;
