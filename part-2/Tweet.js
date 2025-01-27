const Tweet = (props) => {
    return (
        <div className="tweet">
            <span>{props.name}</span>
            <span class="username">{props.username}</span>
            <span class="date">{props.date}</span>
            <p>{props.message}</p>
        </div>
    )
}