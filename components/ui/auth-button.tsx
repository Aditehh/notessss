"use client"

import React from 'react'
import { Button } from './button'
import { useRouter } from 'next/navigation'
import { Github, Loader2 } from 'lucide-react'
import { signIn, useSession } from '@/lib/auth-client'
import { useEffect } from 'react'

export default function AuthButton() {
    const router = useRouter()

    const { data: session, isPending } = useSession();

    if (isPending) {
        return (
            <div>
                <Loader2 className='w-4 h-4 animate-spin' />
                Loading...
            </div>
        )
    }

    useEffect(() => {
        if (session) {
            router.push("/notes")
        }
    }, [session, router])   



    const signinbtn = async () => {
        await signIn.social({
            provider: "github"
        })
    }



    return (
        <div>
            <Button onClick={signinbtn}>
                <Github className='w-4 h-4 mr-2' />
                signinwithgithub
            </Button>
        </div>
    )

}
