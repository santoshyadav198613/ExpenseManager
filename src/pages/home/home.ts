import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpenseService } from '../../app/service/expense.service';
import { Category, ExpenseDetails } from '../../app/models/expensemodel';
import 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ExpenseService]
})
export class HomePage {
  category: Category[];
  expenseDetails: ExpenseDetails = {
      amount: 0,
      date: new Date(),
      details: '',
      expensecategory:''
  };
  constructor(public navCtrl: NavController, private _service: ExpenseService) {

  }

  ionViewDidLoad() {
    this.category = this._service.getExpenseCategory();
    this.expenseDetails = {
      amount: 0,
      date: new Date(),
      details: '',
      expensecategory: this.category[0].name
    };
  }

  addExpense(expense: ExpenseDetails){
      console.log(expense);
  }

}