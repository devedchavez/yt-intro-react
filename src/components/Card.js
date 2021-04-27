const Card = (props) => {

    return (
        <div className="card col mx-2">
            <h2 className="card-title">{ props.title }</h2>
            <div className="card-body">
                <p>{ props.content }</p>
            </div>
        </div>
    );

}

export default Card;