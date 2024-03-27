import Description from "./Description"
import Form from "./Form"

const ContactSec = () => {
  return (
    <section className="flex flex-col-reverse mx-auto lg:flex-row gap-8 p-4 lg:max-w-[80vw] w-full">
      <Description />
      <Form />
  
    </section>
  )
}

export default ContactSec
