import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleLoginButton: React.FC = () => {
    const handleLoginSuccess = async (credentialResponse: Promise<void> | any) => {
        const token = credentialResponse.credential;

        console.table(credentialResponse);
        console.log("Токен:", token);

        try {
            // Отправка токена на ваш бэкэнд для валидации
            const response = await axios.post("/api/auth/google", { token });
            console.log("Бэкэнд ответ:", response.data);
        } catch (error) {
            console.error("Ошибка при отправке токена:", error);
        }
    };

    const handleLoginError = () => {
        console.error("Ошибка при входе через Google");
    };

    return (
        <GoogleOAuthProvider clientId="393278966185-ouhepjfclvgi821qffhmvnsgqqcd79tr.apps.googleusercontent.com">
            <GoogleLogin
                text="signup_with"

                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;