import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { title: "Fun Time",
      imageUrl: "../../assets/rudra_sunglass.jpg",
      userName: "Avyan Rai",
      content: "Rudra is having fun wearing sunglasses."      
    },
    { title: "Game Time",
      imageUrl: "../../assets/anika_in_game_room.jpg",
      userName: "Anika Rai",
      content: "Soha is having fun time."      
    },
    { title: "Beach",
      imageUrl: "../../assets/anika_puducherry_beach.jpg",
      userName: "Adrika Rai",
      content: "Kalyani is having great time on puducherry beach."      
    }];
}
