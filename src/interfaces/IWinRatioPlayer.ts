export interface ITopWinRatioPlayer {
    UserId: string
    Username: string
    CountryCode: string
    Avatar: string
    WinRatio: number
    NumberOfTrades: number
    NumberOfWins: number
}

export interface ITopWinRatioPlayers {
    winRatioPlayers: ITopWinRatioPlayer[]
    timeLeft: number
    position: number
    rewards: number[]
    detail: ITopWinRatioPlayer | null | undefined
}
