type IconLinkProps = {
    link: string;
    children: JSX.Element;
}

export const IconLink = (props: IconLinkProps) => <a className="project-links" href={props.link}
                                                       target="_blank" rel="noreferrer">
    {props.children}
</a>