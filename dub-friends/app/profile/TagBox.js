import './tag-box.css'

export default function TagBox(props){
    return(
        <div className='tag-box'>
            {props.children}
        </div>
    )
}