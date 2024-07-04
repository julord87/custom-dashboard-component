import { SimpleWidget } from "@/components/SimpleWidget"


const MainPage = () => {
  return (
    <div className="text-black p-2 space-y-6">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <div className="flex flex-wrap p-2 items-center">
        <SimpleWidget />
      </div>
    </div>
  )
}

export default MainPage