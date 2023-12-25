var colors = require('colors');

import * as bcrypt from 'bcrypt'

colors.enable()

const BaseFunctions = {

    _log: (message: string, state: string, method:string, path: string) => {

        const date = new Date()
        const time = date.toLocaleTimeString(["de-CH"])
        const day = date.toLocaleDateString()
        const fullDate = `${day}, ${time}`

        const color = state === '200' ? `\x1b[32m` : `\x1b[31m`


        console.log(`${color}[API]` + `\x1b[90m - ${fullDate}` + `\x1b[0m - ${message}` + `${color} - ${state}` + `\x1b[33m - ${method}` + `\x1b[37m - ${path}`)
    },

    _hash: (str: string) => {
        // hashing with bcrypt
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(str, salt);
        return hash
    },

    _compare: (str: string, hash: string) => {
        // comparing with bcrypt
        return bcrypt.compareSync(str, hash);
    },

    checkIfHashIsDiffrentToPassword: (password: string, hash: string) => {
        return BaseFunctions._compare(password, hash)
    }
}

export default BaseFunctions