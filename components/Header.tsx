import React from 'react'

export const Header = () => {
  return (
    <header className='flex py-3 px-4 mx-auto max-w-[70rem]'>
      <h1>Emi Acerbi</h1>

      <nav className='ml-auto'>
        <ul className='flex gap-20'>
          <li className='cursor-pointer'><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
