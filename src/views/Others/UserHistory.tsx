import React from 'react'

interface Game {
    name: string
    winner: string
    date: string
}

interface Props {
    history: Game[]
}

const GameHistoryTable: React.FC<Props> = () => {
    const history: Game[] = [
        { name: 'Chess', winner: 'Player 1', date: '2024-02-26' },
        { name: 'Tic Tac Toe', winner: 'Player 2', date: '2024-02-25' },
        { name: 'Checkers', winner: 'Player 1', date: '2024-02-24' },
        { name: 'Connect Four', winner: 'Player 2', date: '2024-02-23' },
    ]
    return (
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Game</th>
                        <th className="px-4 py-2">Winner</th>
                        <th className="px-4 py-2">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((game, index) => (
                        <tr
                            key={index}
                            className={
                                index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                            }
                        >
                            <td className="border px-4 py-2">{game.name}</td>
                            <td className="border px-4 py-2">{game.winner}</td>
                            <td className="border px-4 py-2">{game.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default GameHistoryTable
