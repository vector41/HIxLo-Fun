// Define the interface for a single challenge round status
export interface ChallengeStatus {
    positions: IFutureBTCChallenge[] | null;
    status: IBTCChallengePool | null;
}

// Define the interface for the entire response
export interface AllChallengeStatus {
    expiredChallengeStatus: ChallengeStatus;
    liveChallengeStatus: ChallengeStatus;
    nextChallengeStatus: ChallengeStatus;
}

// Define the interfaces used in the backend models

export interface IFutureBTCChallenge {
    User: {
      _id: string,
      Username: string,
      Avatar: string,
      CountryCode: string,  
    }; // or you can define a IUser interface and use IUser instead
    Position: number;
    BTCChallengePool: string;
    Place: number;
    Reward: number;
}

export interface IBTCChallengePool {
    StartTime: Date;
    EndTime: Date;
    StartPrice?: number;
    EndPrice?: number;
    NextId?: string; // ObjectId is typically represented as string in frontend
    PrevId?: string;
    Prize: number;
}
