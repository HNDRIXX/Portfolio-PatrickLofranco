import { lazy } from 'react'

const Welcome = lazy(() => import('./components/sections/Front'))
const About = lazy(() => import('./components/sections/About'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Socials = lazy(() => import('./components/sections/Socials'))
const Footer = lazy(() => import('./components/sections/Footer'))

import './App.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

function App() {
  return (
    <main>
      <LazyLoadComponent>
        <Welcome />
        <About />
        <Projects />
        <Socials />
        <Footer />
      </LazyLoadComponent>
    </main>
  )
}

export default App
