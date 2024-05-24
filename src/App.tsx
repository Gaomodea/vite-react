
import { useState } from 'react'
import './App.scss'

const src = 'https://img1.baidu.com/it/u=3840978109,786281139&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1716570000&t=9af7899847421cd8c1930b700a42324f'

const list = [
  {
    id: 1,
    src,
    nick: 'Daniel',
    uid: 1,
    comment: '这位女生好漂亮啊！',
    time: '2024-05-22 12:12:12',
    like: 0,
    delete: false
  },
  {
    id: 2,
    src,
    nick: 'Jack',
    uid: 2,
    comment: '这位女生好漂亮啊！嗯咯',
    time: '2024-05-23 12:12:12',
    like: 2,
    delete: false
  },
  {
    id: 3,
    src,
    uid: 3,
    nick: 'Moze',
    comment: '这位女生好漂亮啊！哈哈',
    time: '2024-05-24 12:12:12',
    like: 4,
    delete: false
  }
]

const user = {
  uid: 1,
  name: 'Daniel'
}

const tabs = [
  { type: 'new', text: '最新' },
  { type: 'hot', text: '最热' }
]

type Comment = typeof list[number]
type Id = Comment['id']

interface CommentItemProps {
  comment: Comment;
  onDelete(id: Id): void;
  showDelete: boolean;
}

function CommentItem ({ comment, onDelete, showDelete } : CommentItemProps) {
  // comment = comment || ({}) as Comment

  return (
    <div className="comment-item">
      {/* 头像 */}
      <img className="comment-item__avatar" src={comment.src} />

      <div className="comment-item__info">
        {/* 昵称 */}
        <div className='comment-item__nick'>{comment.nick}</div>
        {/* 评论 */}
        <div className='comment-item__comment'>{comment.comment}</div>
        {/* 时间 */}
        <div className='comment-item__footer'>
          <span className='comment-item__time'>{comment.time}</span>
          <div>
            <span className='comment-item__btn'>点赞（{comment.like}）</span>
            { showDelete && <span className='comment-item__btn' onClick={() => onDelete(comment.id)}>删除</span> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App () {
  const [comments, setComments] = useState(list)

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

    setComments(() => newComments)
  }

  return (
    <div className='comment-container'>
      <div className='comment-header'>
        <div className='comment-title'>评论</div>
        <div className='comment-search'>
          <div className='comment-sort'>
            {tabs.map(item => <span key={item.type} className='comment-sort__item '>{item.text}</span>)}
          </div>
          <form className='comment-form'>
            <input className='comment-form__input' />
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
    </div>
  )
}