"use client";
import StartCard from "@/components/StartCard";
import { Ticket } from "@/types/ticket";
import BadgeStatus from "@/components/BadgeStatus";
import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";

export default function Dashboard() {
    useAuth();

    const [tickets, setTickets] = useState<Ticket[]>([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/tickets`, {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => res.json())
        .then((dados) => {
            if (Array.isArray(dados)) {
                setTickets(dados);
            }
        });
    }, []);

    const abertos = tickets.filter(t => t.status === "Aberto").length
    const emAndamento = tickets.filter(t => t.status === "Em andamento").length
    const fechados = tickets.filter(t => t.status === "Fechado").length

    return (
        <div className="p-8 bg-slate-950 min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <StartCard title="Abertos" valor={abertos} cor="green" />
                <StartCard title="Em andamento" valor={emAndamento} cor="yellow" />
                <StartCard title="Concluídos" valor={fechados} cor="gray" />
            </div>

            <h2 className="text-lg font-semibold mb-4">Chamados Recentes</h2>

            {tickets.map((ticket) => (
                <div className="flex justify-between p-4 bg-slate-900 rounded-lg mb-2" key={ticket.id}>
                    <p className="text-slate-300">{ticket.titulo}</p>
                    <BadgeStatus status={ticket.status} />
                </div>
            ))}
        </div>
    );
}