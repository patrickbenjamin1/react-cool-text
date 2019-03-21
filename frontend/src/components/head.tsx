import * as React from 'react';
import Helmet from 'react-helmet';

import { projectConstants } from '../projectConstants';

const meta: any = {
    "description": projectConstants.description,
    "og:title": projectConstants.title,
    "og:description": projectConstants.description,
    "og:image": projectConstants.og_imagePath
}

export const Head: React.FunctionComponent = () => {
    const { title } = projectConstants;
    return (
        <Helmet
            titleTemplate={`${title} | %s`}
            defaultTitle={title}
            meta={!!meta && Object.keys(meta).map(key =>
                ({ name: key, content: meta[key] })
            )}
        />
    )
}

export default Head;