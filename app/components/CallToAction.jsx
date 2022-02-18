const CallToAction = (props) => {
    return <>
        <a
            target="_blank"
            href={props.url}
            rel="noreferrer" >
            {props.title}
        </a>
    </>;
};

export default CallToAction;