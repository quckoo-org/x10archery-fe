import './App.css'
import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider } from '@mantine/core';
import Header from './components/Header';
import Hero from './components/Hero';
import Disciplines from './components/Disciplines.tsx';
import Footer from './components/Footer';


const App: React.FC = () => {
    return (
        <MantineProvider >
            <Header />
            <Hero />
            <Disciplines />
            <Footer />
        </MantineProvider>
    );
};

export default App;