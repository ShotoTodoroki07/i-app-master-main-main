import React from "react";
import SideNav from "./_components/SideNav";
import TopHeader from "./_components/TopHeader";

function Layout({ children }) {
  return (
    <div>
      <div className='hidden-full md:w-64 flex-col fixed inset-y-0 z-50 hidden'>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <TopHeader/>
    {children}
    </div>

    </div>
  )
}

export default Layout