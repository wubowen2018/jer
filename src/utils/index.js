import request from './request.js'

export function mockRequest({ url, method, data }){
    return request({
        url, 
        method, 
        data
    })
}




