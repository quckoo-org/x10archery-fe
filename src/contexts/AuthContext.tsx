import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;

    userInfo: any;
    setUserInfo: (value: any) => void;

    userToken: string;
    setUserToken: (value: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userToken, setUserToken] = useState<string>("");
    const [userInfo, setUserInfo] = useState<any>(null);

    // Восстанавливаем состояние из localStorage при загрузке приложения
    useEffect(() => {
        const googleToken = localStorage.getItem("googleToken");
        const googleUserInfo = localStorage.getItem("googleUserInfo");

        if (googleToken && googleUserInfo) {
            setUserToken(googleToken);
            setUserInfo(JSON.parse(googleUserInfo));
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        const googleToken = localStorage.getItem("googleToken");
        const googleUserInfo = localStorage.getItem("googleUserInfo");

        if (isLoggedIn) {
            // Проверяем, нужно ли обновить токен
            if (!googleToken || googleToken !== userToken) {
                localStorage.setItem("googleToken", userToken);
            }
            // Проверяем, нужно ли обновить информацию о пользователе
            if (!googleUserInfo || googleUserInfo !== JSON.stringify(userInfo)) {
                localStorage.setItem("googleUserInfo", JSON.stringify(userInfo));
            }
        } else {
            // Если пользователь не залогинен, удаляем данные только если они есть
            if (googleToken || googleUserInfo) {
                localStorage.removeItem("googleToken");
                localStorage.removeItem("googleUserInfo");
            }
        }
    }, [isLoggedIn, userToken, userInfo]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, userToken, setUserToken, userInfo, setUserInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};