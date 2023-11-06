import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {
  return localStorage.getItem('User') ? <Outlet/> : <Navigate to= '/sesion' replace/>
}

