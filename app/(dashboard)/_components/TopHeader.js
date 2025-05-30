import { UserButton,useUser } from '@clerk/nextjs'
import { AlignJustify } from 'lucide-react'
import React from 'react'
import Image from 'next/image'



function TopHeader() {
  return (
    <div className='flex p-5 border-b items-center first-letter:justify md:justify-end'>
        <AlignJustify className='md:hidden'/>
        <Image src='/logo.svg' alt="company logo" width={150} height={100} className= 'md:hidden' />
        <Image src="/images/avatar.png" alt="art User profile avatar" width={50}height={50} />
        <UserButton/>
    </div>
  )
}

export default TopHeader