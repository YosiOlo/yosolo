"use client";

import PaginationBar from "@/components/PaginationBar";
import PerPageSelect from "@/components/PerPageSelect";
import SearchBar from "@/components/SearchBar";
import { rupiah } from "@/utils/helper";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";

const Table = ({
    data, onRowClick
}: {
    data: any[], onRowClick: (row: any) => void
}) => {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [filtering, setFiltering] = useState(false);
    const [isOpenRow, setIsOpenRow] = useState(false);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageIndex: number) => {
        setCurrentPage(pageIndex);
    };

    const handleSearch = (keyword: string) => {
        const filtered = data.filter(item =>
            item.name?.toLowerCase().includes(keyword.toLowerCase())
        );
        setFilteredData(filtered);

        if (!keyword) setFiltering(false);
        if (keyword) setFiltering(true);
    };

    const handleItemPerPageChange = (value: number) => {
        setItemsPerPage(value);
        setCurrentPage(0);
    };

    const startEntry = startIndex + 1;
    const endEntry = Math.min(endIndex, filteredData.length);
    const totalData = filtering ? data.length : filteredData.length;
    const showingText = filtering
        ? `Menampilkan ${startEntry} sampai ${endEntry} dari ${totalData} 
        data (difilter berdasarkan ${data.length} total data)`
        : `Menampilkan ${startEntry} sampai ${endEntry} dari ${totalData} data`;

    useEffect(() => {
        setFilteredData(data)
        console.log(data);
    }, [data]);

    return (
        <div className="py-5">
            <div className="flex justify-between my-5">
                <PerPageSelect
                    options={[10, 20, 30, 40]}
                    defaultValue={itemsPerPage}
                    onChange={handleItemPerPageChange}
                />
                <SearchBar onSearch={handleSearch} />
            </div>
            <table className="table border">
                <thead className="bg-[#4e73df] text-white">
                    <tr>
                        <th>#</th>
                        <th>Status</th>
                        <th>Nomor</th>
                        <th>Nama Sales</th>
                        <th>Nama Pelanggan</th>
                        <th>Penerima</th>
                        <th>Kode Order</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.slice(startIndex, endIndex).map((row, index) => (
                        <Fragment key={index}>
                            <tr className="hover">
                                <td onClick={() => setIsOpenRow(!isOpenRow)}>
                                    {isOpenRow ? <FaMinusCircle className="text-[#4e73df] mx-auto" />
                                        : <FaPlusCircle className="text-[#4e73df] mx-auto" />}
                                </td>
                                <td className="cursor-pointer text-center capitalize">
                                    {row.isStatus === 1 ? 'meminta' : row.isStatus === 2 ? 'pending'
                                        : 'dibatalkan'}
                                </td>
                                <td>{row.code}</td>
                                <td>{'sales'}</td>
                                <td>{'pelanggan'}</td>
                                <td>{row.order.reciver}</td>
                                <td>{row.order.code}</td>
                            </tr>
                            <motion.tr
                                animate={{
                                    height: isOpenRow ? 'fit-content' : 0,
                                    display: isOpenRow ? 'table-row' : 'none',
                                }}
                                className="overflow-hidden bg-white"
                            >
                                <td colSpan={7}>Tanggal: {row.updatedAt.toLocaleString()}</td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    height: isOpenRow ? 'fit-content' : 0,
                                    display: isOpenRow ? 'table-row' : 'none',
                                }}
                                className="overflow-hidden bg-white"
                            >
                                <td colSpan={7} className="flex gap-5 items-center">
                                    Aksi: 
                                    <button
                                        className="tooltip btn btn-outline btn-primary btn-sm capitalize
                                        font-light text-sm ml-5"
                                        data-tip="lihat detail"
                                        onClick={() => onRowClick(row)}
                                    >
                                        <MdInsertDriveFile />
                                    </button>
                                </td>
                            </motion.tr>
                        </Fragment>
                    ))}
                </tbody>
            </table>

            <div className="flex justify-between my-5">
                <p className="my-5">{showingText}</p>
                <PaginationBar
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Table;