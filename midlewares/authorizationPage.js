import Cookies from 'next-cookies';

export function unauthPage(ctx) {
    return new Promise(resolve=>{
        const getCookie = Cookies(ctx)
        if(getCookie.token){
            return ctx.res.writeHead(302, {
                Location: '/posts'
            }).end()
        }
        return resolve('unauthorized')
    })
}

export function authPage(ctx) {
    return new Promise(resolve=>{
        const getCookie = Cookies(ctx)
        if(!getCookie.token){
            return ctx.res.writeHead(302, {
                Location: '/auth/login'
            }).end()
        }
        return resolve({
            token: getCookie.token
        })
    })
}