"use client";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-60 min-h-screen bg-slate-900 p-4">
            <h2 className="text-white text-xl font-bold mb-6">HelpDesk</h2>
            <nav className="flex flex-col gap-2">
                <Link className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 block" href="/dashboard">Dashboard</Link>
                <Link className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 block" href="/tickets">Tickets</Link>
            </nav>
        </aside>
    );
}