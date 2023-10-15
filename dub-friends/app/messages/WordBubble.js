import ProfilePic from '../components/ProfilePic'
import './word-bubble.css'


export default function WordBubble(props) {

    const profilePicSrc = props.isMine ? 'profilepics/Emma_Tao.png' : 'profilepics/Janet_Res.png'

    return (
        <div className={`bubble-container ${props.isMine ?
            'my-bubble-container' :
            'partners-bubble-container'}`}>
            
            <ProfilePic src={profilePicSrc} styleClass='profile-pic-super-small'/>

            <div className={`bubble ${props.isMine ?
                'my-bubble' :
                'partners-bubble'}`}>
                {props.text}
            </div>

        </div>
    )
}