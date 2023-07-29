export default function NumberText(props) {
    return (
        <div className='NumberText'>
            <h2>{props.number}</h2>
            <p>{props.text}</p>
        </div>
    )
}