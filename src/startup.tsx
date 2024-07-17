import Axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import { configure } from 'axios-hooks';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { getCookie, SESSION_COOKIE_KEY } from 'services/cookies';
import appConfig from './config';

const cache = setupCache({
    maxAge: 15 * 60 * 1000,
    exclude: {
        query: false,
    },
    invalidate: async (cfg: { store: any }, req: { headers: any }) => {
        const disableCache = req.headers!.DisableCache;
        if (disableCache === 'true') {
            await (cfg.store as any).removeItem((cfg as any).uuid);
        }
    },
});

export const axios = Axios.create({
    baseURL: appConfig.API_URL,
    adapter: cache.adapter,
    headers: { 'Content-Type': 'application/json' },
});

function configureStartup() {
    // i18n SECTION
    i18next
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next) // bind react-i18next to the instance
        .init({
            backend: {
                // for all available options read the backend's repository readme file
                loadPath: `${appConfig.REACT_APP_TRANSLATIONS_URL}/locales/{{lng}}.json`,
            },
            fallbackLng: 'en',
            debug: appConfig.isDevelopment,
        });

    // AXIOS SECTION
    configure({ axios });

    axios.interceptors.request.use(
        async config => {
            const newConfig = config;
            const token = getCookie(SESSION_COOKIE_KEY);
            if (token) {
                newConfig.headers!.Authorization = token;
            }
            return newConfig;
        },
        error => Promise.reject(error),
    );

    axios.interceptors.response.use(
        response => response,
        async error => {
            if (error.response && error.response.data) {
                const dataObj =
                    error.response.data instanceof Blob
                        ? JSON.parse(await error.response.data.text())
                        : error.response.data;
                return Promise.reject(dataObj);
            }
            return Promise.reject(error);
        },
    );
}

export default configureStartup;
