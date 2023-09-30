import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function About() {
  return (
    <>
      <h1>Alvin Zhao</h1>

      <p>Currently digitising eye care @ iCare</p>

      <div className="flex flex-row items-center gap-8">
        <a className="hover:text-violet-400" href={"https://github.com/yzalvin/"} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} width="50" />
        </a>
        <a className="hover:text-violet-400" href={"https://linkedin.com/in/alvin-zhao/"} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} width="50" />
        </a>
        <a className="hover:text-violet-400" href={"mailto:yzalvin@duck.com"} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope} width="50" />
        </a>
      </div>
    </>
  )
}
