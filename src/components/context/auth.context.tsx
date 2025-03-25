import { createContext, ReactNode, useEffect, useState, Dispatch, SetStateAction, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { info, logout } from "../../services/userService";
import { AxiosError } from "axios";

interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        email: string;
        role: string;
    };
}

interface AuthContextType {
    auth: AuthState;
    setAuth: Dispatch<SetStateAction<AuthState>>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth phải được sử dụng trong AuthProvider");
    }
    return context;
};

interface AuthWrapperProps {
    children: ReactNode;
}

export const AuthWrapper = ({ children }: AuthWrapperProps) => {
    const [auth, setAuth] = useState<AuthState>({
        isAuthenticated: false,
        user: {
            id: "",
            email: "",
            role: "",
        },
    });

    const { data, isLoading, error } = useQuery({
        queryKey: ["userInfo"],
        queryFn: info,
        enabled: !!localStorage.getItem("token"),
    });

    const handleLogout = async () => {
        try {
            await logout();
            localStorage.removeItem("token");
            setAuth({
                isAuthenticated: false,
                user: {
                    id: "",
                    email: "",
                    role: "",
                },
            });
            window.location.href = "/login";
        } catch (logoutError) {
            console.error("Lỗi khi đăng xuất:", logoutError);
        }
    };

    useEffect(() => {
        if (data) {
            setAuth({
                isAuthenticated: true,
                user: {
                    id: data.id || "",
                    email: data.email || "",
                    role: data.role || ""
                },
            });
        } else if (error) {
            const axiosError = error as AxiosError;
            if (axiosError.response?.status === 401) {
                handleLogout();
            } else {
                setAuth({
                    isAuthenticated: false,
                    user: {
                        id: "",
                        email: "",
                        role: "",
                    },
                });
            }
        }
    }, [data, error]);
    console.log(auth);

    if (isLoading) {
        return <div>Đang tải thông tin người dùng...</div>;
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};