import Card from "./Card";


export function Grid() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full p-8 lg:w-auto">
      <Card span='xl:col-span-2'/>
      <Card span=''/>
      <Card span=''/>
    </div>
  );
}
