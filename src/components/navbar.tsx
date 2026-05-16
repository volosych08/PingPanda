import Link from "next/link";
import { MaxWidthWraper } from "./max-width-wrapper";
import { SignOutButton } from "@clerk/nextjs"
import { cn } from "@/utils";
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export const Navbar = async () => {
    const user = await currentUser();

    return (
        <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-grey-200 bg-white backdrop-blur-lg transition-all">
            <MaxWidthWraper>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex z-40 font-semibold">
                        Ping<span className="text-brand-700 ">Panda</span>
                    </Link>
                    <div className="h-full flex items-center space-x-4">
                        {
                            user ? <>
                                <SignOutButton>
                                    <Button size="sm" variant="ghost">Sign Out</Button>
                                </SignOutButton>
                                <Link href="/dashboard" className={buttonVariants({
                                    size: "sm",
                                    className: "sm:flex items-center gap-1"
                                })}>Dashboard <ArrowRight className="ml-1.5 size-4" /></Link>
                            </> :
                                <>
                                    <Link href="/pracing" className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}>Pracing</Link>

                                    <Link href="/sign-in" className={buttonVariants({
                                        size: "sm",
                                        variant: "ghost"
                                    })}>Sign in</Link>

                                    <div className="h-8 w-px bg-gray-200" />

                                    <Link href="/sign-up" className={buttonVariants({
                                        size: "sm",
                                        className: "flex items-center gap-1.5",
                                    })}>Sign up <ArrowRight className="size-4" /></Link>
                                </>
                        }
                    </div>
                </div>
            </MaxWidthWraper>
        </nav>
    );
}