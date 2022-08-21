import { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks/hooks";

interface RequireAuthProps {
    children: ReactElement
}

export const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
    const user = useAppSelector(state => state.user.user.uid);

    if (!user) {
        return <Navigate to='/' replace />
    }

    return children
}