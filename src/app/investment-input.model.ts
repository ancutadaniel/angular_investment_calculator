export interface InvestmentInput {
  initialInvestment: number;
  annualInvesting: number;
  expectedReturn: number;
  duration: number;
}

export interface InvestmentResult {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
  totalInterest: number;
  totalAmountInvested: number;
}
