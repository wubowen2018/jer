let demoList = {
    status: '000000',
    message: 'SUCCESS',
    data: {
        total: 100,
        'rows|10': [{
            id: '@guid',
            name: '@cname',
            'age|20-30': 23,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师',"GTO"]
        }]
    }
};

let users = {
    status: '000000',
    message: 'SUCCESS',
    data: {
        total: 100,
        'rows|10': [{
            id: '@guid',
            name: '@name',
            'age|20-30': 23,
            'score|120-150': 125,
            'job|1': ['前端工程师', '后端工程师', 'UI工程师', '需求工程师',"GTO"]
        }]
    }
};


export default {
    'get|/parameter/query': demoList,
    'get|/users/query': users
}
