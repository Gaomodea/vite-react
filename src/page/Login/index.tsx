import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate()

  return (
    <div>
      我是登录页---

      <Link to="/article">前往Article</Link>
      <button onClick={() => navigate('/article')}>前往Article2</button>
      <button onClick={() => navigate('/article?id=1001&name=Jack')}>前往Article传参</button>
      <button onClick={() => navigate('/article/1001?name=Jack')}>前往Article Params传参</button>
    </div>
  )
}

export default Login