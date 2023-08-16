import { SidebarItemProps } from "@/types";
import {
    MdDashboard,
    MdSettings,
    MdInventory,
    MdShoppingCart,
    MdWorkHistory,
    MdShoppingBasket,
    MdDiscount,
    MdTask,
    MdShoppingCartCheckout,
    MdScheduleSend,
    MdOutlineFactCheck,
    MdPerson,
    MdOutlineHomeWork,
} from "react-icons/md";

const sidebar: SidebarItemProps[] = [
    {
        path: '/dashboard',
        icon: <MdDashboard />,
        name: 'Dashboard',
    },
    {
        path: '/master',
        icon: <MdSettings />,
        name: 'Data Master',
    },
    {
        path: '/inventory',
        icon: <MdInventory />,
        name: 'Inventori',
    },
    {
        path: '/sell',
        icon: <MdShoppingCart />,
        name: 'Penjualan',
    },
    {
        path: '/production',
        icon: <MdWorkHistory />,
        name: 'Produksi',
    },
    {
        path: '/buy',
        icon: <MdShoppingBasket />,
        name: 'Pembelian',
    },
    {
        path: '/angsuran',
        icon: <MdDiscount />,
        name: 'Angsuran',
    },
    {
        path: '/report',
        icon: <MdTask />,
        name: 'Laporan',
    },
    {
        path: '/req-ship',
        icon: <MdShoppingCartCheckout />,
        name: 'Permintaan Pengiriman',
    },
    {
        path: '/req-product',
        icon: <MdWorkHistory />,
        name: 'Permintaan Produksi',
    },
    {
        path: '/req-po',
        icon: <MdScheduleSend />,
        name: 'Permintaan Pre-order',
    },
    {
        path: '/check-item',
        icon: <MdOutlineFactCheck />,
        name: 'Cek Item',
    },
    {
        path: '/manage',
        icon: <MdPerson />,
        name: 'Manajemen Pengguna',
    },
    {
        path: '/config',
        icon: <MdSettings />,
        name: 'Konfigurasi',
    },
    {
        path: '/company',
        icon: <MdOutlineHomeWork />,
        name: 'Profil Perusahaan',
    },
];

export default sidebar;