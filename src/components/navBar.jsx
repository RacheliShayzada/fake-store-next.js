
"use client"; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import './navBar.modules.css';

function NavBar() {
  const pathname = usePathname();

  return (
    <div className="div-container">
      <nav className="flex justify-between items-center px-12 py-4">
        <h1 className="text-2xl font-bold">Next.js</h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/" className={pathname === '/' ? 'active-link' : 'link'}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/Books" className={pathname === '/Books' ? 'active-link' : 'link'}>
              Books
            </Link>
          </li>
          <li>
            <Link href="/Jewlary" className={pathname === '/Jewlary' ? 'active-link' : 'link'}>
              Jewlary
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
