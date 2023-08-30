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
    MdPeopleAlt,
    MdRocketLaunch,
    MdOutlineDiversity3,
} from "react-icons/md";

import {
    RiPencilRuler2Fill,
    RiTruckFill,
    RiInformationFill,
} from "react-icons/ri";

import {
    FaUserCog,
    FaUserFriends,
} from "react-icons/fa";

const sidebar: SidebarItemProps[] = [
    {
        path: '/dashboard',
        icon: <MdDashboard />,
        name: 'Dashboard',
    },
    {
        path: '',
        icon: <MdSettings />,
        name: 'Data Master',
        submenu: [
            {
                path: '/satuan-ukuran',
                icon: <RiPencilRuler2Fill />,
                name: 'Ukuran',
            },
            {
                path: '/customer',
                icon: <MdPeopleAlt />,
                name: 'Pelanggan',
            },
            {
                path: '/suplier',
                icon: <RiTruckFill />,
                name: 'Pemasok',
            },
            {
                path: '/subcont',
                icon: <MdRocketLaunch />,
                name: 'Subcont',
            },
            {
                path: '/divisi',
                icon: <MdOutlineDiversity3 />,
                name: 'Divisi',
            }
        ]
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
        path: '',
        icon: <MdPerson />,
        name: 'Manajemen Pengguna',
        submenu: [
            {
                path: '/user-roles',
                icon: <FaUserCog />,
                name: 'Aturan Pengguna',
            },
            {
                path: '/users',
                icon: <FaUserFriends />,
                name: 'Data Pengguna',
            },
        ]
    },
    {
        path: '',
        icon: <MdSettings />,
        name: 'Konfigurasi',
        submenu: [
            {
                path: '/status',
                icon: <RiInformationFill />,
                name: 'Status'
            }
        ]
    },
    {
        path: '/company',
        icon: <MdOutlineHomeWork />,
        name: 'Profil Perusahaan',
    },
];

export default sidebar;