import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllCategories from "../Pages/AllCategories/AllCategories";
import ReviewiItems from "../Pages/ReviewItem/ReviewiItems";
import ReviewDetails from "../Pages/ReviewItem/ReviewDetails";
import Signin from "../Pages/Login/Login/Signin";
import SignUp from "../Pages/Login/Register/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>
    },
  {
    path:'/allcategory',
    element:<AllCategories></AllCategories>
  },
{
  path:"/reviewItems/:categoryName",
  element:<ReviewiItems></ReviewiItems>,
  loader:({params})=> fetch(`http://localhost:5000/reviewItems/${params.categoryName}`)
},
{
  path:'/reviewItems/:type/:id',
  element:<PrivateRoutes><ReviewDetails></ReviewDetails></PrivateRoutes>,
  loader:({params}) => fetch(`http://localhost:5000/reviewItems/${params.type}/${params.id}`)
  
},
{
  path:'/signin',
  element:<Signin></Signin>
},
{
  path:'/signup',
  element:<SignUp></SignUp>
}
]
  }
])