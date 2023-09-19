"use client";

import PaginationBar from "@/components/PaginationBar";
import PerPageSelect from "@/components/PerPageSelect";
import SearchBar from "@/components/SearchBar";
import { rupiah } from "@/utils/helper";
import { motion } from "framer-motion";
import { Fragment, useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { MdInsertDriveFile } from "react-icons/md";
import ModalError from "./modalError";

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
    const [isDetail, setIsDetail] = useState(false);

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

    useEffect(() => setFilteredData(data), [data]);

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
                        <th>Status</th>
                        <th>Nomor</th>
                        <th>PO Customer</th>
                        <th>Nama Pelanggan</th>
                        <th>Nama Sales</th>
                        <th>Jumlah Total</th>
                        <th>Metode</th>
                        <th>Status Bayar</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.slice(startIndex, endIndex).map((row, index) => (
                        <Fragment key={index}>
                            <tr className="hover">
                                <td
                                    onClick={() => setIsOpenRow(!isOpenRow)}
                                    className="cursor-pointer text-center capitalize"
                                >
                                    {isOpenRow ? <FaMinusCircle className="text-[#4e73df] mx-auto" />
                                        : <FaPlusCircle className="text-[#4e73df] mx-auto" />}

                                    {row.isStatus === 1 ? 'meminta' : row.isStatus === 2 ? 'pending'
                                        : 'dibatalkan'}
                                </td>
                                <td>{row.code}</td>
                                <td>{row.poc ?? ''}</td>
                                <td>{row.customer ? row.customer.name : ''}</td>
                                <td>{row.user.name}</td>
                                <td>{rupiah(row.total)}</td>
                                <td>{row.paymentMethod ?? 'cash'}</td>
                                <td>{row.paymentStatus ?? 'lunas'}</td>
                            </tr>
                            <motion.tr
                                animate={{
                                    height: isOpenRow ? 'fit-content' : 0,
                                    display: isOpenRow ? 'table-row' : 'none',
                                }}
                                className="overflow-hidden bg-white"
                            >
                                <td>Tanggal</td>
                                <td colSpan={7}>{row.updatedAt.toLocaleString()}</td>
                            </motion.tr>
                            <motion.tr
                                animate={{
                                    height: isOpenRow ? 'fit-content' : 0,
                                    display: isOpenRow ? 'table-row' : 'none',
                                }}
                                className="overflow-hidden bg-white"
                            >
                                <td>Aksi</td>
                                <td colSpan={7} className="flex gap-5 items-center">
                                    <button
                                        className="tooltip btn btn-outline btn-primary btn-sm capitalize
                                        font-light text-sm"
                                        data-tip="lihat detail"
                                        onClick={() => onRowClick(row)}
                                    >
                                        <MdInsertDriveFile />
                                    </button>
                                    <ModalError
                                        id={row.id}
                                        table="order-status"
                                        title="batalkan transaksi"
                                        tooltip="batalkan order"
                                        message={`Apakah kamu yakin membatalkan order dengan id ${row.code}`}
                                    />
                                    <ModalError
                                        id={row.id}
                                        table="order"
                                        title="hapus transaksi"
                                        message={`Apakah kamu yakin menghapus data dengan id ${row.code}`}
                                    />
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