import Link from "next/link"
import { Code, Github, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background py-6">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} DSA Visualizer. All rights reserved.
                    </p>
                </div>
                <div className="flex gap-4">
                    <Link
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                    >
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

