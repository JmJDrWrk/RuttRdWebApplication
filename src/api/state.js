export default class State {


    static fileshost = 'https://ruttradarvalkiria.jmjdrwrk.repl.co/file/'

    static state_push(his) {
        let history = JSON.parse(window.localStorage.getItem('state-history')) || []
        if(!JSON.stringify(history).includes(his)){history.push(his) }
        window.localStorage.setItem('state-history', JSON.stringify(history))
    }
    static setMe(me) {
        this.state_push('me')
        window.localStorage.setItem('me',JSON.stringify(me))
    }
    static getMe() {
        return JSON.parse(window.localStorage.getItem('me'))
    }
    static setToken(token) {
        this.state_push('auth-token')
        window.localStorage.setItem('auth-token',token)
    }
    static getToken() {
        return window.localStorage.getItem('auth-token') || false
    }
    static setOther(other) {
        this.state_push('other-profile')
        window.localStorage.setItem('other-profile', JSON.stringify(other))
    }
    static getOther() {
        return JSON.parse(window.localStorage.getItem('other-profile')) || {}
    }
    /*logout*/
    static logout() {
        let history = JSON.parse(window.localStorage.getItem('state-history')) || []
        history.forEach(his => {
            window.localStorage.removeItem('his')
        });
    }
    static setUserIntention(str) {
        return window.localStorage.setItem('userIntention', str)
    }
    static getUserIntention() {
        return window.localStorage.getItem('userIntention')
    }
    static consumeUserIntention() {
        const userIntention = window.localStorage.getItem('userIntention')
        window.localStorage.removeItem('userIntention')
        return userIntention
    }

    
}