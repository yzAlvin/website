import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="text-center m-10 space-y-7">
      <h1 className="text-3xl font-bold">Alvin Zhao</h1>

      <div className="flex justify-center">
        <img src="me.jpg" alt="me" width={150} height={150} className="rounded-full"/>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Current</h2>

        <ul className="list-disc list-inside text-left space-y-1">
          <li>Looking for work :)</li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Past</h2>

        <ul className="list-disc list-inside text-left space-y-1 [&_ul]:list-[revert]">
          <li>Recidivist @ <a className="text-blue-500 underline" target="_blank" href="https://www.icare-world.com/">iCare</a></li>
          <li>Founding Engineer @ <a className="text-blue-500 underline" target="_blank" href="https://www.lyrebirdhealth.com/">Lyrebird Health</a></li>
          <li>Freelance Consultant @ 021.au</li>
          <li>Digitising eye care @ <a className="text-blue-500 underline" target="_blank" href="https://www.icare-world.com/">iCare</a></li>
          <li>Mentor & Contributor on <a className="text-blue-500 underline" target="_blank" href="https://exercism.org/">Exercism</a></li>
          <li>Platform Engineer @ <a className="text-blue-500 underline" target="_blank" href="https://www.myob.com/">MYOB</a></li>
          <li>Software Engineer @ <a className="text-blue-500 underline" target="_blank" href="https://www.myob.com/">MYOB</a></li>
        </ul>
      </div>

      <div className="flex flex-row justify-center items-center gap-8 pt-10">
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
    </div>
  );
}
