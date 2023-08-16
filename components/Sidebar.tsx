
import sidebar from "@/app/utils/sidebar"
import Link from "next/link"
import { useRouter } from "next/router"
import SidebarSubmenu from "./SidebarSubmenu"

const Sidebar = () => {
    const location = useRouter();

    return (
        <div className="drawer-side ">
            <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
            <ul className="menu  pt-2 w-80 bg-base-100 text-base-content">
                <li className="mb-2 font-semibold text-xl">
                    <Link href={'/dashboard'}>Yoso Mekatama</Link>
                </li>
                {sidebar.map((route, k) => (
                    <li className="" key={k}>
                        {route.submenu ? (
                            <SidebarSubmenu {...route} />
                        ) : (
                            <Link
                                href={route.path}
                                className={`${location.pathname === route.path
                                    ? 'font-semibold bg-base-200' : 'font-normal'}`}
                            >
                                {route.icon} {route.name}
                                {
                                    location.pathname === route.path ? (<span className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                                        aria-hidden="true"></span>) : null
                                }
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar