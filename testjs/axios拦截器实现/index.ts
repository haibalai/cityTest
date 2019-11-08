
export interface AxiosInterceptorManager<T> {
    use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number

    eject(id: number): void
}

export interface ResolvedFn<T=any> {
    (val: T): T | Promise<T>
}

export interface RejectedFn {
    (error: any): any
}
