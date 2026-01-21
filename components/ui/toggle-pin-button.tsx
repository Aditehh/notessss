"use client"
import React, { useState, useTransition } from 'react'
import { Button } from './button'
import { togglePinNoteaction } from '@/lib/actions/notes'
import { string } from 'better-auth';

interface ToggleButtonProps {
    noteId: string;
    pinned: boolean;
}


export default function PinToggleButton({ noteId, pinned }: ToggleButtonProps) {

    const [isPending, startTransition] = useTransition();



    return (
        <>
            <Button
                disabled={isPending}
                onClick={() =>
                    startTransition(() => togglePinNoteaction(noteId))
                }
                variant="ghost"
                size="sm"
            >
                {pinned ? "Unpin" : "pin"}
            </Button>
        </>
    )
}
