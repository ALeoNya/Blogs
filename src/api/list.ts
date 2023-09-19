import request from '@/util/request'
export const getArticleTitle = function() {
    return request({
        url: '/getAllTitle',
        method: 'get',
    })
}

export const getContent  = function(cid:number) {
    return request({
        url: '/article/getContentByid',
        method: 'post',
        data: {
            cid,
        }
    })
}