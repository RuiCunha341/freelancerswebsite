import React, { useContext, useMemo, useState } from 'react';
import {
    IGameCardDictionaryInterface,
    IGameCardInterface,
    cardsDictionary,
    findGameCardByCode,
} from './allCardsInformation';

interface ICardsInfoProviderProps {
    children: JSX.Element;
}

interface ICardsInfoContext {
    cardsInfo: IGameCardDictionaryInterface;
    setCardsInfo?: React.Dispatch<
        React.SetStateAction<IGameCardDictionaryInterface | undefined>
    >;
    findGameCardByCode: (
        code: string,
        dictionary: IGameCardDictionaryInterface,
    ) => IGameCardInterface | undefined;
}

const CardsInfoContext = React.createContext<ICardsInfoContext>({
    cardsInfo: cardsDictionary,
    findGameCardByCode,
});

export const useCardsInfo = () => useContext(CardsInfoContext);

function CardsInfoProvider({ children }: ICardsInfoProviderProps) {
    const [cardsInfo, setCardsInfo] =
        useState<IGameCardDictionaryInterface>(cardsDictionary);
    const value = useMemo<ICardsInfoContext>(
        () => ({
            cardsInfo,
            setCardsInfo,
            findGameCardByCode,
        }),
        [cardsInfo],
    );

    return (
        <CardsInfoContext.Provider value={value}>
            {children}
        </CardsInfoContext.Provider>
    );
}

export default CardsInfoProvider;
