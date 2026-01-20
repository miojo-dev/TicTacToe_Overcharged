import {AnimatedThemeToggler} from "@/components/ui/animated-theme-toggler";

export default function Home() {
    return (
        <>
            <header className="flex w-full border-b-2 backdrop-blur-sm p-1 justify-between">
                <h1 className="text-2xl font-mono">
                    Tic-Tac-Toe <strong className="font-bold italic font-mono">
                        Overcharged
                    </strong> ⭕❌
                </h1>
                <AnimatedThemeToggler className="relative w-8 h-8 "/>
            </header>
            <main className="size-full">

            </main>
        </>
    );
}
