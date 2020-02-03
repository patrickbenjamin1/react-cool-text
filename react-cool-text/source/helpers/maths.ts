export namespace MathsHelpers {
    export const safeAdd = (...numbers: number[]) => {
        const filteredNumbers = numbers.filter(number => !!number);
        return filteredNumbers.reduce((total, number) => total + number, 0);
    };
}
