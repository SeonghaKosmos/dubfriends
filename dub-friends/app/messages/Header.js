"use client"

import { useRouter } from 'next/navigation'
import './header.css'


export default function ChatHeader(){


    const router = useRouter()
    const navToMap = () =>{
        router.push('/')
    }


    return (
        <div className='chat-header'>
            <div className='centerer'>
                <div>
                    {`Janet Res`}
                </div>
            </div>
            <img src='miscellaneous/uw_map.svg' className='map-icon' onClick={navToMap}/>
        </div>
    )
}