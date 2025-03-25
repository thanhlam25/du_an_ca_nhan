import { Navigate } from "react-router-dom";
import { AuthWrapper, useAuth } from "./context/auth.context";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
    const { auth } = useAuth();

    if (!auth.isAuthenticated || auth.user.role != "3") {
        // return <Navigate to="/" replace />;
        console.log("12345");
    }
    return element;
};

export default PrivateRoute;
