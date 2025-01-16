import { Component, inject, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppService } from "../services/app.service";
import { InvestmentInput } from "../investment-input.model";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  private appService = inject(AppService);

  initialInvestment = signal<string>("0");
  annualInvesting = signal<string>("0");
  expectedReturn = signal<string>("5");
  duration = signal<string>("10");

  onSubmit() {
    const userInput: InvestmentInput = {
      initialInvestment: +this.initialInvestment(),
      annualInvesting: +this.annualInvesting(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    };

    this.appService.calculateInvestmentResults(userInput);

    this.initialInvestment.set("0");
    this.annualInvesting.set("0");
    this.expectedReturn.set("5");
    this.duration.set("10");
  }
}
