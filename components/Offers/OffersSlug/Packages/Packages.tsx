import PackageCard from "./PackageCard"
import { data } from "./PackagesData"


const Packages = () => {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-4 my-24">
      <h4 className="text-5xl font-bold lg:max-w-[70vw] text-center">Wszystko, czego potrzebujesz w jednym miejscu</h4>
      <p className="text-lg lg:max-w-[70vw] text-center">Przedstawiamy Ci kilka starannie przygotowanych pakietów, dzięki którym załatwisz wszystko za jednym razem, oszczędzając czas i pieniądze. Każdy pakiet został zaprojektowany z myślą o różnych potrzebach naszych klientów, oferując kompleksowe rozwiązania obejmujące tworzenie stron internetowych oraz usługi graficzne. Dzięki naszym pakietom możesz skupić się na rozwoju swojego biznesu, podczas gdy my zajmiemy się całą resztą</p>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-12">

        {
          data.map((item, index) => (
            <PackageCard
              content={item}
              key={item.badge}
            />
          ))
        }

      </div>

    </section>
  )
}

export default Packages