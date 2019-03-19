import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import View from '../components/ui/view';

interface IHomeProps extends RouteComponentProps {

}

export const Home: React.FunctionComponent<IHomeProps> = props => {
    return (
        <View>
            <p>This is home</p>
        </View>
    )
}

export default Home;