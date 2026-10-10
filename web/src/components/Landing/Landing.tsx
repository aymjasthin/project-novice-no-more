import { Link } from 'react-router-dom'
import './Landing.scss'

function Landing() {
  return (
    <main className="landing">
      <section className="identity">
        JASTHIN T. DAJUELA
      </section>

      <section className="hero">
        <p className="eyebrow">PROJECT NOVICE NO MORE</p>

        <h1>
          I'm still learning.
          <br />
          Watch me build.
        </h1>

        <Link className="enter" to="/journey">
            ENTER
        </Link>
      </section>

      <section className="progression">
        <span>JOURNEY • 01</span>
        <span>BEGINNER</span>
      </section>
    </main>
  )
}

export default Landing