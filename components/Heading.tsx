"use client";

import { signOut } from 'next-auth/react';

type HeadProps = {
    data: {
        name: string,
        email: string,
        image: string
    }
}

const Heading = () => {
    return (
        <header>
            <button
                className="btn btn-secondary"
                onClick={() => signOut({ callbackUrl: '/login', redirect: true })}
            >
                Logout
            </button>
        </header>
    );
};

export default Heading;