import { Component, ViewChild } from '@angular/core';
import { tick } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { group } from 'node:console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'td-formAssignment';

   @ViewChild('signupForm') signupForm! : NgForm;

  // Subscriptions = ['Basic', 'Advanced', 'pro'];

  // default = 'Advanced';

  // defaultQuestion = 'pet';

  // advanced = 'Advanced';

  // // genders = ['Basic', 'Advanced', 'Pro'];

  // subsctiption = 'Advanced';

  // answer = '';

  // submitted = false;

  // user = {
  //   email: '',
  //   password: '',
  //   subscription: '',
  // }

  // suggestUserName() {
  //   this.singupForm.setValue({
  //     userData: {
  //       email: 'hh4883022gmail.com',
  //       password: 'here'
  //     },
  //   })
  // }

  // // onSubmit() {
  // //   this.submitted = true;
  // //   this.user.username = this.singupForm.value.userData.username;
  // //   this.user.Subscriptions = this.singupForm.value.userData.select;
  // //   this.user.email = this.singupForm.value.userData.email;



  // // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.user.email = this.singupForm.value.userData.email;
  //   this.user.subscription = this.singupForm.value.userData.subscription;
  //   this.user.password = this.singupForm.value.userData.password;

  //   // this.singupForm.reset();
  // }
  
  // Submit(){
  //   this.singupForm.setValue ({
  //     userData: {
  //       email: 'hh4003022@gmail.com',
  //       // subscription: 'Advanced',
  //       password: 'yoyoyo'
  //     }
  //   })
  // }


  subscriptions = ['Basic', 'Advanced', 'Pro'];

  selectedSubscription = 'Advanced';

  submitted = false;

  user = {
    email: '',
    subscription: '',
    password: '',
  }

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }

  

}
