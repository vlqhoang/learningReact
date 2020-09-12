import posts from "../data/posts";

const postReducer = (state = posts, action) => {
    switch (action.type) {
        case "REMOVE_POST":
            return removePost(state, action.payload);
        case "ADD_POST":
            return addPost(state, action.payload);
        default:
            return state
    }
}
export default postReducer;


const removePost = (state, postIdToRemove) => {
    return state.filter(post => post.id !== postIdToRemove);
}

const addPost = (state, newPost) => {
    return [...state, newPost]
}