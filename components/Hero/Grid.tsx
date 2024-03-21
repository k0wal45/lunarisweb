import Card from "./Card";


export function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-8 w-auto">
      <Card span='col-span-2'/>
      <Card span=''/>
      <Card span=''/>
    </div>
  );
}
