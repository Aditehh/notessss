import AuthButton from '@/components/ui/auth-button'
import { Button } from '@/components/ui/button'
import React from 'react'
import { getCurrentUser } from '@/lib/auth'


export default async function LoginPage() {
    // const user = await getCurrentUser()
    // console.log(user)
    return (
        <div>
            <AuthButton />
        </div>
    )
}
