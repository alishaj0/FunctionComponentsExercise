// FUNCTION COMPONENTS EXERCISE 

//1a
const GrinchXmas = () => {
    return (
        "Cheer up, dude. It's Christmas."
    );
}


// 2a
const GrinchMusic = () => {
    return (
        "Blast this Christmas music! It's joyful and triumphant."
    );
}


//3a
const GrinchIdiot = () => {
    return( 
        <div>
            <h2>I'm an idiot!</h2>
            <h2>You're an idiot!</h2>
        </div>
    );
}


//4a 
const GrinchSchedule = () => {
    return(
        <div>
            <ul>
                <li>4:00, wallow in self-pity.</li>
                <li>4.30, stare into the abyss.</li>
                <li>5:00, solve world hunger, tell no one.</li>
                <li>5:30, jazzercize.</li>
                <li>6:00, dinner with me. I can't cancel that again.</li>
                <li>7:00, wrestle with self-loathing.</li>
            </ul>
            <p>I'm booked. Of course, if I bump the loathing to 9, I could still be done in time to lay in bed, stare at the ceiling and slip slowly into madness.</p>
        </div>
    );
    
}


//5a
const GrinchPoster = () => {
    return <img src="https://img01.mgo-images.com/image/thumbnail/v2/content/1MV1ca3f097dd209568db5d4a36e429dbda.jpeg"/>
}


//6a
const GrinchVmail = () => {
    const u = "YOU";
    return (
        <div>
            <h1>IF {u} UTTER SO MUCH AS ONE SYLLABLE, I'LL HUNT {u} DOWN AND GUT {u} LIKE A FISH! </h1>
            <h3>If you'd like to fax me, press the star key.</h3>
        </div>
    ); 
}


//7a
const GrinchAll = () => {
    return(
        <div>
            <GrinchXmas />
            <GrinchMusic />
            <GrinchIdiot />
            <GrinchSchedule />
            <GrinchPoster />
            <GrinchVmail />
        </div>
    );
}


// BONUS
//8a
const DiceRoll = () => {
    // Use Math.floor first to instruct to return whole number, then Math.random() to instruct for random number, then set max(but not including) for range:
    const die1 = Math.floor(Math.random() * 7);
    const die2 = Math.floor(Math.random() * 7);

    return(  
        die1 === 1 && die2 === 1 ? <h1>SNAKE EYES</h1> : <h1>{die1} {die2}</h1>
    );
}


// REACT DOM RENDER(S):
ReactDOM.render(
    // <GrinchXmas />,
    // <GrinchMusic />,
    // <GrinchIdiot />,
    // <GrinchSchedule />,
    // <GrinchPoster />,
    // <GrinchVmail />,
    // <GrinchAll />,
    <DiceRoll />,
    document.getElementById('root')

);