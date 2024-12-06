import './App.css'
import '@mantine/core/styles.css';
import React, { useState, useEffect } from 'react';
import { MantineProvider } from '@mantine/core';
import Header from './components/header/Header.tsx';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines.tsx';
import Footer from './components/footer/Footer.tsx';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";


const GoogleCallback: React.FC = () => {
    console.log("GoogleCallback");
    const location = useLocation();
    const navigate = useNavigate();



    useEffect(() => {
        // Получаем токен из URL
        const params = new URLSearchParams(location.search);
        const idToken = params.get("id_token"); // Google может вернуть `id_token`

        console.log("params", params);

        if (idToken) {
            try {
                // Сохраняем токен в localStorage
                localStorage.setItem("googleToken2", idToken);

                // Можно декодировать токен, если нужно получить данные пользователя
                const userInfo = JSON.parse(atob(idToken.split(".")[1])); // Простое декодирование JWT
                console.log("Данные пользователя:", userInfo);

                // Перенаправляем пользователя на главную страницу
                navigate("/");
            } catch (error) {
                console.error("Ошибка обработки токена:", error);
            }
        } else {
            console.error("Токен не найден в параметрах URL");
            navigate("/");
        }
    }, [location, navigate]);

    return <div>Обработка авторизации...</div>;
};

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<any>(null);

    // Загружаем состояние из localStorage
    useEffect(() => {
        const savedUserInfo = localStorage.getItem("userInfo");
        if (savedUserInfo) {
            setUserInfo(JSON.parse(savedUserInfo));
            setIsLoggedIn(true);
        }
    }, []);

    // Выход из аккаунта
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserInfo(null);
        localStorage.removeItem("userInfo");
    };

    return (
        <MantineProvider>
                <Header
                    isLoggedIn={isLoggedIn}
                    userInfo={userInfo}
                    setIsLoggedIn={setIsLoggedIn}
                    setUserInfo={setUserInfo}
                    onLogout={handleLogout}
                />
                {/*<Hero />*/}
                {/*<Disciplines />*/}
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Disciplines />
                        </>
                    } />
                    <Route path="/api/callback" element={<GoogleCallback />} />
                </Routes>
                <Footer />
        </MantineProvider>
    );
};

export default App;