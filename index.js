/* import {Button} from "@material-ui/core"; */

function App(){

     const [displayTime, setDisplayTime] = React.useState(0);
     const [teamPlayer1, setTeamPlayer1] = React.useState(["Player 1","Player 2"]);
     const [teamPlayer2, setTeamPlayer2] = React.useState(["Player 1","Player 2"]);
     const [setsWonTeam1, setSetsWonTeam1] = React.useState(0);
     const [setsWonTeam2, setSetsWonTeam2] = React.useState(0);
     const [scoreTeam1, setScoreTeam1] = React.useState(0);
     const [scoreTeam2, setScoreTeam2] = React.useState(0);
     const [setNumber, setSetNumber] = React.useState(1);
     const [timerOn, setTimerOn] = React.useState(false);
     const [events, setEvents] = React.useState([]);
     
     const setText = ["1st", "2nd", "3rd"];
    
     React.useEffect(() => {
        let interval;
        if (timerOn) {
          interval = setInterval(() => {
            setDisplayTime((prevTime) => prevTime + 1);
          }, 1000);
        } else if (!timerOn) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [timerOn]);


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
    const handleStartSet = () => {
        /* clearInterval(interval); */
        setDisplayTime(0);
        setTimerOn(!timerOn);

    }
    const handleEndSet = () => {
        
        if(scoreTeam1>=21 && Math.abs(scoreTeam1-scoreTeam2)>1 && scoreTeam1>scoreTeam2){
                setTimerOn(!timerOn);
                setSetNumber(setNumber+1);
                setSetsWonTeam1(setsWonTeam1+1);
                console.log(setsWonTeam1);
            }
            else if (scoreTeam2>=21 && Math.abs(scoreTeam1-scoreTeam2)>1 && scoreTeam1<scoreTeam2){
                setTimerOn(!timerOn);
                setSetNumber(setNumber+1);
                setSetsWonTeam2(setsWonTeam2+1);
                console.log(setsWonTeam2);
            }
        }
    
    
    const handlePointStarted = index => {
        if(timerOn){
            setEvents({period: setNumber, text: 'Game started', time: displayTime, Players: ''});
        }
    }
    const handlePointScored = index => {
        if(timerOn){
            index ? setScoreTeam2(scoreTeam2+1): setScoreTeam1(scoreTeam1+1);
        }
    }
    const handleTimeout = index => {
        index ?
        setEvents([...events, {period: setNumber, text: 'Technical Timeout', time: displayTime, Players: teamPlayer2[0]+'/'+teamPlayer2[1]}])
        :
        setEvents([...events, {period: setNumber, text: 'Technical Timeout', time: displayTime, Players: teamPlayer1[0]+'/'+teamPlayer1[1]}])
        console.log(events);
        console.log(displayTime);

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
                    <div className="score">
                        <p>{teamPlayer1[0].toUpperCase()} / {teamPlayer1[1].toUpperCase()}</p>
                        <h2 id="score" style={{textAlign: 'right', paddingRight: '10px'}}>{scoreTeam1} <span >{setsWonTeam1}</span></h2>
                    </div>
                    <button className="buttons" onClick={handlePointStarted}><i className="material-icons">alarm_on</i> Point Started</button>
                    <button className="buttons" onClick={()=>handlePointScored(0)}><i className="material-icons">plus_one</i> Point Scored</button>
                    <button className="buttons" onClick={()=>handleTimeout(0)}><i className="material-icons">av_timer</i> Timeout</button>
                </div>

                <div className="column middle">
                    <h2>{formatTime(displayTime)}</h2>
                        <p>{setText[setNumber-1]} Set</p>
                        <button id="start" disabled={timerOn} onClick={()=>handleStartSet()}><i className="material-icons">alarm</i>Start</button>
                        <button id="end" disabled={!timerOn} onClick={()=>handleEndSet()}><i className="material-icons">pan_tool</i> End</button>
                </div>

                <div className="column team2">
                    <div className="score">
                        <p style={{textAlign: 'right', paddingRight: '10px'}}>{teamPlayer2[0].toUpperCase()} / {teamPlayer2[1].toUpperCase()}</p>
                        <h2 id="score"><span >{setsWonTeam2}</span> {scoreTeam2} </h2>
                    </div>
                    <button className="buttons" onClick={handlePointStarted}><i className="material-icons">alarm_on</i> Point Started</button>
                    <button className="buttons" onClick={()=>handlePointScored(1)}><i className="material-icons">plus_one</i> Point Scored</button>
                    <button className="buttons" onClick={()=>handleTimeout(1)}><i className="material-icons">av_timer</i> Timeout</button>

                </div>
            </div>
                <Cards events={events} formatTime={formatTime} />
         </div>
    );
}

function Cards ({events, formatTime}) {
return(
    
    <div >
         
             {events.map((e,i) =>  { return (
                <div key={i}>
                                        
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                <span className="card-title">Card Title</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                                </div>
                                <div className="card-action">
                                    <p>{e.Players}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>);
            })} 
            
        
         
        
    </div>
);
}
ReactDOM.render(<App/>, document.getElementById('root'));