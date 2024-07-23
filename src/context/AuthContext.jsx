import { createContext, useContext, useEffect, useState } from "react";
import 


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const signin = async (email, password) => {
        try {
            const response = await axiosClient.post("/v1/auth/login?platform=admin", { email, password });
            const { access_token } = response.data.token;
            setToken(access_token);
            localStorage.setItem("token", access_token);
            const userDataResponse = await axiosClient.get("/v1/profiles/me");
            setUser(userDataResponse.data);
            localStorage.setItem("user", JSON.stringify(userDataResponse.data));
            setIsAuthenticated(true);
        } catch (error) {
            console.error("Error signing in", error);
        }
    };

    const signout = async () => {
        try {
            // Clear token and user data from local storage
            setToken(null);
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setIsAuthenticated(false);
            await axiosClient.post("/v1/auth/logout");
        } catch (error) {
            console.error("Error signing out", error);
        }
    };
    

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                try {
                    const response = await axiosClient.get("/v1/profiles/me?detailed=true");
                    setUser(response.data);
                } catch (error) {
                    console.error("Error fetching user details", error);
                }
            }
        };
        fetchData();
    }, [token]);

    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, signin, signout, isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};
