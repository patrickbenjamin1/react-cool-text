import * as React from 'react';
import './socialLink.scss';

type SocialLinkTypes = 'mail' | 'facebook' | 'instagram' | 'soundcloud' | 'spotify' | 'twitter';

interface ISocialLinkProps {
    href: string
    newTab?: boolean
    service: SocialLinkTypes
}

export const SocialLink: React.FunctionComponent<ISocialLinkProps> = props => {
    const { href, newTab, service } = props;
    return (
        <a className='social-link' href={href} target={newTab ? '_blank' : ''} title={service}>
            <img src={`/social/${service}.svg`} alt={!!service ? service : ''} />
        </a>
    );

}

SocialLink.defaultProps = {
    newTab: true
}

export default SocialLink;