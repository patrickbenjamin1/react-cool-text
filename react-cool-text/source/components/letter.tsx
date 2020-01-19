import * as React from 'react'

import './letter.scss'

export interface ICoolLetterProps {
    letter: string
}

export const CoolLetter: React.FunctionComponent<ICoolLetterProps> = ({ letter }) => {
    return (
        <div className='cool-text-letter'>
            {letter}
        </div>
    )
}