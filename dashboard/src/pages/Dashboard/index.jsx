import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from "./Dashboard"
import DashboardLayout from "./DashboardLayout"
import Trade from "./Trade"
import Protocols from "./Protocols"
import Deposits from "./Deposits"
import Profile from "./Profile"
import WebsiteSetting from "./WebsiteSetting"

export default function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>  
          <Route index element={<Dashboard/>} />   
          <Route path="home" element={<Dashboard/>} />
          <Route path="trade" element={<Trade/>} />
          <Route path="protcols" element={<Protocols/>} />
          <Route path="deposit" element={<Deposits />} />
          <Route path="profile" element={<Profile />} />
          <Route path="website" element={ <WebsiteSetting/>} />
        </Route>
      </Routes>
    </>
  )
}