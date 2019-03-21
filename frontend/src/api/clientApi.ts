import axios, { AxiosResponse } from 'axios';
import { getToken, storeToken } from '../helpers/tokenStore';

type verbs = 'get' | 'post' | 'delete' | 'put';

export interface payBody {
    name: string,
    email: string
}

class Api {
    public baseurl = process.env.NODE_ENV === 'production' ? 'https://tara-clerkin-ceramics.herokuapp.com' : 'http://localhost:3008';

    public async request(args: { verb: verbs, url: string, body?: {} }) {
        axios.defaults.withCredentials = true;
        if (getToken() === null) {
            const res = await axios.get(`${api.baseurl}/auth`, {
                withCredentials: true
            });
            storeToken(res.data.sessionToken);
        }
        return await axios({
            url: `${api.baseurl}/${args.url}`,
            method: args.verb,
            withCredentials: true,
            headers: {
                session: getToken()
            },
            data: args.body
        });
    }
}

class ClientApi {
    public poll = async (): Promise<AxiosResponse<any>> => {
        return api.request({ verb: 'get', url: `/` });
    }
}

export const api = new Api;
export const cartApi = new ClientApi; 