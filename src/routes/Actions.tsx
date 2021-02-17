import { NOT_FOUND } from 'redux-first-router'

export const goToPage = (type: string, params?: any) => {
    return({
        type,
        payload: params && { params }
    })
}

export const goToPageExt = (type: string, params?: any) => {
    return({
        type,
        payload: params
    })
}

export const goHome = () => ({
    type: 'Home'
})

export const notFound = () => ({
    type: NOT_FOUND
})