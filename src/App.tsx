"use client";
import React, { useState } from 'react'
import './App.css'
import Welcome from './components/sections/Welcome';
import { Portfolio } from './components/sections/Portfolio';

function App() {
  return (
    <div>
      <Welcome />

      <Portfolio />
    </div>
  )
}

export default App
