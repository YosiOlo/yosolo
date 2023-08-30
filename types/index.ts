export interface SidebarItemProps {
    path: string;
    icon: React.ReactNode;
    name: string;
    submenu?: SidebarItemProps[];
}

export interface DashboardCardProps {
    title: string;
    total: string;
    color: string;
}

export type ModalState = {
    name: string;
    phone?: string;
    city?: string;
    address?: string;
    fax?: string;
};