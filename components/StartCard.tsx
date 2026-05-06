type StartCardProps = {
    title: string;
    valor: number;
    cor: string;
}

export default function StartCard({ title, valor, cor }: StartCardProps) {
    return (
        <div className="p-6 bg-slate-900 rounded-xl flex flex-col gap-2 text-white">
            <h2 className="text-sm text-slate-400">{title}</h2>
            <p className="text-3xl font-bobld" style={{ color: cor }}>{valor}</p>
        </div>
    );
}