import {ApiResponse} from "../types/types";
import {FiGithub, FiLinkedin, FiMail} from "react-icons/fi";

export default function About({data}: ApiResponse) {
    return (
        <>
            <a href={data.attributes.github} target="_blank" rel="noreferrer"><FiGithub/></a>
            <a href={data.attributes.linkedin} target="_blank" rel="noreferrer"><FiLinkedin/></a>
            <a href={data.attributes.mailto} target="_blank" rel="noreferrer"><FiMail/></a>
            <p>
                {data.attributes.body}
            </p>
        </>
    );
}