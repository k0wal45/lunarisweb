
import AboutDescription from './AboutDescription'
import AboutPhoto from './AboutPhoto'

const About = () => {
  return (
    <section className=" mx-auto
      flex flex-col-reverse lg:flex-row items-center justify-center gap-8
      p-4
    ">
      <AboutPhoto />
      <AboutDescription />
    </section>
  )
}

export default About