'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import style from '@/app/main.module.css'



const links = [
    {
        label: "Inicio",
        href: "/"
    },
    {
        label: "Productos",
        href: "/producto"
    },
    {
        label: "Carrito",
        href: "/carrito"
    },
    {
        label: "Contacto",
        href: "/contacto"
    },

]





const Header = () => {
    
const pathname = usePathname()
console.log(pathname);

  return (

    <header className='w-full bg-neutral-300'>
        <div className='container py-1 flex justify-between items-center h-40'>
            <Link href={"/"}>
            <Image
            className=''
            src={'/logo.svg'}
            alt=''
            width={200}
            height={50}
            />
            </Link>     
            <nav className={`flex gap-2`}>
            {
                links.map(link =>{
                    return<Link
                    key={link.label}
                    href={link.href}
                    className={`${pathname === link.href ?'font-bold text-white': ''}text-base text-gray-900 p-3`}
                    >
                    {link.label}
                    </Link>
                })
            }
            </nav>
        </div>
    </header>
  )
}

export default Header