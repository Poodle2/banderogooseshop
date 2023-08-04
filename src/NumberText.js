import style from './NumberText.module.scss'

export default function NumberText(props) {
    return (
        <div className={style.NumberText}>
            <div className='a'>
                <h1>{props.number}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}