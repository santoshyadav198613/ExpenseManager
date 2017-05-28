import { Category, ExpenseDetails } from '../models/expensemodel'

export class ExpenseService {
    private _details: ExpenseDetails[];
    private _category: Category[];
    public getExpenseDetails() {
        return this._details;
    }

    public saveExpenseDetails(details: ExpenseDetails) {
        this._details.push(details);
    }

    public getExpenseCategory() {
        this._category = [
            { name: 'Grocery' },
            { name: 'Hotel' },
            { name: 'Travel' },
            { name: 'Entertainment' }
        ];

        return this._category;
    }

    public addNewCategory(category: Category) {
        this._category.push(category);
    }

}