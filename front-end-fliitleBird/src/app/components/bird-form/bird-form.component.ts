import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'
@Component({
  selector: 'app-bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']
})
export class BirdFormComponent {
  @Input() btnText! : string

  submit(){
    console.log("Enviou Formulário")
  }

  momentForm!: FormGroup;
  
  constructor(){}


}
