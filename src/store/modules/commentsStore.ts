import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../CommentItem";

/**
 * todo 
 *  1. store类型注释
 *  2. store在组件外使用，比如自定义hooks
 *  3. 异步action使用的场景，为什么不直接在得到数据后，调用同步action
 */ 
const commentsStore = createSlice({
  name: 'comments',

  initialState: {
    list: []
  } as { list: Comment[] },

  reducers: {
    setComments (state, action: { payload: Comment[] }) {
      state.list = action.payload
    }
  }
})

const reducer = commentsStore.reducer

export default reducer
export const { setComments } = commentsStore.actions

// 异步actionCreator
export function fetchCommentListActionCreator (activeTabType: string) {
  return async (dispatch: any) => {
    // const res = await fetch('http://localhost:9000/list')
    // const list = await res.json()
    // dispatch(setComments(getSortedComments(list, activeTabType)))
  }
}

export function getSortedComments (list: Comment[], type: any) {
  list = [...list]

  switch (type) {
    case 'new':
      list.sort((a, b) => {
        const t1 = new Date(a.time).getTime()
        const t2 = new Date(b.time).getTime()

        return t2 - t1
      })
      break
    case 'hot':
      list.sort((a, b) => b.like - a.like)
      break
  }

  return list
}