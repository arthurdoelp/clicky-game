import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Container from "./components/Container";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import friends from "./friends.json";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    friendsState: [],
    score: 0,
    highScore: 0,
    message: "",
    guess: false,
    randomOrder: []
  };

  //make a copy of the array and then update the info in the copy and then push the new array to the state and display
  //This.
  //Need to pass in the id and then figure out if there is an id, setState the friendsState array to have a key of id and value of true or false
  // search through the array to see if the passed in id matches and of the ids in the array of friendsState. If it does, game over, if not add it to the array of friends (i think)
  //Need to check to see if there is an ID.  If there is an ID, pass it to the friendsState array with the key of the ID and the value of true.
  clickFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log(id);
    if (id) {
      // let arrObj = {
      //   id: id,
      //   clicked: true
      // }

      let friendStateArray = this.state.friendsState;
      //let idArr = friendStateArray
      let compareCheck = friendStateArray.includes(id);



      if (compareCheck) {
        console.log("the ID IS in the friendStateArray: " + compareCheck);
      }
      else {
        console.log("the ID is NOT in the friendStateArray: " + compareCheck);
      }

      if (compareCheck) {
        console.log("Game over");
        friendStateArray = [];
        this.setState(prevState => ({
          friendsState: friendStateArray,
          score: 0,
          message: "You guessed incorrectly",
          guess: false
        }));
      }
      else {
        friendStateArray.push(id);
        this.setState(prevState => ({
          friendsState: friendStateArray,
          score: prevState.score + 1,
          message: "You guessed correctly!",
          guess: true
        }));
      }

      if (this.state.score >= this.state.highScore) {
        this.setState({ highScore: this.state.score });
      }

      console.log(friendStateArray);
      console.log("Score: " + this.state.score);
      console.log("Highscore: " + this.state.highScore);

      function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      }

      var friendsArrCopy = this.state.friends;
      shuffle(friendsArrCopy);
      this.setState({friends: friendsArrCopy})

    }

  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <NavBar
          message={this.state.message}
          score={this.state.score}
          highScore={this.state.highScore}
          guess={this.state.guess}
        />
        <Header>Clicky Game!</Header>
        <Container>
          {this.state.friends.map(friend => (
            <FriendCard
              removeFriend={this.removeFriend}
              clickFriend={this.clickFriend}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </Container>
        <Footer>Clicky Game</Footer>
      </Wrapper>
    );
  }
}

export default App;
