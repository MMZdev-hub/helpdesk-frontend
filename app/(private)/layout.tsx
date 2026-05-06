import Sidebar from "@/components/Sidebar";

export default function PrivateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style ={{ display: "flex"}} >
            <Sidebar />
            <main style={{ flex: 1, padding: "20px" }}>
                {children}
            </main>
        </div>
    );
}