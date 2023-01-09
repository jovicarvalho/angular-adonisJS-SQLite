import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-bird-form',
  templateUrl: './bird-form.component.html',
  styleUrls: ['./bird-form.component.css']

})
export class BirdFormComponent implements OnInit{
  @Input() btnText! : string

  birdForm!: FormGroup;

  ngOnInit():void {
    this.birdForm = new FormGroup({
      id:new FormControl(''),
      specie:new FormControl('', [Validators.required]),
      place:new FormControl('', [Validators.required]),
      image:new FormControl(''),
    });

  };

  get specie() {
    return this.birdForm.get("specie")!;
  }

  get place() {
    return this.birdForm.get("place")!;
  }

  onFileSelected(event:any) {

    const file: File = event.target.files[0]

    this.birdForm.patchValue({image: file})

  }
  
  submit(){
    if (this.birdForm.invalid){
      return;
    }
    console.log(this.birdForm.value)
  }


}
