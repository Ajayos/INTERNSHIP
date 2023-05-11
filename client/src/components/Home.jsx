import React from 'react'
import Side from './sidebar/Side'
import Auth from '../auth/Auth'
const Home = () => {
  const user = JSON.parse(localStorage.getItem("Auth"));
  if(!user) return <Auth />;
  return (
    <Side />
  )
}

export default Home