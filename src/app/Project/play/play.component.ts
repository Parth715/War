import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../card';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './play.component.html',
  styleUrl: '../../../assets/global.css'
})
export class PlayComponent {

  cards: Card[] = [
    { 
      id: "2_of_clubs.svg",
      suit: 'club',
      value: 2
    },
    { 
      id: "2_of_diamonds.svg",
      suit: 'diamond',
      value: 2
    },
    { 
      id: "2_of_hearts.svg",
      suit: 'heart',
      value: 2
    },
    { 
      id: "2_of_spades.svg",
      suit: 'spade',
      value: 2
    },

  ]
}
