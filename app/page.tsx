import Heading from "@/components/Heading"

import { getServerSession } from 'next-auth';
import { authOptions } from "./lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Heading />
    </div>
  )
}
