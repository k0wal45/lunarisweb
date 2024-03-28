function Footer() {
  const date = new Date()
  const year = date.getFullYear()

  return (
    

    <footer className="flex flex-col gap-2 text-center lg:flex-row justify-between px-8 p-4 bg-base-200 shadow-inner z-70 text-lg text-white border-t-2 border-base z-20">
      <div className="items-center grid-flow-col">
        <p>Copyright © {year} - Wszystkie prawa zastrzeżone</p>
      </div> 
      <section>
        <p>Stronę Wykonał: <a target="_blank" href="https://daniel-kowalski.com" className="underline" rel="noreferrer">Daniel Kowalski</a></p>
      </section> 
    </footer>

  )
}

export default Footer