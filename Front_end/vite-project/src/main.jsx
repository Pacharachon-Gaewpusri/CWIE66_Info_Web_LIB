// import viteLogo from '../assets/vite.svg'
// import heroImg from '../assets/hero.png'
// import '../style.css'
// import Home from './src/pages/Home'
// import Signup from './src/pages/Signup'
// import Login from './src/pages/Login'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import LayoutRoot from '../layout/LayoutRoot'
// import NewReport from '../pages/NewReport'
// import EditReport from '../pages/EditReport'

// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<LayoutRoot />}>
//         <Route index element={<Home />} />
//         <Route path='/Home' element={<Home_after_Login />} />
//         <Route path='/Signup' element={<Signup />} />
//         <Route path='/Login' element={<Login />} />
//         <Route path='/new-record' element={<NewReport />} />
//         <Route path='*' element={<h1>ไม่พบหน้า</h1>} />
//         <Route path='/edit/:_id' element={<EditReport />} />
//       </Route>
//     ),{
//       basename: import.meta.env.VITE_BASENAME
//     }
//   )


//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)