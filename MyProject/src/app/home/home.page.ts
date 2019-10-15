import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  async showPopover(ev: any) {
    const popover = await this.popoverController.create({
        component: PopoverComponent,
        event: ev,
        animated: true,
        showBackdrop: true
    });
    return await popover.present();
}

  myVar = 'Hello darkness my old friend';
  todos = ['Buy Milk', 'Learn Ionic'];
  newTodo = '';

  constructor(private router: Router, public popoverController: PopoverController) {
    
  }

  addTodo() {
    this.todos.push(this.newTodo);
    this.newTodo = '';
    console.log('todos: ', this.todos);
  }
  openPage() {
    this.router.navigateByUrl('/details');
  }
  getCurrency() {
    
  }
  autogrow(e){
    e.target.style.height = "0px";
    e.target.style.height = (e.target.scrollHeight)+"px";  }

}
