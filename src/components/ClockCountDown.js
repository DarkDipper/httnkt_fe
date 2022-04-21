import { Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
export default function ClockCountDown({setTimeOut, setOpen}) {
    const [minute, setMinute] = useState(20);
    const [second, setSecond] = useState(0);
    let interval = useRef();
    const startTimer = () => {
        interval.current = setInterval(() => {
            const timeLeft = minute * 60 + second - 1;
            const minuteLeft = Math.floor(timeLeft / 60);
            const secondLeft = timeLeft - minuteLeft * 60;
            if (timeLeft <= 0) {
                setMinute(0);
                setSecond(0);
                setTimeOut(true);
                setOpen(true);
                clearInterval(interval.current);
            } else {
                // console.log(minuteLeft, secondLeft);
                setMinute(minuteLeft);
                setSecond(secondLeft);
            }
        }, 1000);
    };
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    return (
        <>
            <Typography variant="h1">
                {minute.toString().padStart(2, "0") +
                    " : " +
                    second.toString().padStart(2, "0")}
            </Typography>
        </>
    );
}
