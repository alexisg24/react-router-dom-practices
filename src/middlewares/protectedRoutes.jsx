import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/auth";

const ProtectedRoutes = ({children}) =>{
    const navigate = useNavigate();
    const { user } = useAuth();
    React.useEffect(()=>{
        if (!user?.username) return navigate('/login')
    }, [])
    
    return children

}

export { ProtectedRoutes }