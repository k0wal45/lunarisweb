import classes from '../about.module.css'

const Programing = () => {
  return (
    <section className={`${classes.bgAbout} flex items-cener justify-center lg:justify-end gap-12 w-full mt-12`}>
        <div className=" flex flex-col p-12 m-6 lg:m-0 max-w-[50rem] bg-white gap-4 lg:mr-72 text-lg">
          <h2 className="text-4xl font-bold">Programowane Strony Internetowe</h2>
          <p className="text-lg">Programowanie stron internetowych od podstaw przynosi liczne korzyści. Strony są w pełni personalizowane, optymalizowane pod kątem wydajności i szybkości ładowania, oraz zapewniają wyższy poziom bezpieczeństwa. Dzięki temu są skalowalne i łatwo dostosowują się do rosnących potrzeb biznesu. Dodatkowo, unikalne funkcje i interakcje wyróżniają je na tle konkurencji.</p>
          <h3 className="text-2xl font-bold">Jakie są plusy takich stron?</h3>
          <ul className='px-6 list-disc flex flex-col gap-2'>
            <li>Możliwość pełnego dostosowania wyglądu i funkcji strony do indywidualnych potrzeb</li>
            <li>Lepsza wydajność i szybkość ładowania dzięki zoptymalizowanemu kodowi</li>
            <li>Większa kontrola nad zabezpieczeniami, mniejsze ryzyko ataków związanych z popularnymi platformami CMS</li>
            <li>Łatwiejsze dostosowanie i rozbudowa strony w miarę rozwoju biznesu</li>
          </ul>
        </div>
    </section>
  )
}

export default Programing