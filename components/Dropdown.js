import {MenuItems} from './MenuItems';
import Link from 'next/link';
import dropStyle from './dropdown.module.css';
export default function Dropdown() {
  return(
    <div className={dropStyle.dropdownMenu}>
      {MenuItems.map(({title, path}, index)=>(
        <Link key={index} href={path}>
          <a className={dropStyle.dropdownItem} >{title}</a>
        </Link>
      ))}
    </div>
  )
}
