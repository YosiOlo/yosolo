import bcrypt from 'bcrypt';
import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
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
                    throw new Error("invalid email or password");
                }
                const user = await prisma.user.findUnique({
                    where: { email: credential.email },
                });
                if (!user || !user?.password) {
                    console.log('router')
                    throw new Error("invalid credential");
                }
                const isCorrect = await bcrypt.compare(credential.password, user.password)
                if (!isCorrect) {
                    throw new Error("wrong password")
                }
                return user;
            }
        })
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }