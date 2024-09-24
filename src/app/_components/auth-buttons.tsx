import { Button } from '@/app/_components/ui/button'
import { signInAction } from '@/app/_data/actions/sign-in-action'
import { signOutAction } from '@/app/_data/actions/sign-out-action'

export function SignIn({ provider, ...props }: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={signInAction}>
      <Button {...props}>Sign In</Button>
    </form>
  )
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form action={signOutAction} className="w-full">
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  )
}
