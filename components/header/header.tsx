import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import DeskNavbar from './desk-nav'
import MobileNav from './mobile-nav'
import Logo from '../logo'

const Header = () => {
  return (
    <header className='sticky top-0 w-full bg-white border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50'>
        <div className='mx-auto px-4 max-w-screen-xl'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex items-center mt-4'>
                    <Logo />                   
                </div>
                <DeskNavbar />
                <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header