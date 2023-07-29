
function FeedbackCart(props) {
    return (
        <div className='FeedbackCart'>
            <img src={props.avatar} alt='avatarWomenOne'/>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default FeedbackCart
