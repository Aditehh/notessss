"use client"
import AuthButton from '@/components/ui/auth-button'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSession, signIn, signOut } from '@/lib/auth-client'


export default async function LoginPage() {

    const router = useRouter()

    const { data: session, isPending } = useSession();

    useEffect(() => {
        if (session) {
            router.push("/notes")
        }
    }, [session, router])



    // const user = await getCurrentUser()
    // console.log(user)
    return (
        <div>
            <AuthButton />
        </div>
    )
}
