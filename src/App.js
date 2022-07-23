import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navigation from 'components/Navigation'
import ReduxStopwatch from 'pages/ReduxStopwatch'
import ReactHooksStopwatch from 'pages/ReactHooksStopwatch'
import './App.css'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate to="/redux" />} />
        <Route path="redux" element={<ReduxStopwatch />} />
        <Route path="react-hooks" element={<ReactHooksStopwatch />} />
      </Route>
    </Routes>
  )
}
