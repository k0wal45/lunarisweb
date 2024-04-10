
function ProsItem({heading, text, icon}: any) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">

      <div className="text-8xl">
        {icon}
      </div>
      <h5 className="font-bold text-3xl">{heading}</h5>
      <p className="text-lg opacity-70">{text}</p>
    </div>
  )
}

export default ProsItem
