import {ApiResponse} from "../types/types";

export default function About({data}: ApiResponse) {
    return (
        <p>
            {data.attributes.body}
        </p>
    );
}