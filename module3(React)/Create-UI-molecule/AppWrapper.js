const AppWrapper = (props) => {
    return (
        <div className="appWrapper">
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}
export {AppWrapper};