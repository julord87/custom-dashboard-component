import Link from "next/link";

interface Props {
  title: number;
  subtitle: string;
  label?: string;
  icon?: React.ReactNode;
  href: string;
}

export const SimpleWidget = ( {title, subtitle, label, icon, href} : Props ) => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50 m-2 items-center justify-center text-center">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-3xl text-gray-600 text-center">{label}</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center text-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              { icon }
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-8xl">{title}</h4>
              <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
          </div>
        </div>

        <div className="w-full place-items-end text-center border-t-2 border-gray-100 mt-2">
            <Link href={href} className="text-indigo-600 text-xs font-medium">Volver al contador</Link>
        </div>
        
      </div>
    </div>
  )
}

export default SimpleWidget;