import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./Components/Blogs";
import CourseQuize from "./Components/CourseQuize";
import Error404 from "./Components/Error404";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      errorElement: <Error404></Error404>,
      children:[
              {
                path: '/',
                element:<Home></Home>,
                loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
              },
              {
                path:'statistics',
                element: <Statistics></Statistics>,
                loader:()=> fetch('https://openapi.programming-hero.com/api/quiz'),
              },
              {
                path:'blogs',
                element: <Blogs></Blogs>
              },
              {
                path: 'course/:courseid',
                element: <CourseQuize></CourseQuize>,
                loader: async({params})=>{
                  return fetch(`https://openapi.programming-hero.com/api/quiz/${params.courseid}`)
                }
              }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
