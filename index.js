/* import {Button} from "@material-ui/core"; */

function App(){

     const [displayTime, setDisplayTime] = React.useState(0);
     const [teamPlayer1, setTeamPlayer1] = React.useState(["",""]);
     const [teamPlayer2, setTeamPlayer2] = React.useState(["",""]);
     const [setsWonTeam1, setSetsWonTeam1] = React.useState(0);
     const [setsWonTeam2, setSetsWonTeam2] = React.useState(0);
     const [setNumber, setSetNsetNumber] = React.useState([1,"1st"]);
    
    

    const formatTime = (time) => {
        let minutes = Math.floor(time/60);
        let seconds = time % 60; 
        return (minutes < 10 ? "0" + minutes : minutes) + " : " + (seconds < 10 ? "0" + seconds : seconds);
    }

    const changeNamePlayersTeam1 = index => e => {
        let newArr = [...teamPlayer1];
        newArr[index] = e.target.value;
        setTeamPlayer1(newArr);
    }
    const changeNamePlayersTeam2 = index => e => {
        let newArr = [...teamPlayer2];
        newArr[index] = e.target.value;
        setTeamPlayer2(newArr);
    }
    return (
         <div className="center-align">
            <h3>Volleyball scoring Application</h3>
            <div className="dual-container">
                <div className="column">
                    <p> <i className="material-icons">accessibility</i> Player 1 : </p>
                    <input type="text" placeholder="player1" value={teamPlayer1[0]} onChange={changeNamePlayersTeam1(0)}></input>
                    <p><i className="material-icons">accessibility</i> Player 2 : </p>
                    <input placeholder="player2" value={teamPlayer1[1]} onChange={changeNamePlayersTeam1(1)}></input>
                </div>
                <div className="column">
                    <p> <i className="material-icons">accessibility</i> Player 1 : </p>
                    <input type="text" placeholder="player1" value={teamPlayer2[0]} onChange={changeNamePlayersTeam2(0)}></input>
                    <p> <i className="material-icons">accessibility</i> Player 2 : </p>
                    <input placeholder="player2" value={teamPlayer2[1]} onChange={changeNamePlayersTeam2(1)}></input>
                </div>
            </div>
            <div className="container">
                <div className="column team1">
                    
                    <p>Color : </p>
                    <p>the team players are : {teamPlayer1[0].toUpperCase()} and {teamPlayer1[1].toUpperCase()}</p>
                </div>
                <div className="column middle">
                    <p>{setNumber[1]} Set</p>
                    <button>Start</button>
                    <button>End</button>
                </div>
                <div className="column team2">
                    
                    <p>Color : </p>
                    <p>the team players are : {teamPlayer2[0].toUpperCase()} and {teamPlayer2[1].toUpperCase()}</p>
                
                </div>
            </div>
            {/* <Length title={"Break Length"} changeTime={changeTime} type={"break"} time={breakTime} formatTime={formatTime}/>
            <Length title={"Session Length"} changeTime={changeTime} type={"session"} time={sessionTime} formatTime={formatTime}/> */}
            {/* <h3>{onBreak ? "Break" : "Session"}</h3> */}
            {/* <h1>{formatTime(displayTime)}</h1>
            <button className="btn-large deep-purple lighten-2"  onClick={controlTime} >
                { timerOn ? 
                (<i className="material-icons">pause_circle_filled</i>)
                :
                (<i className="material-icons">play_circle_filled</i>)}
            </button>
            <button className="btn-large deep-purple lighten-2" onClick={resetTime}>
                <i className="material-icons">autorenew</i>
            </button> */}
         </div>
    );
}

function Length ({title, changeTime, type, time, formatTime}){
    return (
        <div>
            {/* <h3>{title}</h3>
            <div className="time-sets">
                <button className="btn-small deep-purple lighten-2" onClick={() => changeTime(- 60, type)}>
                    <i className="material-icons">arrow_downward</i>
                </button>
                <h3>{formatTime(time)} </h3>
                <button className="btn-small deep-purple lighten-2" onClick={() => changeTime(+ 60, type)}>
                    <i className="material-icons">arrow_upward</i>
                </button>
            </div> */}
        </div>

    );
}

ReactDOM.render(<App/>, document.getElementById('root'));