"use client";
import { useState } from "react";   
import { useRouter } from "next/navigation";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); 

   

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(email, password);
        const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ email, senha: password }),
        });
    
        const dados = await resposta.json();
    
        if (resposta.ok) {
            localStorage.setItem("token", dados.token);
            router.push("/dashboard");
        } else {
            alert(dados.message);
        }
    }

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center">
            <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-md">
                <h1 className="text-white text-2xl font-bold mb-2">Login</h1>
                <p className="text-slate-400 mb-6">Entre com sua conta</p>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <input className="bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-blue-500"
                     type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="bg-slate-800 text-white p-3 rounded-lg outline-none border border-slate-700 focus:border-blue-500"
                     type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-colors" type="submit">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}