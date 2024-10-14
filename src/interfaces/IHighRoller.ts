export interface IHighRoller {
    UserId: string
    CountryCode: string
    Avatar: string
    Turnover: number
    NumberOfTrades: number
    Username: string
}

export interface IHighRollers {
    highRollers: IHighRoller[]
    timeLeft: number
    position: number
    rewards: number[]
    tradingVolume: number
}
