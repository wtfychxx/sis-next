import { Http } from '../lib';

const http = new Http('http://127.0.0.1:70/api');

export async function generate(prm_type = '', prm_table = ''){
    const param = {
        type: prm_type,
        table: prm_table
    }
    return await http.post('/generate', JSON.stringify(param));
}