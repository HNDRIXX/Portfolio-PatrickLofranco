"use client";
import { lazy } from 'react'

const Welcome = lazy(() => import('./components/sections/Front'));
const Projects = lazy(() => import('./components/sections/Projects'));
import './App.css'

function App() {
  return (
    <main>
      <Welcome />

      <Projects />
    </main>
  )
}

export default App
