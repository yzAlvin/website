import {ApiResponse} from "../types/types";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

export default function About({data}: ApiResponse) {
    return <>
        <div className="has-text-primary columns is-centered is-mobile has-text-centered socials">
            <a className="column is-1-desktop is-3-mobile" href={data.attributes.github} target="_blank"
               rel="noreferrer"><FiGithub size={40}/></a>
            <a className="column is-1-desktop is-3-mobile" href={data.attributes.linkedin} target="_blank"
               rel="noreferrer"><FiLinkedin size={40}/></a>
            <a className="column is-1-desktop is-3-mobile" href={data.attributes.mailto} target="_blank"
               rel="noreferrer"><FiMail size={40}/></a>
        </div>
        <section className="about has-text-light subtitle has-text-centered">
        <p>
            {data.attributes.body}
        </p>
            <br/>
        <p>Not that cooking guy</p>
        </section>
    </>;
}