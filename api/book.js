import { Http } from '../lib'

const http = new Http('http://127.0.0.1:70/api')

export async function getBookList(){
    return await http.post('/Book', {});
}