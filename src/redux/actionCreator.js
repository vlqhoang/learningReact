/**
 * Action creators
 */

export const removePostAction = (idToRemove) => {
    return {
        type: 'REMOVE_POST',
        payload: idToRemove
    }
}

export const addPostAction = (newPost) => {
    return {
        type: 'ADD_POST',
        payload: newPost
    }
}