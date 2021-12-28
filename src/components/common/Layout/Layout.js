import React from 'react'
import { Outlet } from "react-router-dom";
import { Header } from '..'
import s from './Layout.module.css'

const Layout = () => (
  <div className={`${s.layout} p-p-sm-1 p-p-md-3 p-p-lg-5 p-p-xl-6`}>
    <Header />
    <main className="content">
      <Outlet />
    </main>
  </div>
);

export default Layout
