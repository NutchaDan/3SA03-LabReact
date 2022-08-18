import React, { useState } from 'react';
import _ from 'lodash';

import CharacterCard from './CharacterCard';
import './App.css';

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 0, //เล่นครั้งที่เท่าไหร่
        guess: '', //คลิกไปกี่คำแล้ว
        completed: false
    }
 }

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    const [check, setCheck] = useState("")

    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length) { 
            if(guess == state.word) {
                console.log('yeah!')
                setState({...state, completed: true})
                setCheck("correct")
            } else {
                console.log('reset, next attempt')
                setState({...state, guess: '', attempt: state.attempt + 1})
                setCheck("wrong")
            }
        }
    }

    return (
        <div>
            { 
                state.chars.map((c, i) => 
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                )
            }
            {
                check == "wrong" && (
                    <span>
                        <h3> You can do it! </h3>
                        <h3> Attempt : {state.attempt} </h3>
                    </span>
                )
            }
            {
                check == "correct" && (
                    <span>
                        <h3> Congratulations!! </h3>
                        <h3> Answer : {state.word} </h3>
                    </span>
                )
            }
        </div>
    )
}
