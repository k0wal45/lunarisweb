import GrowItem from "./GrowItem"

const data = [
  {
    title: 'Strony internetowe',
    description: 'Projektowanie stron internetowych to połączenie kreatywności i funkcjonalności. Efektywnie tworze i programuje strony internetowe, które są idealnie dostosowane do indywidualnych potrzeb każdego klienta. Zacznijmy współpracę już dziś',
    img: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'SEO',
    description: 'Nasze usługi obejmują kompleksową gamę działań - od koncepcji i projektowania graficznego, przez programowanie, po optymalizację pod kątem wyszukiwarek internetowych (SEO). Dodatkowo współpracujemy z agencją specjalizującą się w SEO',
    img: 'https://images.unsplash.com/photo-1593438002985-ce805be04da9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Grafika',
    description: 'Dobra grafika, w postaci logo, wizytówek czy plakatów, to kluczowy element w budowaniu wizerunku firmy. Pomaga w wyróżnieniu się spośród konkurencji, budowaniu zaufania klientów i przyciąganiu uwagi potencjalnych odbiorców. ',
    img: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  
]

const GrowSection = () => {
  return (
    <section className="w-full flex flex-col gap-16 items-center justify-center p-4 lg:p-16 bg-neutral-800 text-white">

    <h5 className="text-6xl lg:text-5xl font-bold">Jak mogę pomóc ci rozwinąć Twoją firmę?</h5>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 place-items-center">
      {
        data.map((item, index) => (
          <GrowItem key={index} content={item} />
        ))
      }
    </div>
    </section>
  )
}

export default GrowSection