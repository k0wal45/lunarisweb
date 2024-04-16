import Reveal from "./Animations/Reveal"

function Stats() {

  const howManyYears = () => {

    const start = new Date(2023, 1, 1).getFullYear()

    const dateNow = new Date().getFullYear()   

    const years = dateNow - start

      return years 
 
  }

  return (
    <section className="m-auto flex flex-col bg-base-100 lg:flex-row p-4 w-full border-b-2 border-base-200 overflow-hidden">
        <div className="flex-1 p-4 card rounded-box flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-bold text-2xl">Wykonanych Komercyjnych Stron Internetowych</h2>
          <Reveal>
            <p  className="text-6xl text-primary font-bold ml-4">4</p>
          </Reveal>
        </div>

        <div className="divider lg:divider-horizontal"></div> 

        <div className="flex-1 h-32 p-4 card rounded-box flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-bold text-2xl ">Wykonanych Projektów dla firm</h2>
          <Reveal>
            <p  className="text-6xl text-primary font-bold ml-4 pb-2">40+</p>
          </Reveal>
        </div>

        <div className="divider lg:divider-horizontal"></div> 

        <div className="flex-1 h-32 p-4 card rounded-box flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-bold text-2xl">Lat na Rynku</h2>
          <Reveal>
            <p  className="text-6xl text-primary font-bold ml-4">{howManyYears()}</p>
          </Reveal>
        </div>
      </section>
  )
}

export default Stats
