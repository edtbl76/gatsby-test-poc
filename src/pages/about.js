import * as React from 'react'
import Layout from '../components/layout'
import Bio from "../components/bio";

const AboutPage = () => {
  return (
    <Layout pageTitle={"whoami"}>
      <Bio />

      <p>
        I'm a software architect and technologist, but I make sure my hands never wander too far from the
        keyboard. I like to think of myself as leaning towards a polyglot developer. The characteristics of different
        languages have pros and cons that constitute tradeoffs in architectural decisions just as any other technology.
      </p>

      <p>
        I'm an advocate of open source technologies, and a big fan of DevOps as a process or collection of
        techniques for achieving agility and scaling (both organizational and technological). I believe that ideal
        process is when it provides strong enough guard rails to protect us from our own flaws, ignorance and
        inconsistencies, however giving us enough elbow room to experiment, fail and learn.
      </p>

      <p>
        Some of my favorite subjects are platform, concurrency, databases and distributed design
        problems. However, a close second is everything else. Whether it be for work or for play, I love solving
        problems. My best days are the ones where I've somehow made something a little easier, more valuable or more
        positive for someone else.
      </p>

    </Layout>
  )
}

export default AboutPage