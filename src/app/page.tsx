import { SignIn, SignOut } from '@/components/auth-buttons'
import { auth } from '@/root/auth.config'

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Starter</h1>
      {session && session.user ? <SignOut /> : <SignIn provider="google" />}
      {session && <>{session.user?.name}</>}
    </main>
  )
}
