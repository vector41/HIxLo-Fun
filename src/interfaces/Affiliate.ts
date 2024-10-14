export interface Affiliate {
    AffiliateType: string
    ReferralId: string
    Name: string
    Tier1Paid: number
    Tier2Paid: number
    Tier3Paid: number
    Tier1Unclaimed: number
    Tier2Unclaimed: number
    Tier3Unclaimed: number
    CreatedAt: Date
}
