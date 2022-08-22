import { SET_IMAGES } from "./type";

export const setImages = (images) => {
    return {
        type: SET_IMAGES,
        payload: images
    }
}