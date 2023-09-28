import react, { useState } from 'react'
import './Flashcard.css'
import Card from 'react-bootstrap/card';
import Row from 'react-bootstrap/row';

export default function Flashcard({flashcard}){
    const [flip, setFlip] = useState(false)
    return(
        <Row class ='px-4 py-4'>
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>

            <div className='front'>
                -{flashcard.question}
                <div className='flashcard-options'>
                    {flashcard.options.map(option => {
                        return <div className="flashcard.option">•{option}</div>
                    })}
                </div>
            </div>
            <div className='back'>{flashcard.answer}!</div>
            </div>
            </Row>
    )
}