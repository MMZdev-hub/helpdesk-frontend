type BadgeStatusPromp = {
    status: string;
}

export default function BadgeStatus({ status } : BadgeStatusPromp) {

    const estilos: Record<string, string> ={
        "Aberto": "bg-green-500/20 text-green-400",
        "Em andamento": "bg-yellow-500/20 text-yellow-400",
        "Fechado": "bg-slate-500/20 text-slate-400",
    }

    const classe = estilos[status] ?? "bg-slate-500/20 text-slate-400"

    return(
       <span className={`text-xs font-medium px-2 py-1 rounded-full ${classe}`}>
            {status}
       </span>
    )
}