


import { createConnection } from 'mysql2'

export const query = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'shopping'
})