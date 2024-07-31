import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Connect4 from './pages/Connect4.jsx';
import MemoryLane from './pages/MemoryLane.jsx';
import TikTakToe from './pages/TikTakToe.jsx';
import Trivia from './pages/Trivia.jsx';
import Root from './pages/Root.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: '/', element: <App /> },
      {path: '/connect4', element: <Connect4 />},
      {path: '/memorylane', element: <MemoryLane />},
      {path: '/tiktaktoe', element: <TikTakToe />},
      {path: '/trivia', element: <Trivia />}
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
