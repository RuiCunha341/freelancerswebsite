import { useEffect, useState } from 'react';

function preloadImage(src: string) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        };
        const errorAndAbortFunction = () => {
            reject(src);
        };
        img.onerror = errorAndAbortFunction;
        img.onabort = errorAndAbortFunction;
        img.src = src;
    });
}

export default function useImagesPreloader(imageList: string[]) {
    const [imagesPreloaded, setImagesPreloaded] = useState<boolean>(false);

    useEffect(() => {
        let isCancelled = false;

        async function effect() {
            if (isCancelled) {
                return;
            }

            const imagesPromiseList: Promise<any>[] = [];
            // eslint-disable-next-line no-restricted-syntax
            for (const i of imageList) {
                imagesPromiseList.push(preloadImage(i));
            }

            await Promise.all(imagesPromiseList);

            if (isCancelled) {
                return;
            }

            setImagesPreloaded(true);
        }

        effect();

        return () => {
            isCancelled = true;
        };
    }, [imageList]);

    return { imagesPreloaded };
}
