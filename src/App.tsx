"use client";
import React, { useState } from 'react'

import Welcome from './components/sections/Front';
import Projects from './components/sections/Projects';
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
