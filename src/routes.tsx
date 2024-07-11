import React from 'react';
import NotFoundPage from 'containers/404Page';
import HomePage from 'containers/HomePage';

export interface IRoute {
    url: string;
    component: React.ReactElement;
}

export const Routes: IRoute[] = [
    {
        url: '/',
        component: <HomePage />,
    },
    {
        url: '*',
        component: <NotFoundPage />,
    },
];
