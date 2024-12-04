import React, { useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import {jwtDecode} from "jwt-decode"; // Исправленный импорт

interface GoogleLoginButtonProps {
    onLoginSuccess: (userInfo: any) => void; // Callback для передачи данных в Header
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ onLoginSuccess }) => {
    useEffect(() => {
        const savedToken = localStorage.getItem("googleToken");
        if (savedToken) {
            try {
                // Декодируем токен из localStorage
                const userInfo = jwtDecode(savedToken);
                onLoginSuccess(userInfo); // Передаем данные в родительский компонент
            } catch (error) {
                console.error("Ошибка декодирования сохраненного токена:", error);
                localStorage.removeItem("googleToken"); // Удаляем недействительный токен
            }
        }
    }, [onLoginSuccess]);

    const handleLoginSuccess = (credentialResponse: any) => {
        const token = credentialResponse.credential;
        try {
            // Декодируем токен с помощью jwtDecode
            const userInfo: any = jwtDecode(token);

            // Сохраняем токен в localStorage
            localStorage.setItem("googleToken", token);

            // Передаем данные пользователя в Header
            onLoginSuccess(userInfo);
        } catch (error) {
            console.error("Ошибка декодирования токена:", error);
        }
    };

    const handleLoginError = () => {
        console.error("Ошибка при входе через Google");
    };

    return (
        <GoogleOAuthProvider clientId="393278966185-ouhepjfclvgi821qffhmvnsgqqcd79tr.apps.googleusercontent.com">
            <GoogleLogin
                prompt="select_account"
                text="continue_with"
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;