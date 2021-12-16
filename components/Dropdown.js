import React, { useEffect } from 'react';
import {MenuItems} from './MenuItems';
import Pages from '../lib/page.json';
import Link from 'next/link';
import dropStyle from './dropdown.module.css';
export default function Dropdown({closeDropdown}) {
  return(
    <div className={dropStyle.dropdownMenu}>
      {Pages.map(({title, path, id})=>(
        <Link key={id} href={path}>
          <a className={dropStyle.dropdownItem} onClick={()=>closeDropdown(false)} >{title}</a>
        </Link>
      ))}
    </div>
  )
}