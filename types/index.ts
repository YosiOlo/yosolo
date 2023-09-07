export interface SidebarItemProps {
    path: string;
    icon: React.ReactNode;
    name: string;
    submenu?: SidebarItemProps[];
};

export interface DashboardCardProps {
    title: string;
    total: string;
    color: string;
};

export interface InputDataMaterial {
    name: string[];
    size: string[];
    ukuran: string[];
    totalStock: string[];
    price: string[];
    minPurchase: string[];
    suplier: string[];
}

export type ModalState = {
    name: string;
    phone?: string;
    city?: string;
    address?: string;
    fax?: string;
};