import { useEffect, useState } from "react"
import { Comment } from "./CommentItem"
import { useSelector, useDispatch } from "react-redux"
import { setComments as _setComments, fetchCommentListActionCreator } from './store/modules/commentsStore'

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

export default function useGetComments (activeTabType: any) {
  // const [comments, setComments] = useState<Comment[]>([])
  const comments: Comment[] = useSelector((state: any) => state.comments).list
  const dispatch = useDispatch()

  function setComments (list: Comment[]) {
    dispatch(_setComments(list))
  }

  useEffect(() => {
    async function getList () {
      // const res = await fetch('http://localhost:9000/list', {

      // })
      // const list = await res.json() 
      
      // setComments(getSortedComments(list as Comment[], activeTabType))

    }
    getList()

    console.log(111)
    
    /* @ts-ignore */
    dispatch(fetchCommentListActionCreator(activeTabType)) 

  }, [dispatch])

  return {
    comments,
    setComments
  }
}