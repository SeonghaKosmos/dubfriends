import './fact-label.css'

export default function FactLabel(props){
    return (
        <div className='fact-pair'>
            <div className='fact-label'>
                { `${props.factLabel}: `}
            </div>
            <div className='fact'>
                {props.fact}
            </div>
        </div>
    )
}