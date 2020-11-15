import React from "react";
import Login from "./LoginForm";
import { db } from './Firebase';
import 'firebase/auth';

const User = () => {

    const addOrEditUser = async (userObject) => {
        await db.collection("User").doc().set(userObject);
    }

    return (
        <div>
            <Login addOrEditUser={addOrEditUser} />
        </div>
    )


};
export default User;