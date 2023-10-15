import Link from 'next/link'
import './nav-link.css'


export default function NavLink(props) {
    return(
        <Link className='nav-link' href={props.href}>
            <img src={props.imgsrc} className='nav-bar-icon'/>
            <div className='nav-link-text'>{props.text}</div>
        </Link>
    )
}