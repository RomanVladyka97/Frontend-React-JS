const AppItem = (props) => {
    return(
        <div className="app-item">
            <h2 className="item-title">{props.name}</h2>
            <div className="item-image">
                {props.image}
            </div>
            <span className="item-discription">{props.description}</span>
        </div>
    );
}
export  {AppItem};
