type ProjectProps = {
  name: string
  description: string | null
}

export default function Project({name, description}: ProjectProps) {
  return (
    <article className="bg-gray-700 hover:bg-sky-700 rounded text-center">
      <a className="p-3" href={`projects/${name}`}>
        <h1 className="text-2xl">{name}</h1>
        <br/>
        <p>{description}</p>
      </a>
    </article>
  )
}
