"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthButton from "@/components/ui/auth-button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./button";
import Link from "next/link";

export default function Navbar({
    userImage,
    userName,
}: {
    userImage?: string | null;
    userName?: string | null;
}) {
    return (
        <nav className="flex items-center justify-between px-6 py-4">
            <h1 className="text-lg font-semibold">Notes</h1>

            <div className="flex items-center gap-4">


                <div >
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                {userImage ? (
                                    <Avatar>
                                        <AvatarImage src={userImage || ""} alt={userName || "User"} />
                                    </Avatar>
                                ) : (
                                    <AvatarImage src={""} />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                            <DropdownMenuLabel>
                                {userName}
                            </DropdownMenuLabel>
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Settings
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />

                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link target="_" href={"https://github.com/Aditehh/next-better-prisma/blob/main/components/ui/comment-list.tsx"}>
                                    GitHub
                                </Link> </DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <AuthButton />

            </div>
        </nav>
    );
}
