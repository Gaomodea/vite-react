
import { useSearchParams, useParams, useNavigate, Outlet } from 'react-router-dom'

const Article = () => {
  const [query, setParams] = useSearchParams()
  const params = useParams()
  const navigate = useNavigate()

  console.log(query.get('name'))

  return (
    <div>
      我是文章页---- {params.id}

      <button onClick={() => setParams({ name: 'Bob' })}>设置Params</button>

      <div>
        <button onClick={() => navigate('about')}>about</button>
        <button onClick={() => navigate('info')}>info</button>
        <button onClick={() => navigate('/article/1001/info')}>info2</button>

        <Info />
      </div>

      <hr />

      <Outlet />
    </div>
  )
}

const Info = () => {
  const navigate = useNavigate()

  return (
    <div>
      son info

      <button onClick={() => navigate('info')}>info</button>

    </div>
  )
}

export default Article