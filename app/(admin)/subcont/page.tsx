import prisma from "../../lib/prisma";
import CustomTable from "@/components/CustomTable";
import type { Subcont } from "@prisma/client";
import CustomModal from "@/components/CustomModal";

const getDatas = async () => {
  try {
    const res = await prisma.subcont.findMany({
      select: {
        id: true,
        name: true,
        city: true,
        fax: true,
        address: true,
        phone: true,
        deletedAt: true,
      },
      orderBy: {
        updatedAt: 'desc'
      }
    });

    return res;

  } catch (error) {
    console.log('error get', error)
  }
}

const MainPage = async () => {
  const lisData = await getDatas() as Subcont[];

  const dataExist = lisData.filter(item => item.deletedAt === null);
  const dataDeleted = lisData.filter(item => item.deletedAt !== null);

  return (
    <div className="p-5 w-full">
      <div className="text-sm breadcrumbs bg-gray-100 w-fit p-3 mb-10 rounded-md">
        <ul>
          <li><a>Dashboard</a></li>
          <li className="text-[#4e73df]">Subcont</li>
        </ul>
      </div>
      <div className="flex justify-between bg-gray-100 rounded-md p-3">
        <div>
          <p className="text-lg font-bold">Data Subcont</p>
          <div className="flex divide-x-2">
            <span className="pr-4 text-info">
              Jumlah<div className="ms-2 badge badge-info text-white">{lisData.length}</div>
            </span>
            <span className="pl-4 text-error">
              Sampah<div className="ms-2 badge badge-error text-white">{dataDeleted.length}</div>
            </span>
          </div>
        </div>
        <CustomModal
          title="Tambah Data"
          table="subcont"
          inputList={['name', 'phone', 'fax', 'address', 'city']}
          state={{ name: '', phone: '', fax: '', address: '', city: '' }}
        />
      </div>
      <CustomTable
        data={dataExist}
        heading={["name", "address", "city", "phone"]}
        table="subcont"
        inputList={['name', 'phone', 'fax', 'address', 'city']}
      />
    </div>
  )
}

export default MainPage;