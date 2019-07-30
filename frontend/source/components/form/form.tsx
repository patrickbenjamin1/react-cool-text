import * as React from 'react';

interface IFormProps extends React.HTMLProps<HTMLFormElement> {
    onSubmit?: () => any
    disabled?: boolean
}

export const Form: React.FunctionComponent<IFormProps> = props => {
    const { onSubmit, children, disabled, ...formAtttr } = props;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!disabled && !!onSubmit) onSubmit();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} {...formAtttr}>
            {children}
        </form>
    )
}

export default Form;