import { Quote } from "./Quote.js";
import { QuoteItem } from "./QuoteItem.js";

export class ArgsQuoteOpCreate {
  quote!: Quote;
  items!: QuoteItem[];
  prepare!: boolean;
  approve!: boolean;
}
