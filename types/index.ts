export interface SidebarItemProps {
    path: string;
    icon: React.ReactNode;
    name: string;
    submenu?: SidebarItemProps[];
}