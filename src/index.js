import React from 'react';
import ReactDOM from 'react-dom';
import ReactMemGame from './ReactMemGame';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

const store = configureStore({
    fieldIsLocked: false,
    timerIsActive: false,
    secondsForTimer: 0,
    isButtonEnabled: false,
    isDifficultyVisible: true,
    difficulties: [
        {
            title: "Easy",
            value: 12
        },
        {
            title: "Medium",
            value: 20
        },
        {
            title: "Hard",
            value: 30
        }
    ],
});

ReactDOM.render(
    <Provider store={store} >
        <ReactMemGame />
    </Provider>,
    document.getElementById('root'));

serviceWorker.register();
