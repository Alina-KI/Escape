import {instance} from "./instance"

export type Webcam = {
    id: string
    title: string
    image: {
        current: {
            preview: string
        }
    }
    location: {
        country: string
        city: string
        region: string
        region_code: string
        continent: string
        timezone: string
        wikipedia: string
    }
}

export type WebcamsResponse = {
    result: {
        webcams: Webcam[]
    }
}

export const getNewPostsList = () => instance.get<WebcamsResponse>('list/nearby=10000,10,99999', {params:{offset: 20}})
    .then(res => res.data.result.webcams)