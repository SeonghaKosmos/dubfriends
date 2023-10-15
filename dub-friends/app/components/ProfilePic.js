import './profile-pic.css'
export default function ProfilePic(props) {
    return(
        <img src={props.src} className={`profile-pic ${props.styleClass}`}/>
    )
}