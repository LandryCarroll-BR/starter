import { SignIn, SignOut } from '@/app/_components/auth-buttons'
import { CreateRateForm } from '@/app/_components/create-rate-form'
import { createRateAction } from '@/app/_data/actions/create-rate-action'
import { auth } from '@/infrastructure/persistance/session/auth'

export default async function Home() {
  const session = await auth()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Starter</h1>
      {session && session.user ? <SignOut /> : <SignIn />}
      {session && session.user && <CreateRateForm action={createRateAction} />}
    </main>
  )
}
