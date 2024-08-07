import ToDo from "@/components/todo";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex w-[500px] min-h-[500px] p-10 bg-blue-400 rounded-2xl">
                <ToDo />
            </div>
        </main>
    );
}
