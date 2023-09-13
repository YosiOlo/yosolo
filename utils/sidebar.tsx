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
    RiToolsFill,
    RiFileReduceFill,
} from "react-icons/ri";

import {
    FaUserCog,
    FaUserFriends,
    FaTruckLoading,
    FaBoxOpen,
    FaBox,
    FaRecycle,
    FaTable,
} from "react-icons/fa";

import { CgFormatText, CgFormatUppercase } from "react-icons/cg";
import { BsClipboardData, BsEnvelopePaper, BsFileEarmarkPlus, BsFillFileEarmarkPlusFill } from "react-icons/bs";

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
        path: '',
        icon: <MdInventory />,
        name: 'Inventori',
        submenu: [
            {
                path: '/material',
                icon: <FaTruckLoading />,
                name: 'Material'
            },
            {
                path: '/barang-setengah-jadi',
                icon: <FaBoxOpen />,
                name: 'Barang Setengah Jadi'
            },
            {
                path: '/barang-jadi',
                icon: <FaBox />,
                name: 'Barang Jadi'
            },
            {
                path: '/tools',
                icon: <RiToolsFill />,
                name: 'Peralatan'
            },
            {
                path: '/reduksi-tools',
                icon: <RiFileReduceFill />,
                name: 'Pengurangan Peralatan'
            },
            {
                path: '/limbah',
                icon: <FaRecycle />,
                name: 'Limbah'
            },
            {
                path: '/product',
                icon: <FaTable />,
                name: 'Produk'
            },
            {
                path: '/formula-item',
                icon: <CgFormatText />,
                name: 'Formula Item'
            },
            {
                path: '/formula-utama',
                icon: <CgFormatUppercase />,
                name: 'Formula Utama'
            }
        ]
    },
    {
        path: '/sell',
        icon: <MdShoppingCart />,
        name: 'Penjualan',
        submenu: [
            {
                path: '/order/create',
                icon: <BsFileEarmarkPlus />,
                name: 'Tambah Penjualan'
            },
            {
                path: '/order/ym',
                icon: <BsFillFileEarmarkPlusFill />,
                name: 'Tambah Order YM'
            },
            {
                path: '/order',
                icon: <BsClipboardData />,
                name: 'Data Penjualan'
            },
            {
                path: '/sjso',
                icon: <BsEnvelopePaper />,
                name: 'Surat Jalan'
            }
        ]
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