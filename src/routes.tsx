import React from 'react';
import HomePage from 'containers/HomePage';
import PageContent from 'containers/PageContent';
import config from 'config';

export interface IRoute {
    url: string;
    component: React.ReactElement;
}

export const Routes: IRoute[] = [
    {
        url: `${config.BASE_URL}/`,
        component: (
            <PageContent>
                <HomePage />
            </PageContent>
        ),
    },
    {
        url: `${config.BASE_URL}/*`,
        component: (
            <PageContent>
                <HomePage />
            </PageContent>
        ),
    },
];
