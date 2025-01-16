import { Injectable, signal } from "@angular/core";
import { InvestmentInput, InvestmentResult } from "../investment-input.model";

@Injectable({ providedIn: "root" })
export class AppService {
  resultsData = signal<InvestmentResult[] | undefined>(undefined);

  results() {
    return this.resultsData();
  }

  calculateInvestmentResults(data: InvestmentInput) {
    const annualData = [];

    const { initialInvestment, annualInvesting, expectedReturn, duration } =
      data;

    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvesting;
      const totalInterest =
        investmentValue - annualInvesting * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvesting,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvesting * year,
      });
    }

    this.resultsData.set(annualData);
  }
}
