import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import Navbar from './components/Navbar'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    message: "Click on any image to begin!",
    topScore: 0,
    curScore: 0,
    friends: friends,
    unselectedFriends: friends
}

componentDidMount() {
}

shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}


selectFriends = character => {
//   const findFriends = this.state.unselectedFriends.find(item => item.character === character);
  console.log(character)
    if(character.clicked === false){
        character.clicked = true;
        this.setState({
            curScore: this.state.curScore + 1,
            message: "You guessed right!"
        })
    } else {
        console.log("already clicked")
        this.setState({ 
   message: "You guessed wrong!",
topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
curScore: 0,
 });
        
    }

//   if(findFriends === undefined) {
//       // failure to select a character
//       this.setState({ 
//           message: "You guessed wrong!",
//           topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
//           curScore: 0,
//           friends: friends,
//           unselectedFriends: friends
//       });
//   }
//   else {
//       // success to select character
//       const newFriends = this.state.unselectedFriends.filter(item => item.character !== character);
      
//       this.setState({ 
//           message: "You guessed right!",
//           curScore: this.state.curScore + 1,
//           friends: friends,
//           unselectedFriends: newFriends
//       });
//   }

  this.shuffleArray(friends);
};

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (


      <Wrapper>
      <Navbar
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
      />
      <Title />
      {
          this.state.friends.map(friend => (
              <FriendCard
                  key={friend.id}
                  name={friend.name}
                  friend={friend}
                  image={friend.image}
                  selectFriends={this.selectFriends} 
                  curScore={this.state.curScore}
              />
          ))
      }
  </Wrapper>

    );
  }
}

export default App;

