import { SimpleWidget } from "@/components/dashboard/SimpleWidget"
import WidgetsGrid from '../../../components/dashboard/WidgetsGrid';


export const metadata = {
 title: 'Dashboard',
 description: 'My dashboard',
};


const MainPage = () => {
  return (
    <div className="text-black p-2 space-y-6">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>

      <WidgetsGrid />
    </div>
  )
}

export default MainPage