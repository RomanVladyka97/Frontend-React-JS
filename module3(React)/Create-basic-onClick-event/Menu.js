const Menu = (props) => {
    return (
        <div className="menu">
            <h1>Menu</h1>
            <ul className="menu-items">
                {props.children}
            </ul>
        </div>
    )
}
export {Menu};