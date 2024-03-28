import classes from './bg.module.css'
import Description from "./Description"
import Form from "./Form"

const ContactSec = () => {
  return (
    <section className={`${classes.bgForm} lg:bg-contain flex flex-col mx-auto gap-4 p-4 w-full text-white items-center justify-center`}>
      <h6 className="text-3xl font-bold text-center">Skontaktuj sie z nami</h6>
      <p className="text-center">Jeśli interesują cie moje usługi i chcesz się skontaktować napisz do mnie tutaj lub tylko umieść swój email abym mógł się z tobą skontaktować</p>
      <div className="flex flex-col lg:flex-row my-8 w-full items-center justify-center">
        <Description />
        <Form />
      </div>
  
    </section>
  )
}

export default ContactSec
