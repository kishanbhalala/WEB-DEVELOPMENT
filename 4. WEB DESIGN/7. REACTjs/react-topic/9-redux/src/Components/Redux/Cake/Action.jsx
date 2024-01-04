import { buyCake, buyFood } from "./Type"

export const buyer = () => {
    return {
        type: buyCake,
    }
}

export const buy2 = () => {
    return{
        type:buyFood,
    }
}