import React from 'react';
import NotFoundPage from 'containers/404Page';
import HomePage from 'containers/HomePage';
import PageContent from 'containers/PageContent';

export interface IRoute {
    url: string;
    component: React.ReactElement;
}

export const Routes: IRoute[] = [
    {
        url: '/freelancerswebsite/',
        component: (
            <PageContent>
                <HomePage />
            </PageContent>
        ),
    },
    {
        url: '/freelancerswebsite/*',
        component: (
            <PageContent>
                <NotFoundPage />
            </PageContent>
        ),
    },
];
