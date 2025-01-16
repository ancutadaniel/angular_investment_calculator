import { Component, computed, inject } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { AppService } from "../services/app.service";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  resultsData = inject(AppService);

  results = computed(() => this.resultsData.results());
}
