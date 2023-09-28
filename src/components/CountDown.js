import { useEffect, useRef, useState } from "react";
import './CountDown.css'
import Alert from 'react-bootstrap/Alert';


const timeFormat = (time) => {
    let mins = Math.floor(time / 60)
    let secs = Math.floor(time - mins * 60)

    if (secs <= 10) secs = '0' + secs;
    if (mins <= 10) mins = '0' + mins;

    return mins + ':' + secs
}

export default function CountDown({seconds}){
    const [countdown, setCountdown] = useState(seconds)
    const timer = useRef()


    useEffect(() => {
        timer.current = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer.current)
    }, [])

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timer.current)
        }
    }, [countdown])


    return (
        <p1>Time left: {timeFormat(countdown)}</p1>
        )




        
}