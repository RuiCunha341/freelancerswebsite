export function getRandomNumberBetween(min: number, max: number): number {
    // Calculate the range of numbers (inclusive) to choose from
    const range = max - min + 1;
    // generate a random number between 0 and 1 (exclusive)
    const randomValue = Math.random();
    // scale the random number to the desired range and shift it by the minimum
    const randomNumber = Math.floor(randomValue * range) + min;
    return randomNumber;
}

export const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
};
