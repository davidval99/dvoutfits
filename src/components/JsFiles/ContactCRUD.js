import React from "react";
import ContactForm from "./ContactForm";
import { db } from './Firebase';

const Consults = () => {

    const addOrEditConsult = async (consultObject) => {
        await db.collection("Consults").doc().set(consultObject);
    }

    return (
        <div>
            <ContactForm addOrEditConsult={addOrEditConsult} />
        </div>
    )

};
export default Consults;