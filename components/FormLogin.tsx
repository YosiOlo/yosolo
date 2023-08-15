"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block">Contoh: example@gmail.com</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input input-primary w-full mt-1"
                />
            </div>
            <label htmlFor="password" className="block mt-4">*password minimal 8 karakter</label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="input w-full input-primary mt-1"
                />
                <div onClick={() => setShowPassword(!showPassword)} className="absolute mr-3 right-0
                    top-1/2 transform -translate-y-1/2 cursor-pointer">
                    {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                </div>
            </div>
            <button type="submit" className="btn btn-primary w-full text-white my-4">Login</button>
            <Link href="/register"
                className="hover:border-b-2 hover:border-black">
                Buat akun baru
            </Link>
        </form>
    )
}

export default FormLogin