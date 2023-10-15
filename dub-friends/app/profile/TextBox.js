import './text-box.css'


export default function TextBox(props){
    return (
        <div className='text-box'>
            {props.text}
        </div>
    )
}