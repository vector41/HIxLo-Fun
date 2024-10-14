export interface Network {
    chain: string
    chainFullName: string
    contract: string
    precision: number
    canDeposit: boolean
    canWithdraw: boolean
    minimumDepositAmount: string
    minimumWithdrawAmount: string
    maximumWithdrawAmount: string
    isSupportMemo: boolean
}

export interface Coin {
    coinId: number
    symbol: string
    logoUrl: string
    status: string
    networks: { [key: string]: Network }
}
