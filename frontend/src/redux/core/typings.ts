export interface IRequestSaga<T> {
    data: T,
    status: 'loading' | 'loaded' | 'failed',
    error: any
}