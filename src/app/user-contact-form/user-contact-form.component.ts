import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { UserContactComponent } from './user-contact/user-contact.component';

@Component({
  selector: 'app-user-contact-form',
  templateUrl: './user-contact-form.component.html',
  styleUrls: ['./user-contact-form.component.scss'],
})
export class UserContactFormComponent implements OnInit {
  public userContactForm!: FormGroup;
  constructor() {
    this.generateUserContactForm();
  }

  ngOnInit(): void {}

  get contactArray() {
    return this.userContactForm?.get('contacts') as FormArray;
  }

  public generateUserContactForm(): void {
    this.userContactForm = new FormGroup({
      contacts: new FormArray([UserContactComponent.addUserContactItem()]),
    });
  }
  public deleteContact(index: number) {
    this.contactArray?.removeAt(index);
  }
  addUserContactItem() {
    this.contactArray?.push(UserContactComponent.addUserContactItem());
  }

  public submitUserContactsForm(): void {
    console.log(this.userContactForm?.value);
  }
}
