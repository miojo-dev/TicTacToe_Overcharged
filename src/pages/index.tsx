import {AnimatedThemeToggler} from "@/components/ui/animated-theme-toggler";
import CentralGame from "./CentralGame";

export default function Home() {
    return (
        <>
            <header
                className="flex w-full border-b-2 backdrop-blur-md p-1 justify-between absolute top-0 left-0 right-0">
                <h1 className="text-2xl font-mono">
                    Tic-Tac-Toe <strong className="font-bold italic font-mono">
                    Overcharged
                </strong> ⭕❌
                </h1>
                <AnimatedThemeToggler className="relative w-8 h-8"/>
            </header>
            <main className="size-full">
                <CentralGame className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"/>
            </main>
        </>
    );
}
