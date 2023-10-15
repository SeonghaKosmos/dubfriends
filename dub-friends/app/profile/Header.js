

"use client"
import { useRouter } from 'next/navigation'
import './header.css'

export default function ProfileHeader(){


    const router = useRouter()

    const navToChat = () => {
        router.push('/messages')
    }

    const navToFindFriends = () => {
        router.push('/find-friends')
    }


    return (
        <header className='profile-header'>
            <button className='back-button' onClick={navToFindFriends}>
                <img src='/miscellaneous/Chevron_Right.svg'/>
                <img src='/miscellaneous/Back.svg'/>
            </button>
            <img src='/miscellaneous/Chat.svg' onClick={navToChat}/>
        </header>
    )
}