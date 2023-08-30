import bcrypt from 'bcrypt';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { AuthOptions } from "next-auth";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },

            authorize: async (credential) => {
                if (!credential?.email || !credential?.password) {
                    throw new Error("Invalid email or password");
                }
                const user = await prisma.user.findUnique({
                    where: { email: credential.email },
                });

                if (!user || !user?.password) {
                    throw new Error("Email tidak cocok dengan User manapun");
                }

                const isCorrect = await bcrypt.compare(credential.password, user.password)
                if (!isCorrect) {
                    throw new Error("Password salah euy")
                }

                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email,
                    roleId: user.roleId,
                    statusId: user.statusId,
                };
            },
        })
    ],
    callbacks: {
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            };
        },
        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                };
            }
            return token;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    // secret: process.env.NEXTAUTH_SECRET
}