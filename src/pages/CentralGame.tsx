import {Card, CardContent} from "@/components/ui/card";
import {Table, TableBody, TableCell} from "@/components/ui/table";
import {Button} from "@/components/ui/button";
import {useState} from "react";
import {Circle, X} from "lucide-react"

export default function CentralGame(
    props: {
        className?: string;
    }) {
    const [currentSym, setCurrentSym] = useState("x");
    type CellValue = 'x' | 'o' | null;
    const [board, setBoard] = useState<CellValue[]>(Array(9).fill(null));

    const markCell = (index: number) => {
        debugger;
        if (board[index]) return; // If cell is already marked, do nothing
        const newBoard = [...board];
        newBoard[index] = currentSym === 'x' ? 'x' : 'o';
        setBoard(newBoard);
        setCurrentSym(currentSym === 'x' ? 'o' : 'x');
    };

    return (
        <>
            <Card className={props.className +"p-0"}>
                <CardContent >
                    <Table className="p-0 m-0">
                        <TableBody>
                            {board.map((cell, index) => (
                                <TableCell key={index} className="p-1">
                                    <Button
                                        className={`w-10 h-10 ${
                                            cell === 'x' ? 'bg-destructive/50' :
                                                cell === 'o' ? 'bg-blue-600/50' : ''}`}
                                        variant="ghost"
                                        onClick={() => markCell(index)}
                                        disabled={cell !== null}
                                    >
                                        {cell === 'x' ? <X strokeWidth="4px" size="24" className="text-destructive"/> :
                                            cell === 'o' ?
                                                <Circle strokeWidth="4px" size="24" className="text-blue-600"/> : null}
                                    </Button>
                                </TableCell>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </>
    )
}
