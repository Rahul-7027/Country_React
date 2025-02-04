import './App.css'
import About from "./pages/AboutPage.jsx/About"
import Contact from "./pages/ContactPage/Contact"
import Country from "./pages/CountryPage/Country"
import Home from "./pages/HomePage/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './layout/Applayout'
import Error from './pages/ErrorPage/Error'
import { HeroSection } from './layout/UI/HeroSectio'
import CountryDetails from './layout/CountryDetails'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      errorElement: <Error />,
      children: [

        {
          path: "/",
          element: <HeroSection />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        },
        {
          path: "/country",
          element: <Country />
        },
        {
          path: "/country/:id",
          element: <CountryDetails />
        }
      ]
    }

  ])

  return (
    <RouterProvider router={router} ></RouterProvider>

  )
}

export default App
