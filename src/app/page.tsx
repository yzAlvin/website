import Nav from '../components/Nav'
import About from '../components/About'

export default function Home() {
  return (
    <>
      {/* <Nav /> */}
      <main className="text-zinc-100">
        {/* <p>Heroku's free tier shut down so I stopped hosting the previous backend</p>
        <p>This is a rebuild but now using server side generation instead of the client fetching</p>
        <p>BUT I don't have time to work on this at the moment so just message me if you want to see my projects</p> */}
        <About />
      </main>
    </>
  )
}
