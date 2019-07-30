import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import View from '../components/ui/view';

import './home.scss';

interface IHomeProps extends RouteComponentProps {

}

const dudes = [
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 0, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 1, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 2, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' },
    { i: 3, image: 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg' }
]

export const Home: React.FunctionComponent<IHomeProps> = props => {

    const dudeRef = React.useRef<HTMLDivElement>(null);
    const dudeWrapperRef = React.useRef<HTMLDivElement>(null);

    const [perRow, setPerRow] = React.useState(3);
    const [screenWidth, setScreenWidth] = React.useState(200);

    React.useEffect(() => {

        if (!!dudeRef.current && !!dudeWrapperRef.current) {
            const dudeWidth = dudeRef.current.clientWidth;
            const dudeWrapperWidth = dudeWrapperRef.current.clientWidth;

            setPerRow(Math.floor(dudeWrapperWidth / dudeWidth));
        }

        else {
            setPerRow(1);
        }

    }, [dudeRef, dudeWrapperRef, screenWidth])

    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setScreenWidth(window.innerWidth)
        }, { passive: true })
    }, [])

    const dudeRows = React.useMemo(() => {

        let start = 0;
        let pass = 0;

        const output = [];

        while (start < dudes.length) {

            const isOdd = pass % 2 !== 0;

            const rowNumber = isOdd ? perRow - 1 : perRow;

            output.push(dudes.slice(start, start + rowNumber));

            start += rowNumber;

            pass++;

        }

        return output;

    }, [perRow])

    return (
        <View>
            <p>This is home</p>

            <div className="dudes" ref={dudeWrapperRef}>
                {dudeRows.map((row, i) =>
                    <div className='dude-row' style={!!dudeRef.current ? { width: `${dudeRef.current.clientWidth * (i % 2 === 0 ? perRow : perRow - 1)}px` } : {}}>
                        {row.map(dude =>
                            <div className='dude' ref={dudeRef}>
                                <img src={dude.image} />
                                <p>{dude.i}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </View>
    )
}

export default Home;