import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './store/index.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render((
  // {/* // <React.StrictMode> */}
  
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </Provider>
  // {/* // </React.StrictMode> */}
  )
)
