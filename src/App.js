import './App.css';
import React from 'react';
import img1 from "./img/robert-stemler-VtMdZFGCWuI-unsplash.png";
import img2 from "./img/hans-veth-YXUopi5p-bc-unsplash2.png";
import img3 from "./img/james-wainscoat-0DCnT37wevk-unsplash.png";
import img4 from "./img/pawel-czerwinski-BPrk2cOoCq8-unsplash.png";
import img5 from "./img/robert-stemler-VtMdZFGCWuI-unsplash.png";

import img7 from "./img/denny-muller-qoCrTHUu6-E-unsplash.jpg";
import img8 from "./img/david-clode-3udd_NEmgDs-unsplash.png";

import img10 from "./img/yani-vandenbranden-FLaOOXl2tZ8-unsplash.jpg";

let picArray = [
    img1
  , img2
  , img4
  , img5
  , img3
  
  , img7
  , img8
  
  , img10
]
let len = picArray.length

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      randomIndex: 0,
      randomImage: 0
    };

    this.handleLoad = this.handleLoad.bind(this);



    this.onClickNewQuote = this.onClickNewQuote.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  handleLoad() {
    this.setState({
      randomIndex: Math.floor(Math.random() * 43),
      randomImage: Math.floor(Math.random() * len)
    });
  }
  onClickNewQuote() {


    this.setState({
      randomIndex: Math.floor(Math.random() * 43),
      randomImage: Math.floor(Math.random() * len)
    });
  }







  render() {
    const quotes = [{
      quote: "A single death is a tragedy, a million deaths is a statistic."
      , author: "Joseph Stalin"
    },
    {
      quote: "I believe that people would be alive today if there were a death penalty."
      , author: "Nancy Reagan"
    },
    {
      quote: "The quickest way to end a war is to lose it."
      , author: "George Orwell"
    },
    {
      quote: "I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones."
      , author: "Albert Einstein"
    },
    {
      quote: "War is much too serious a matter to be entrusted to the military."
      , author: "Georges Clemenceau"
    },
    {
      quote: "War is a series of disasters which result in a winner."
      , author: "Georges Clemenceau"
    },
    {
      quote: "War is not nice."
      , author: "  Barbara Bush"
    },
    {
      quote: "War is a game that is played with a smile. If you can't smile, grin. If you can't grin, keep out of the way till you can."
      , author: "Winston Churchill"
    },
    {
      quote: "To be prepared for war is one of the most effective means of preserving peace."
      , author: "George Washington"
    },
    {
      quote: "Stay out of the road, if you want to grow old."
      , author: "Pink Floyd"
    },
    {
      quote: "Death is a very dull, dreary affair, and my advice to you is to have nothing whatsoever to do with it."
      , author: "W. Somerset Maugham"
    },
    {
      quote: " Many that live deserve death. And some that die deserve life."
      , author: "J.R.R.Tolkien"
    },
    {
      quote: "And lastly there is the oldest and deepest desire, the Great Escape: the Escape from Death."
      , author: "J.R.R.Tolkien"
    },
    {
      quote: "As to you, Life, I reckon you are the leavings of many deaths No doubt I have died, myself ten thousand times before."
      , author: " Walt Whitman"
    },
    {
      quote: "Men are at war with each other because each man is at war with himself."
      , author: "Francis Meehan"
    },
    {
      quote: "It's not that I'm afraid to die, I just don't want to be there when it happens."
      , author: "Woody Allen"
    },
    {
      quote: "It is hard to have patience with people who say 'There is no death' or 'Death doesn't matter.' There is death and whatever is matters."
      , author: "C.S.Lewis"
    },
    {
      quote: "A man's dying is more the survivors' affair than his own."
      , author: "Thomas Mann"
    },
    {
      quote: "I do not believe in a fate that falls on men however they act, but I do believe in a fate that falls on them unless they act."
      , author: "G. K. Chesterton"
    },
    {
      quote: "A man who won't die for something is not fit to live."
      , author: "Martin Luther King"
    },
    {
      quote: "Once the game is over, the king and the pawn go back in the same box."
      , author: "Italian Proverb"
    },
    {
      quote: "I have not yet begun to fight!"
      , author: "John Paul Jones"
    },
    {
      quote: "Mankind must put an end to war, or war will put an end to mankind."
      , author: "John Fitzgerald Kennedy"
    },
    {
      quote: "Wars have never hurt anybody except the people who die."
      , author: "Salvador Dali"
    },
    {
      quote: "War does not determine who is right - only who is left."
      , author: "Bertrand Russell"
    },
    {
      quote: "We improve ourselves by victories over ourself. There must be contests, and you must win."
      , author: "Edward Gibbon"
    },
    {
      quote: "We succeed only as we identify in life, or in war, or in anything else, a single overriding objective, and make all other considerations bend to that one objective."
      , author: "Dwight D. Eisenhower"
    },
    {
      quote: "Experience is a hard teacher because she gives the test first, the lesson afterwards."
      , author: "Vernon Sanders Law"
    },
    {
      quote: "You might as well fall flat on your face as lean over too far backwards."
      , author: "James Thurber"
    },
    {
      quote: "Courage is being scared to death - but saddling up anyway."
      , author: "John Wayne"
    },
    {
      quote: "Death is more universal than life everyone dies but not everyone lives."
      , author: "A. Sachs"
    },
    {
      quote: "Imagination is the one weapon in the war against reality."
      , author: "Jules de Gaultier"
    },
    {
      quote: "You can't say that civilization don't advance, however, for in every war they kill you in a new way."
      , author: "Will Rogers"
    },
    {
      quote: "...Sometime they'll give a war and nobody will come."
      , author: "Carl Sandburg"
    },
    {
      quote: "It is well that war is so terrible, or we should get too fond of it."
      , author: "Robert E. Lee"
    },
    {
      quote: "You can no more win a war than you can win an earthquake."
      , author: "Jeannette Rankin"
    },
    {
      quote: "War is one of the scourges with which it has pleased God to afflict men."
      , author: "Cardinal Richelieu"
    },
    {
      quote: "In war there is no substitute for victory."
      , author: "General Douglas MacArthur"
    },
    {
      quote: "War isn't about who's right, its about who's left."
      , author: "Anders Russell"
    },
    {
      quote: "The object of war is not to die for your country but to make the other bastard die for his."
      , author: "General G. C."
    },
    {
      quote: "Much good work is lost for the lack of a little more."
      , author: "Edward Harriman"
    },
    {
      quote: "When defeat comes, accept it as a signal that your plans are not sound, rebuild those plans, and set sail once more toward your coveted goal."
      , author: "Napolean Hill,Napolean"
    },
    {
      quote: "Brave men are all vertebrates, they have their softness on the surface and their toughness in the middle."
      , author: "Lewis Carroll"
    }


    ]
    let random = this.state.randomIndex
    let randomImage = this.state.randomImage
    let currentQuote = quotes[random].quote
    let currentAuthor = quotes[random].author
    console.log("n quotes:")
    console.log(quotes.length)
    return (


      <div className="App" style={{
        backgroundImage: " url(" + picArray[randomImage] + ")",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        position: "relative",

        backgroundPosition: "center top",
      }} >

        <q id="text">
          {currentQuote}
        </q>

        <p id="author">
          {currentAuthor}
        </p>

        <div className="button-group">
        <div className="button" id="new-quote" onClick={this.onClickNewQuote}>
          Nouvelle Citation
        </div>
        <Tweet quote={currentQuote} /></div>
      </div>

    );
  }
}
class Tweet extends React.Component {

  render() {

    let text = `https://twitter.com/intent/tweet?text=${this.props.quote}`
    return (

      <div id="tweet-quote" href={text} target="_top" className="button">
        Tweeter Citation
      </div>
    )
  }
}

export default App;
