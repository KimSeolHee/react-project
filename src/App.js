import { useState } from "react";
import Box from './component/Box'
import './App.css';

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png"
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_1280.png"
  },
  paper: {
    name: "Paper",
    img: "https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_960_720.png"
  }
}

function App() {
  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect,setComputerSelect] = useState(null)
  const [result,setResult] = useState("")

  const play = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    judgement(choice[userChoice], computerChoice);
    setResult(judgement(choice[userChoice], computerChoice))
  }
  const judgement = (user,computer) => {
    console.log("user",user,"computer",computer)
    if(user.name == computer.name) {
      return "무승부"
    }else if(user.name == "Scissors")
      return computer.name == "Rock"?"짐":"이김";
    else if(user.name == "Rock")
      return computer.name == "Paper"?"짐":"이김";
    else if(user.name == "Paper")
      return computer.name == "Scissors"?"짐":"이김";
    }

  const randomChoice = () => {
    let itemArray = Object.keys(choice)
    let randomItem = Math.floor(Math.random()*itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className='btn'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
