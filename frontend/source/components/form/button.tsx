import * as React from 'react';
import { Link } from 'react-router-dom';

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
    disabled?: boolean
    loading?: boolean
    to?: string
}

const ButtonInner: React.FunctionComponent<IButtonProps> = props => {
    const { children, loading, disabled, ...attr } = props;
    return (
        <button data-loading={loading} data-disabled={disabled} {...attr}>
            {children}
        </button>
    )
}

export const Button: React.FunctionComponent<IButtonProps> = props => {
    const { to, disabled, loading, ...innerProps } = props;
    if (!!to) {
        return (
            <Link to={to} className='button-wrapper' data-loading={loading} data-disabled={disabled}>
                <ButtonInner {...innerProps} />
            </Link>
        )
    }
    return (
        <ButtonInner disabled={disabled} loading={loading} {...innerProps} />
    )
}

export default Button;