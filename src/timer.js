import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Playbutton from './playbutton';
import Pausebutton from './pausebuton';
import Settingsbutton from './Settingsbutton';


function Timer() {
    return (
        <div>
            <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#40534C',
                    textColor: '#D6BD98',
                    trailColor: '#d6d6d6',
                })}/>
                
            <div style={{marginTop: '20px'}}>
                <Playbutton />
                <Pausebutton />
            </div>
            <div style={{marginTop: '20px'}}>
                <Settingsbutton />
            </div>
        </div>   
    );   
}

export default Timer;