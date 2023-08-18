import TanstackTable from "@/components/TanTable"

const Master = () => {
  return (
    <div className="p-5">
      <div className="text-sm breadcrumbs bg-slate-200 w-fit p-3 mb-5 rounded-md">
        <ul>
          <li><a>Dashboard</a></li>
          <li className="text-[#4e73df]">Ukuran</li>
        </ul>
      </div>
      <TanstackTable />
    </div>
  )
}

export default Master