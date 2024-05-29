
import classNames from 'classnames'
import { FormEvent, useState } from 'react'
import './App.scss'
import CommentItem, { Id } from './CommentItem'
import EffectComponent from './EffectComponent'
import useGetComments, { getSortedComments } from './useGetComments'

const src = 'https://img1.baidu.com/it/u=3840978109,786281139&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1716570000&t=9af7899847421cd8c1930b700a42324f'

const user = {
  uid: 1,
  name: 'Daniel'
}

const tabs = [
  { type: 'new', text: '最新' },
  { type: 'hot', text: '最热' }
]

export default function App () {
  const [activeTabType, setActiveTabType] = useState(tabs[0].type)
  const { comments, setComments } = useGetComments(activeTabType)

  function handleDelete (id: Id) {
    const newComments = comments.map(item => {
      if (item.id === id) {
        return {
          ...item,
          delete: true
        }
      }

      return {
        ...item
      }
    })

    setComments(newComments)
  }

  function handleClickTab(item: any) {
    setActiveTabType(item.type)
    setComments(getSortedComments(comments, item.type))
  }

  const [content, setContent] = useState('')
  const [id, setId] = useState(4)

  function handleSubmit (e: FormEvent) {
    e.preventDefault()

    if (!content) {
      return
    }
    
    const list = [...comments]
    list.push({
      id: id,
      src,
      uid: user.uid,
      nick: user.name,
      comment: content,
      time: new Date().toLocaleString(),
      like: 0,
      delete: false
    })
    setComments(getSortedComments(list, activeTabType))
    setContent('')
    setId(n => n + 1)
  }

  return (
    <div className='comment-container'>
      <div className='comment-header'>
        <div className='comment-title'>评论</div>
        <div className='comment-search'>
          <div className='comment-sort'>
            {tabs.map(item => <span 
              key={item.type} 
              className={classNames({
                'comment-sort__item': true,
                'active': item.type === activeTabType
              })}
              onClick={() => handleClickTab(item)}
            >{item.text}</span>)}
          </div>
          <form className='comment-form' onSubmit={handleSubmit}>
            <input className='comment-form__input' value={content} onChange={(e) => setContent(e.target.value)}/>
            <button className='comment-form__btn'>评论</button>
          </form>
        </div>
      </div>
      <div>
        {
          comments
            .filter(comment => !comment.delete)
            .map(comment => (
              <CommentItem 
                key={comment.id} 
                comment={comment} 
                onDelete={handleDelete}
                showDelete={comment.uid === user.uid}
              />
            ))
        }
      </div>

      <EffectComponent />
    </div>
  )
}