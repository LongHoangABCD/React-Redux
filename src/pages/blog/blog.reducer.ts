import { createAction, createReducer, current } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import Post from 'type/blog.type'

interface BlogState {
    postList: Post[]
    edittingPost: Post | null
}

// global state
const initalState: BlogState = {
    postList: initalPostList,
    edittingPost: null
}

// Truyền vào payload một cái kiểu dữ liệu Post
export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<string>('blog/startEditingPost')
export const cancelEditingPost = createAction('blog/cancelEditingPost')
export const finishEditingPost = createAction<Post>('blog/finishEditingPost')

const blogReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addPost, (state, action) => {
            // immerjs được sử dụng trong react toolkit
            // immerjs giúp chúng ta mutate một state an toàn
            const payload = action.payload
            state.postList.push(payload)
        })
        .addCase(deletePost, (state, action) => {
            const id = action.payload
            // find index có id
            const findPostFollowID = state.postList.findIndex((post) => post.id === id)
            if (findPostFollowID != -1) {
                state.postList.splice(findPostFollowID, 1)
            }
        })
        .addCase(startEditingPost, (state, action) => {
            const id = action.payload
            const findPost = state.postList.find((post) => post.id === id) || null
            if (findPost != null) {
                state.edittingPost = findPost
            }
        })
        .addCase(cancelEditingPost, (state, action) => {
            state.edittingPost = null
        })
        .addCase(finishEditingPost, (state, action) => {
            const postId = action.payload.id
            state.postList.some((post, index) => {
                if (post.id === postId) {
                    state.postList[index] = action.payload
                    return true
                }
                return false
            })
            state.edittingPost = null
        })
        // Nếu cái function đầu tiên trả về true thì Matcher sẽ chạy, nếu false thì không chạy
        // Những action type nào chứa chữ cancel (ví dụ: blog/cancelEditingPost ) thì chạy
        .addMatcher(
            (action) => action.type.includes('cancel'),
            (state, action) => {
                console.log(current(state))
            }
        )
        .addDefaultCase((state, action) => {
            console.log('Không dính vào case nào')
        })
})

export default blogReducer
