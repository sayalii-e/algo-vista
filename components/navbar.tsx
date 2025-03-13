"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AlignJustify, Code } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const routes = [
        {
            href: "/",
            label: "Home",
            active: pathname === "/",
        },
        {
            href: "/visualize/data-structures",
            label: "Data Structures",
            active: pathname?.startsWith("/visualize/data-structures"),
        },
        {
            href: "/visualize/sorting",
            label: "Sorting",
            active: pathname?.startsWith("/visualize/sorting"),
        },
        {
            href: "/visualize/searching",
            label: "Searching",
            active: pathname?.startsWith("/visualize/searching"),
        },
        {
            href: "/visualize/graph",
            label: "Graph",
            active: pathname?.startsWith("/visualize/graph"),
        },
        {
            href: "/visualize/dynamic-programming",
            label: "Dynamic Programming",
            active: pathname?.startsWith("/visualize/dynamic-programming"),
        },
        {
            href: "/visualize/other",
            label: "Other",
            active: pathname?.startsWith("/visualize/other"),
        },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <Code className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">DSA Visualizer</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                        {routes.map((route) => (
                            <Link
                                key={route.href}
                                href={route.href}
                                className={cn(
                                    "transition-colors hover:text-foreground/80",
                                    route.active ? "text-foreground" : "text-foreground/60",
                                )}
                            >
                                {route.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button asChild variant="outline" className="hidden md:flex">
                            <Link href="https://github.com" target="_blank" rel="noreferrer">
                                GitHub
                            </Link>
                        </Button>
                    </div>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                            >
                                <AlignJustify className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="pr-0">
                            <div className="px-7">
                                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                                    <Code className="h-6 w-6 mr-2" />
                                    <span className="font-bold">DSA Visualizer</span>
                                </Link>
                            </div>
                            <nav className="flex flex-col gap-4 px-7 mt-8">
                                {routes.map((route) => (
                                    <Link
                                        key={route.href}
                                        href={route.href}
                                        className={cn(
                                            "text-muted-foreground transition-colors hover:text-foreground",
                                            route.active && "text-foreground",
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {route.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

