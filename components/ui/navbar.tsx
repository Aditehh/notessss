"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AuthButton from "@/components/ui/auth-button";

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
                {userImage ? (
                    <Avatar>
                        <AvatarImage src={userImage || ""} alt={userName || "User"} />
                        {/* <AvatarFallback>
                            {userName?.[0] ?? "U"}
                        </AvatarFallback> */}
                    </Avatar>
                ) : (
                    <AvatarImage src={""} />
                )}
                <AuthButton />
            </div>
        </nav>
    );
}
