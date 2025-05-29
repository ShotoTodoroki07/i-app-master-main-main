"use client";
import { Shield, Upload } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

function SideNav() {
  const menuList = [
  
   {
     id: 1,
    name: 'Upload',
    icon:Upload,
    path: '/upload'
    },
    {
     id: 2,
    name: 'Files',
    icon:Upload,
    path: '/files'
    },
    {
     id: 3,
    name: 'Upgrade',
    icon:Shield,
    path: '/upgrade'
    },
  ]
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex flex-col float-left'>
      {menuList.map((item, index) => (
        <button
          key={index}
          className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full ${
            activeIndex === index ? "text-black font-semibold" : "text-gray-500"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <item.icon />
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
}

export default SideNav;