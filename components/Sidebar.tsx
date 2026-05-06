"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const pathname = usePathname();
    
    const links = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/tickets", label: "Tickets" },
    ]

    return (
        <aside className="w-60 min-h-screen bg-slate-900 p-4">
            <h2 className="text-white text-xl font-bold mb-6">HelpDesk</h2>
            <nav className="flex flex-col gap-2">
                {links.map((link) => {
                    const ativo = pathname === link.href
                    return (
                        <Link 
                            key={link.href}
                            href={link.href}
                            className={`p-2 rounded-lg block transition-colors ${ativo ? "text-white bg-slate-800" : "text-slate-400 hover:text-white hover:bg-slate-800"}`}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </nav>
        </aside>
    );
}