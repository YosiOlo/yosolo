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
} from "react-icons/ri";

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
                path: '/customers',
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