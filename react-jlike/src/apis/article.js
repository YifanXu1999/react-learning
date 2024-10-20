import {request} from "@/utils";

export function getChannelAPI(formData) {
    return request({
        url: '/channels',
        method: 'GET',
    })
}

