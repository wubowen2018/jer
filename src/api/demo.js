import {mockRequest} from '@/utils'

/**
 * 查询所有的学生
 */
export function getServerList(data= {}){
    return mockRequest({
        url: './deplayServerList.json',
        method: 'GET',
        data
    })

}
