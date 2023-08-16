"use client";

import { signOut, useSession } from 'next-auth/react';

import { MdPerson, MdExitToApp } from "react-icons/md";

const Heading = () => {
    const { data } = useSession();

    return (
        <header className="bg-[#4e73df] flex justify-end">
            <details className="dropdown dropdown-end">
                <summary className="btn my-3 btn-ghost border-l-2 border-l-white text-white 
                hover:bg-transparent flex-col text-xs items-start rounded-none">
                    <span>{data?.user?.name}</span>
                    <span>{data?.user?.email}</span>
                </summary>
                <ul className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <MdPerson />
                        <a>Profile</a>
                    </li>
                    <li>
                        <MdExitToApp />
                        <a onClick={() => signOut({ callbackUrl: '/login', redirect: true })}>Logout</a>
                    </li>
                </ul>
            </details>
        </header>
    );
};

export default Heading;