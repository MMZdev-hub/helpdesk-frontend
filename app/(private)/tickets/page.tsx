"use client";
import { useState } from "react";
import { Ticket } from "@/types/ticket";
import BadgeStatus from "@/components/BadgeStatus";

export default function Tickets() {

const [novo, setNovo] = useState(false);
const tickets: Ticket[] = [
    { id: 1, titulo: "Sistema não carrega", status: "Aberto"},
    { id: 2, titulo: "Erro no relatório", status: "Em andamento"},
    { id: 3, titulo: "Solicitar acesso", status: "Fechado"},
]

    return (
        <div className="p-8 bg-slate-950 min-h-screen text-white">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Chamados</h1>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors" onClick={() => setNovo(true)}>+</button>
            </div>
            {tickets.map((ticket) => (
                <div className="flex justify-between p-4 bg-slate-900 rounded-lg mb-2" key={ticket.id}>
                    <p className="text-slate-300">{ticket.titulo}</p>
                    <BadgeStatus status={ticket.status}/>
                </div>
            ))}
            {novo && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-slate-900 p-6 rounded-2xl w-full max-w-md flex flex-col gap-4">
                        <h2 className="text-lg font-semibold">Novo Chamado</h2>
                        <input className="bg-slate-800 text-white p-3 rounded-lg border border-slate-700 outline-none" type="text" placeholder="Titulo do chamado"/>
                        <div className="flex gap-2 justify-end">
                            <button className="px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors" onClick={() => setNovo(false)}>Cancelar</button>
                            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors" onClick={() => setNovo(false)}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}