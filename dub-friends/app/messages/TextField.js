import './text-field.css'

export default function TextField() {
    return (
        <div className='input-complex'>
            <img src='miscellaneous/Camera.svg'/>
            <input placeholder='Write your message here ...' className='text-field' />
        </div>
    )
}