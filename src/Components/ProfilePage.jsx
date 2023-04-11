import React from "react";
import { ProtectedRoutes } from "../middlewares/protectedRoutes";
import { useAuth } from "./auth";

const ProfilePage = () =>{
    const auth = useAuth();
    return (
        <>
            <ProtectedRoutes>
            <h1>Welcome!</h1>
            <p>{auth.user?.username}</p>
            </ProtectedRoutes>
        </>
    )
}

export { ProfilePage }