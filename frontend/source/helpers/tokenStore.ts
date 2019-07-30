const tokenKey = 'session';

export function storeToken(token: string): void{
    localStorage.setItem(tokenKey, token);
}

export function getToken(): string {
    return localStorage.getItem(tokenKey);
}

export function removeToken(): void{
    localStorage.removeItem(tokenKey);
}