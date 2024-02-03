import Cookie from 'js-cookie'

export default {
    auth(to, from, next) {
        //ou fazer ajax no back pra checar validade do token
        const token = Cookie.get('_myapp_token')

        if(!token) {
            next('/login')
        }
        next();
    },
}