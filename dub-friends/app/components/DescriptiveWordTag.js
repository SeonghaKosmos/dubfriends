import './tag.css'
import './descriptive-word-tag.css'



export default function DescriptiveWordTag(props){

    return (
        <div className='tag descriptive-word-tag'>
            <span>{props.word}</span>
        </div>
    )
}