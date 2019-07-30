import { IDictionary } from "../../typings";

export type Status = 'loading' | 'loaded' | 'failed'

export interface IRequestSaga<T> {
    data: T
    status: Status
    error: any
}

export interface IPage {
    status: Status
    error: any
    keys: string[]
}

export interface IPagedState<T> {
    data: IDictionary<T>
    pages: IDictionary<IPage>
    totalPages: number
}
