import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from '../card';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './play.component.html',
  styleUrl: '../../../assets/global.css'
})
export class PlayComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    this.shuffle(this.cards);
    
    for(let card = 0; card < 52; card++){
      if(card % 2 == 0){
        this.playersDeck.push(this.cards[card]);
      }
      else
        this.opponentDeck.push(this.cards[card]);
    }
  }

  message = '';
  playersDeck = new Array<Card>;
  opponentDeck =  new Array<Card>;

  cards: Card[] = [
    { 
      id: "assets/cards/2_of_clubs.png",
      suit: 'club',
      value: 2
    },
    { 
      id: "assets/cards/2_of_diamonds.png",
      suit: 'diamond',
      value: 2
    },
    { 
      id: "assets/cards/2_of_hearts.png",
      suit: 'heart',
      value: 2
    },
    { 
      id: "assets/cards/2_of_spades.png",
      suit: 'spade',
      value: 2
    },
    { 
      id: "assets/cards/3_of_clubs.png",
      suit: 'club',
      value: 3
    },
    { 
      id: "assets/cards/3_of_diamonds.png",
      suit: 'diamond',
      value: 3
    },
    { 
      id: "assets/cards/3_of_hearts.png",
      suit: 'heart',
      value: 3
    },
    { 
      id: "assets/cards/3_of_spades.png",
      suit: 'spade',
      value: 3
    },
    { 
      id: "assets/cards/4_of_clubs.png",
      suit: 'club',
      value: 4
    },
    { 
      id: "assets/cards/4_of_diamonds.png",
      suit: 'diamond',
      value: 4
    },
    { 
      id: "assets/cards/4_of_hearts.png",
      suit: 'heart',
      value: 4
    },
    { 
      id: "assets/cards/4_of_spades.png",
      suit: 'spade',
      value: 4
    },
    { 
      id: "assets/cards/5_of_clubs.png",
      suit: 'club',
      value: 5
    },
    { 
      id: "assets/cards/5_of_diamonds.png",
      suit: 'diamond',
      value: 5
    },
    { 
      id: "assets/cards/5_of_hearts.png",
      suit: 'heart',
      value: 5
    },
    { 
      id: "assets/cards/5_of_spades.png",
      suit: 'spade',
      value: 5
    },{ 
      id: "assets/cards/6_of_clubs.png",
      suit: 'club',
      value: 6
    },
    { 
      id: "assets/cards/6_of_diamonds.png",
      suit: 'diamond',
      value: 6
    },
    { 
      id: "assets/cards/6_of_hearts.png",
      suit: 'heart',
      value: 6
    },
    { 
      id: "assets/cards/6_of_spades.png",
      suit: 'spade',
      value: 6
    },{ 
      id: "assets/cards/7_of_clubs.png",
      suit: 'club',
      value: 7
    },
    { 
      id: "assets/cards/7_of_diamonds.png",
      suit: 'diamond',
      value: 7
    },
    { 
      id: "assets/cards/7_of_hearts.png",
      suit: 'heart',
      value: 7
    },
    { 
      id: "assets/cards/7_of_spades.png",
      suit: 'spade',
      value: 7
    },{ 
      id: "assets/cards/8_of_clubs.png",
      suit: 'club',
      value: 8
    },
    { 
      id: "assets/cards/8_of_diamonds.png",
      suit: 'diamond',
      value: 8
    },
    { 
      id: "assets/cards/8_of_hearts.png",
      suit: 'heart',
      value: 8
    },
    { 
      id: "assets/cards/8_of_spades.png",
      suit: 'spade',
      value: 8
    },{ 
      id: "assets/cards/9_of_clubs.png",
      suit: 'club',
      value: 9
    },
    { 
      id: "assets/cards/9_of_diamonds.png",
      suit: 'diamond',
      value: 9
    },
    { 
      id: "assets/cards/9_of_hearts.png",
      suit: 'heart',
      value: 9
    },
    { 
      id: "assets/cards/9_of_spades.png",
      suit: 'spade',
      value: 9
    },{ 
      id: "assets/cards/10_of_clubs.png",
      suit: 'club',
      value: 10
    },
    { 
      id: "assets/cards/10_of_diamonds.png",
      suit: 'diamond',
      value: 10
    },
    { 
      id: "assets/cards/10_of_hearts.png",
      suit: 'heart',
      value: 10
    },
    { 
      id: "assets/cards/10_of_spades.png",
      suit: 'spade',
      value: 10
    },
    { 
      id: "assets/cards/jack_of_clubs2.png",
      suit: 'club',
      value: 11
    },
    { 
      id: "assets/cards/jack_of_diamonds2.png",
      suit: 'diamond',
      value: 11
    },
    { 
      id: "assets/cards/jack_of_hearts2.png",
      suit: 'heart',
      value: 11
    },
    { 
      id: "assets/cards/jack_of_spades2.png",
      suit: 'spade',
      value: 11
    },
    { 
      id: "assets/cards/queen_of_clubs2.png",
      suit: 'club',
      value: 12
    },
    { 
      id: "assets/cards/queen_of_diamonds2.png",
      suit: 'diamond',
      value: 12
    },
    { 
      id: "assets/cards/queen_of_hearts2.png",
      suit: 'heart',
      value: 12
    },
    { 
      id: "assets/cards/queen_of_spades2.png",
      suit: 'spade',
      value: 12
    },
    { 
      id: "assets/cards/king_of_clubs2.png",
      suit: 'club',
      value: 13
    },
    { 
      id: "assets/cards/king_of_diamonds2.png",
      suit: 'diamond',
      value: 13
    },
    { 
      id: "assets/cards/king_of_hearts2.png",
      suit: 'heart',
      value: 13
    },
    { 
      id: "assets/cards/king_of_spades2.png",
      suit: 'spade',
      value: 13
    },
    { 
      id: "assets/cards/ace_of_clubs.png",
      suit: 'club',
      value: 14
    },
    { 
      id: "assets/cards/ace_of_diamonds.png",
      suit: 'diamond',
      value: 14
    },
    { 
      id: "assets/cards/ace_of_hearts.png",
      suit: 'heart',
      value: 14
    },
    { 
      id: "assets/cards/ace_of_spades2.png",
      suit: 'spade',
      value: 14
    },
  ]

  private shuffle(cards: Card[]) {
    let currentIndex = cards.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [cards[currentIndex], cards[randomIndex]] = [
        cards[randomIndex], cards[currentIndex]];
    }
  
    return cards;
  }
  
  public draw(): void{
    this.playersDeck.pop();
    this.opponentDeck.pop();
    if(this.playersDeck[this.playersDeck.length-1].value > this.opponentDeck[this.opponentDeck.length-1].value){
      this.message = "You won!"
    }

    else if(this.playersDeck[this.playersDeck.length-1].value < this.opponentDeck[this.opponentDeck.length-1].value){
      this.message = "You lost :("
    }

    else{
      this.message = 'You drew, draw another card'
    }
  }
}
