// routes.tsx
import Hero from './components/Hero';
import Disciplines from './components/Disciplines';
import GoogleLoginCallBack from "./components/google/GoogleLoginCallBack.tsx";

export const routes = [
    { path: '/', element: <><Hero /><Disciplines /></> },
    { path: '/api/callback', element: <GoogleLoginCallBack /> },
];