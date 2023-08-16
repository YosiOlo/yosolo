import Heading from "@/components/Heading";
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation";
import { authOptions } from "./lib/auth"

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/login');

  return (
    <main className="">
      <Heading />
      <h1 className='text-2xl font-semibold tracking-tight'>Home page</h1>
    </main>
  )
}