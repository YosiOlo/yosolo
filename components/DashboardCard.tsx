import { DashboardCardProps } from "@/types"
import { FaMoneyBill } from "react-icons/fa"

const DashboardCard = ({ title, total, color }: DashboardCardProps) => {
    return (
        <div className={`flex p-3 rounded-md border-l-2 relative before:absolute shadow-md items-center
        justify-between before:w-1 before:bg-${color} before:h-full group before:top-0
        before:left-0 before:rounded-md hover:before:w-full before:transition-all before:duration-300`}>
            <div className="flex flex-col gap-3 z-[1] group-hover:text-white">
                <span className={`text-${color} group-hover:text-white`}>{title.toUpperCase()}</span>
                <span>Rp. {total}</span>
            </div>
            <FaMoneyBill size={30} className="text-slate-400 z-[1] group-hover:text-white" />
        </div>
    )
}

export default DashboardCard