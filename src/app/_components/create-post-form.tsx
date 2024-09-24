'use client'

import { SubmitButton } from '@/app/_components/submit-button'
import { CreatePostAction } from '@/app/_data/actions/create-post-action'

export function CreatePostForm({ action }: { action: CreatePostAction }) {
  return (
    <form action={action}>
      <input type="text" name="name" />
      <SubmitButton>Submit</SubmitButton>
    </form>
  )
}
