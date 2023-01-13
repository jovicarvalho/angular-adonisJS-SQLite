import { Component } from '@angular/core';
import { Birds } from 'src/app/Birds';
import { BirdService } from 'src/app/services/bird.service';

@Component({
  selector: 'app-new-bird',
  templateUrl: './new-bird.component.html',
  styleUrls: ['./new-bird.component.css']
})
export class NewBirdComponent {

  btnText = 'Compartilhar!';
  constructor(private birdService:BirdService){

  }

  async createHandler(bird:Birds){
    const formData =  new FormData()

    formData.append("specie", bird.specie)
    formData.append("place", bird.place)
 
    if(bird.image) {
      formData.append("image", bird.image);    }

    
      await this.birdService.createBird(formData).subscribe();

  }

}
