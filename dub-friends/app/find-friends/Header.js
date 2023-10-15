'use client'
import './header.css'
import '../header.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { DisplayOptionSliceActions } from '@/store/store'

export default function Header() {

    const isDropDownOpen = useState(false)

    const dispatch = useDispatch()
    const [options, selected] = useSelector(state => [state.DisplayOption.options, state.DisplayOption.options[state.DisplayOption.selected]])
    console.log(options)
    console.log(selected)

    const switchDisplayOption = () => {
        dispatch(DisplayOptionSliceActions.switchOption())
    }

    return (
        <header className='thick-header'>

            <h1 className='find-friends-h1'>PEOPLE NEAR YOU</h1>


            <button className='display-option-button' onClick={switchDisplayOption}>
                {selected}
                {/* <img src='miscellaneous/Chevron_Down.svg' className='display-option-chevron' /> */}
            </button>



        </header>
    )
}