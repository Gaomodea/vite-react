const src = 'https://img1.baidu.com/it/u=3840978109,786281139&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1716570000&t=9af7899847421cd8c1930b700a42324f'

const list = [
  {
    id: 1,
    src,
    nick: 'Daniel',
    uid: 1,
    comment: '这位女生好漂亮啊！',
    time: '2024-05-23 12:14:12',
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
    like: 6,
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

type _Comment = typeof list[number]
export interface Comment extends _Comment {

}
export type Id = Comment['id']

export interface CommentItemProps {
  comment: Comment;
  onDelete(id: Id): void;
  showDelete: boolean;
}

export default function CommentItem ({ comment, onDelete, showDelete } : CommentItemProps) {
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