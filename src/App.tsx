import React, { Suspense } from 'react';
import './App.css';
import './fonts/Circular-std-medium-500.ttf';
import './fonts/CircularStd-Black.woff';
import './fonts/CircularStd-Bold.woff';
import './fonts/CircularStd-BlackItalic.woff';
import './fonts/CircularStd-BoldItalic.woff';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { IRoute, Routes as AppRoutes } from './routes';
import configureStartup from './startup';

configureStartup();

function App() {
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <Routes>
                    {AppRoutes.map(({ url, component }: IRoute) => (
                        <Route key={url} path={url} element={component} />
                    ))}
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
