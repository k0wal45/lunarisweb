import PortfolioGrid from "./PortfolioGrid"

const Portfolio = () => {
  return (
    <section className='
      relative p-4 lg:m-12 text-white
      flex flex-col items-center justify-center gap-8
    '>
      <div className="flex flex-col gap-8 items-center justify-center lg:w-1/2 text-center">
        <h5 className="text-4xl font-bold">Sprawdź nasze Portfolio!</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil fugiat aut nobis tempore laudantium, in tenetur illum et nisi omnis.</p>
      </div>

      <PortfolioGrid />
      
    </section>
  )
}

export default Portfolio