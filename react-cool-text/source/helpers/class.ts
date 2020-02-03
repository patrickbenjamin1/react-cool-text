export namespace ClassHelpers {
    export const classNames = (...classNamesInput: string[]) => {
        if (classNamesInput.length === 1) {
            return classNamesInput[0];
        }

        const filteredClassNames = classNamesInput.filter(className => !!className);
        return filteredClassNames.join(' ');
    };
}
