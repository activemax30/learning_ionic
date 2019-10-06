import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myVar = 'Hello darkness my old friend';
  todos = ['Buy Milk', 'Learn Ionic'];
  newTodo = '';

  constructor(private router: Router) {
    
  }

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
    console.log('todos: ', this.todos);
  }
    

   

    openPage() {
      this.router.navigateByUrl('/details');
    }

}
