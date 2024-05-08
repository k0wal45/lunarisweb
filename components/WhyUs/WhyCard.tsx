import AppearFromLeft from "../Animations/AppearFromLeft"
import AppearFromRight from "../Animations/AppearFromRight"

function ProsItem({heading, text, icon}: any) {
  return (
    
      <div className="flex flex-col gap-4 justify-center items-center p-8 text-center w-72">
        <AppearFromRight>
          <div className="text-8xl">
            {icon}
          </div>
        </AppearFromRight>
        <AppearFromLeft >
          <h5 className="font-bold text-3xl">{heading}</h5>
        </AppearFromLeft>
        <AppearFromRight >
          <p className="text-lg opacity-70">{text}</p>
        </AppearFromRight>

      </div>
    
  )
}

export default ProsItem
