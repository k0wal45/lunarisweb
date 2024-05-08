import Reveal from "./Animations/Reveal"

function Stats() {

  const howManyYears = () => {

    const start = new Date(2023, 1, 1).getFullYear()

    const dateNow = new Date().getFullYear()   

    const years = dateNow - start

      return years 
 
  }

  return (
    <section className="m-auto flex flex-col lg:flex-row p-4 w-full border-b-2 border-base overflow-hidden">
        <div className="flex-1 lg:h-full p-4 flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-bold text-2xl">Wykonanych Komercyjnych Stron Internetowych</h2>
          <Reveal>
            <p  className="text-6xl text-primary font-bold ml-4">4</p>
          </Reveal>
        </div>

        <div className=" w-48 lg:w-0 lg:h-40 border-[1px] border-base m-auto"></div> 

        <div className="flex-1 lg:h-full max-h-32 p-4 flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-bold text-2xl ">Wykonanych Projektów dla firm</h2>
          <Reveal>
            <p  className="text-6xl text-primary font-bold ml-4 pb-2">40+</p>
          </Reveal>
        </div>

        <div className=" w-48 lg:w-0 lg:h-40 border-[1px] border-base m-auto"></div> 

        <div className="flex-1 lg:h-full max-h-32 p-4 flex flex-col gap-4 text-center lg:text-start">
          <h2 className="font-bold text-2xl">Lat na Rynku</h2>
          <Reveal>
            <p  className="text-6xl text-primary font-bold ml-4">{howManyYears()}</p>
          </Reveal>
        </div>
      </section>
  )
}

export default Stats
