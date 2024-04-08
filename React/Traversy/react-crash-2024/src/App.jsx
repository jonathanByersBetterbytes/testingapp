import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />  
      <Route path='/jobs' element={<JobsPage />} />  
      <Route path='/*' element={<NotFoundPage />} />  
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App




// <>
// <Navbar />
// </>











// import React from 'react'

// const App = () => {
//   const name = 'JB'
//   const names = ['JB','Jill','Chloe','Javi']
//   return (
//     <>
//       <div classNameName='text-5xl'>App</div>
//       <p style={{ color: 'red', fontSize: '24px'}}>Hello {name}</p>
//       <ul>
//         {names.map((name, index) => (
//           <li key={index}>{name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }

// export default App