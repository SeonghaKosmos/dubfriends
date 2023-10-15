import './interest-tag.css'
import './tag.css'

export default function InterestTag(props){
    return(
        <div className='tag interest-tag'>
            <img src={props.iconSrc} className='interest-icon'/>
            <span>{props.text}</span>
        </div>
    )
}