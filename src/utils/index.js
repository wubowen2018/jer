import {request} from 'request'

export function mockRequest({ url, method, data }){
    return request({
        url, 
        method, 
        data
    })
}




