import React from "react";
import Signin from "./SigninForm";
import { db } from './Firebase';

const User = () => {

    const addOrEditUser = async (userObject) => {
        await db.collection("User").doc().set(userObject);
    }

    return (
        <div>
            <Signin addOrEditUser={addOrEditUser} />
        </div>
    )

};
export default User;