import React from 'react'
import Header from './assets/components/Header'
import About from './assets/components/About'
import Projects from './assets/components/Projects'
import Testimonial from './assets/components/Testimonial'
import Contact from './assets/components/Contact'
import Footer from './assets/components/Footer'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes"

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  )
}

export default App;

