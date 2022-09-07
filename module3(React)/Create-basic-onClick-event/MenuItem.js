const MenuItem = (props) => {
    return(
        <li>
            <a href={props.link} target="_blank" rel="noreferrer">{props.title}</a>
        </li>
    );
}
export  {MenuItem};
