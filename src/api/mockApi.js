import {mockRequest} from '@/utils'

/**
 * 请求demoList.js
 * @param {*} data 
 * @returns 
 */
export function query(data={}){
    return mockRequest({
        url: '/parameter/query',
        method: 'get',
        data
    })   
}

/**
 * 请求demoList.js
 * @param {*} data 
 * @returns 
 */
export function getUsers(data={}){
    return mockRequest({
        url: '/users/query',
        method: 'get',
        data
    })   
}