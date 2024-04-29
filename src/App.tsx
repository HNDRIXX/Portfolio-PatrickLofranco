"use client";
import React, { useState } from 'react'

import Welcome from './components/sections/Front';
import Portfolio from './components/sections/Portfolio';
import './App.css'

function App() {
  return (
    <main>
      <Welcome />
      <Portfolio />
    </main>
  )
}

export default App
