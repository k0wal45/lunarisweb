import { ThreeDCardDemo } from "./3dCard";
import Card from "./Card";

export function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-8">
      <Card />
    </div>
  );
}
