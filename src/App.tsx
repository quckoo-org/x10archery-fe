// App.tsx
import './App.css';
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import Header from './components/header/Header.tsx';
import Footer from './components/footer/Footer.tsx';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes.tsx';
//import {useAuth} from "./contexts/AuthContext.tsx";

const App: React.FC = () => {
    return (
        <MantineProvider defaultColorScheme="light">
            <Header/>
            <Routes>
                {routes.map(({ path, element }, index) => (
                    <Route key={index} path={path} element={element} />
                ))}
            </Routes>
            <Footer />
        </MantineProvider>
    );
};

export default App;