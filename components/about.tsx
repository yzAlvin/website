export default function About({data}) {
    return (
        <p>
            {data.attributes.body}
        </p>
    );
}