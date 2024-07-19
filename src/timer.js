import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './playbutton';
import Pausebutton from './pausebuton';
import Settingsbutton from './Settingsbutton';
import { useContext,useState,useEffect,useRef } from 'react';
import SettingsContext from './SettingsContext';

function Timer() {
    const settingsInfo = useContext(SettingsContext);
    const [isPaused, setIsPaused] = useState(true);

    const [mode, setMode] = useState('break');

    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';
        const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes )*60;
        setMode(nextMode);
        modeRef.current = nextMode;
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
    }
    
    function tick() {
        secondsLeftRef.current = secondsLeftRef.current - 1;
        setSecondsLeft(secondsLeftRef.current);
    }

    function initTimer() {
        setSecondsLeft(settingsInfo.workMinutes * 60);
    }
    useEffect(() => {
        initTimer();

        const interval = setInterval(() => {
            if (isPausedRef.current) {
                return;
            }
            if (secondsLeftRef.current === 0) {
                return switchMode();
            }

            tick();
        }, 1000);
        return() => clearInterval(interval);
    }, [settingsInfo]);


    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft/totalSeconds *100);

    const minutes = Math.floor(secondsLeft/60);
    let seconds = secondsLeft%60;
    if (seconds < 10) seconds = '0' + seconds;

    return (
        <div>
            <CircularProgressbar
                value={percentage}
                text={minutes + ':' + seconds}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: mode === 'work' ? '#40534C' : '#D6BD98',
                    textColor: '#D6BD98',
                    trailColor: '#d6d6d6',
                })}/>
                
            <div style={{marginTop: '20px'}}>
                {isPaused ? <Playbutton onClick={()=> {setIsPaused(false);isPausedRef.current=false;}}/>
                 : <Pausebutton onClick={()=> {setIsPaused(true);isPausedRef.current=true;}}/>}
                
            </div>
            <div style={{marginTop: '20px'}}>
                <Settingsbutton onClick={()=> settingsInfo.setShowSettings(true)}/>
            </div>
        </div>   
    );   
}

export default Timer;