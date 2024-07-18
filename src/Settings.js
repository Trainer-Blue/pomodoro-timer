import ReactSlider from 'react-slider';
import './slider.css';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';

function Settings() {
    const settingsInfo = useContext(SettingsContext);
    return (
        <div style={{textAlign: 'left'}}>
            <label>
                work minutes: {settingsInfo.workMinutes}
            </label>
            <ReactSlider 
                className={'slider'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.workMinutes}
                onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                min={1}
                max={120}
            />
            <label>
                break minutes: {settingsInfo.breakMinutes}
            </label>
            <ReactSlider 
                className={'slider break'}
                thumbClassName={'thumb'}
                trackClassName={'track'}
                value={settingsInfo.breakMinutes}
                onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                min={1}
                max={120}
            />
        </div>
    );
}

export default Settings;