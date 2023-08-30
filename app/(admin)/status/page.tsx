import prisma from "../../lib/prisma";
import type { Status } from "@prisma/client";
import Table from "./table";
import Modal from "./modal";

const getDatas = async () => {
    try {
        const res = await prisma.status.findMany({
            select: {
                id: true,
                name: true,
                module: true,
                bgColor: true,
                fontColor: true,
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
    const listData = await getDatas() as Status[];

    const dataExist = listData.filter(item => item.deletedAt === null);
    const dataDeleted = listData.filter(item => item.deletedAt !== null);

    return (
        <div className="p-5 w-full">
            <div className="text-sm breadcrumbs bg-gray-100 w-fit p-3 mb-10 rounded-md">
                <ul>
                    <li><a>Dashboard</a></li>
                    <li className="text-[#4e73df]">Status</li>
                </ul>
            </div>
            <div className="flex justify-between bg-gray-100 rounded-md p-3">
                <div>
                    <p className="text-lg font-bold">Data Status</p>
                    <div className="flex divide-x-2">
                        <span className="pr-4 text-info">
                            Jumlah<div className="ms-2 badge badge-info text-white">{listData.length}</div>
                        </span>
                        <span className="pl-4 text-error">
                            Sampah<div className="ms-2 badge badge-error text-white">{dataDeleted.length}</div>
                        </span>
                    </div>
                </div>
                <Modal />
            </div>
            <Table data={dataExist} />
        </div>
    )
}

export default MainPage;