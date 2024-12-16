import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../contexts/AuthContext.tsx";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { IGoogleUserInfo } from "./IGoogleUserInfo.tsx";
import {createGoogleUserInfo} from "./GoogleUserUtils.tsx";


const GoogleLoginCallBack: React.FC = () => {
    const { setUserToken, setUserInfo,setIsLoggedIn } = useAuth();
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse: any) => {
        const token = credentialResponse.credential;
        try {
            // Сохраняем токен
            setUserToken(token);
            localStorage.setItem("googleToken", token);

            // Декодируем токен для извлечения данных пользователя
            const decodedToken = jwtDecode<IGoogleUserInfo>(token);
            const googleUserInfo = createGoogleUserInfo(decodedToken);
            setUserInfo(googleUserInfo);
            localStorage.setItem("googleUserInfo", JSON.stringify(googleUserInfo));

            setIsLoggedIn(true);

            // Перенаправляем пользователя
            navigate("/");
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
                text="continue_with"
                onSuccess={handleLoginSuccess}
                onError={handleLoginError}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginCallBack;