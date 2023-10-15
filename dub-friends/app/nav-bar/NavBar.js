import NavLink from './NavLink'
import './nav-bar.css'

export default function Navbar() {
    return (
        <div className='nav-bar'>
            <NavLink text='Home' imgsrc='nav-bar/home.svg' href='/'/>
            <NavLink text='Messages' imgsrc='nav-bar/messages.svg' href='/messages'/>
            <NavLink text={
                <div className='find-friends-div'>
                    <span className='find-friends-span'>Find</span>
                    <span className='find-friends-span'>Friends</span>
                </div>
            } imgsrc='nav-bar/find_friends.svg' href='/find-friends'/>
            <NavLink text='Profile' imgsrc='nav-bar/profile.svg' href='/profile'/>
        </div>
    )
}