import Nav from '../../components/Nav'
import Project from '../../components/Project'

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="m-8">
        <p>Won't be tracking open source contributions here, look at GitHub/GitLab/BitBucket..</p>
        <p>I try to make a lot of stuff, some useful and some not</p>
        <p>Usually to try new tech but sometimes when I have what I think is a good idea :)</p>
        <br/>
        <div className="grid grid-cols-1 gap-8 content-center">
          <Project name="Cens" description="Personal Finance SaaS" />
        </div>
        <br/>
        <div className="grid grid-cols-2 gap-8 content-center">
          <Project name="POS POS" description="Point of Sales SaaS"/>
          <Project name="Articulate Online Cards" description="Articulate..." />
          <Project name="Pop Quiz" description="Quiz? Only Japanese Hiragana and Katakana.." />
          <Project name="Brief" description="Design System? Component Library?"/>
        </div>
        <br/>
        <div className="grid grid-cols-4 gap-8 content-center">
          <Project name="Manual" description="Writing about software projects"/>
          <Project name="Nestle Product Indexer" description="See if x product is owned by Nestle"/>
          <Project name="Maplestory Cube Simulator" />
          <Project name="Keyzen Fork" description="My fork of Keyzen, to practice other keyboard layouts (Colemak)" />
          <Project name="Don't Starve Together Gardening Tweaks" />
          <Project name="Tabletop Simulator Don't Mess With Cthulu Scripted" />
          <Project name="Minecraft Plugins" description="On a server with peak 100 users!!" />
          <Project name="Maplestory Calculators" />
          <Project name="Ninja Warz Wiki" />
          <Project name="Restaurant City Wiki" />
        </div>
      </main>
    </>
  )
}
