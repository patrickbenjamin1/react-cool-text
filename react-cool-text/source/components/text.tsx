import * as React from 'react'

import { CoolLetter } from './letter';

import './text.scss'

export interface ICoolTextProps {
    children: string
}

export const CoolText: React.FunctionComponent<ICoolTextProps> = ({ children }) => {
    if (typeof children !== 'string'){
        console.error('CoolText component received children which were not string')
    }

    const Text = React.useMemo<string[]>(() =>  children.split(''),[children])

    return (
        <div className='cool-text'>
            {Text.map((letter, i) => <CoolLetter letter={letter} key={i} />)}
        </div>
    )
}