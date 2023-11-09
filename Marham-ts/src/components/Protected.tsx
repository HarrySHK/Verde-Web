import React from 'react'
import { Navigate } from 'react-router-dom'

import { UserAuth } from '../context/AuthContext'

const Protected: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = UserAuth()
  if (!user) {
    return <Navigate to="/" />
  }
  return <>{children}</> // Return children wrapped in a fragment or another container
}

export default Protected
