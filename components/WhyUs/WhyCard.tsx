import AppearFromLeft from "../Animations/AppearFromLeft";
import AppearFromRight from "../Animations/AppearFromRight";

function ProsItem({ heading, text, icon }: any) {
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 text-center w-72">
      <AppearFromRight>
        <div className="text-8xl">{icon}</div>
      </AppearFromRight>
      <AppearFromLeft>
        <h6 className="font-bold text-3xl 2-2">{heading}</h6>
      </AppearFromLeft>
      <AppearFromRight>
        <p className="text-lg opacity-70">{text}</p>
      </AppearFromRight>
    </div>
  );
}

export default ProsItem;
