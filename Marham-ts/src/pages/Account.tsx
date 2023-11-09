import React from 'react'

import { UserAuth } from '../context/AuthContext'

const Account: React.FC = () => {
  const { logOut, user } = UserAuth()

  const handleSignOut = async (): Promise<void> => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="m-auto w-[300px]">
      <h1 className="pt-12 text-center text-2xl font-bold">Account</h1>
      <div className="">
        <img src={user?.photoURL} alt="" />
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleSignOut} className="mt-10 border px-5 py-2">
        Logout
      </button>
    </div>
  )
}

export default Account
