"use client";
import StartCard from "@/components/StartCard";
import { Ticket } from "@/types/ticket";
import BadgeStatus  from "@/components/BadgeStatus"
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
    useAuth ();

    const tickets: Ticket[] = [
        { id: 1, titulo: "Sistema não carrega", status: "Aberto" },
        { id: 2, titulo: "Erro no relatório", status: "Em andamento" },
        { id: 3, titulo: "Solicitar acesso", status: "Fechado" },
    ]

    return (
        <div className="p-8 bg-slate-950 min-h-screen text-white">
            <h1 className="text-2xl font-bold mb-8">Dashboard</h1> 

            <div className="grid grid-cols-3 gap-4 mb-8">

                <StartCard title="Abertos" valor={12} cor="blue" />
                <StartCard title="Em andamento" valor={8} cor="yellow" />
                <StartCard title="Concluídos" valor={47} cor="green" />

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