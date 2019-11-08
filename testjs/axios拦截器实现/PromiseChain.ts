
interface PromiseChain {
    resolved: ResolvedFn | ((config: AxiosRequestConfig) => AxiosPromise)
    rejected?: RejectedFn
}

request(url: any, config?: any): AxiosPromise {
    if (typeof url === 'string') {
        if (!config) {
            config = {}
        }
        config.url = url
    } else {
        config = url
    }

    const chain: PromiseChain[] = [{
        resolved: dispatchRequest,
        rejected: undefined
    }]

    this.interceptors.request.forEach(interceptor => {
        chain.unshift(interceptor)
    })

    this.interceptors.response.forEach(interceptor => {
        chain.push(interceptor)
    })

    let promise = Promise.resolve(config)

    while (chain.length) {
        const { resolved, rejected } = chain.shift()!
        promise = promise.then(resolved, rejected)
    }

    return promise
}
