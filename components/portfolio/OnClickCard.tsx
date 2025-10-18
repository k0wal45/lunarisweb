import { FaArrowRight } from "react-icons/fa";
import UnderlineOnHover from "../Animations/UnderlineOnHover";
import { TransitionLink } from "@/utils/TransitionLink";

const OnClickCard = ({ selected }: { selected: any | null }) => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-end p-4">
      <p className="font-bold text-4xl text-white">{selected?.title}</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {selected?.data[0]?.desc}
      </p>
      <UnderlineOnHover>
        <TransitionLink
          href={`/portfolio/${selected?.name.toLowerCase().replaceAll(" ", "-")}`}
          className="flex items-center gap-2 text-white"
        >
          Sprawdź Teraz <FaArrowRight />
        </TransitionLink>
      </UnderlineOnHover>
    </div>
  );
};

export default OnClickCard;
