import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer() {
    return (
        <div>
            <CircularProgressbar
                value={60}
                text={`60%`}
                styles={buildStyles({
                    textSize: '16px',
                    pathColor: '#677D6A',
                    textColor: '#D6BD98',
                    trailColor: '#d6d6d6',
                })}/>
            <div>
                
            </div>
        </div>   
    );   
}

export default Timer;