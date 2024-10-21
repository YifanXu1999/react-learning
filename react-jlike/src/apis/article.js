import {request} from "@/utils";

export function getChannelAPI(formData) {
    return request({
        url: '/channels',
        method: 'GET',
    })
}

export function createArticleAPI(formData) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',
        data: formData
    })
}