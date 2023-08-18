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