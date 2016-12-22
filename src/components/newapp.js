/**
 * Created by Chris-Campbell on 12/21/2016.
 */
import React, { Component } from 'react';

class NewApp extends Component {
    constructor(props) {
        super(props);

        const currentTime = new Date();
        this.state = {
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        };

        this.setTimer();
    }

    setTimer() {
        setTimeout(this.updateClock.bind(this), 1000);
    }

    updateClock() {
        const currentTime = new Date();
        this.setState({
            hours: currentTime.getHours(),
            minutes: currentTime.getMinutes(),
            seconds: currentTime.getSeconds(),
            ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
        },this.setTimer);

    }

    render() {
        const {hours, minutes, seconds, ampm} = this.state;
        return (
            <div className="clock">
                {
                    hours == 0 ? 12 :
                        (hours > 12) ?
                            hours - 12 : hours
                }:{
                minutes > 9 ? minutes : `0${minutes}`
            }:{
                seconds > 9 ? seconds : `0${seconds}`
            } {ampm}
            </div>
        )
    }

}

export default NewApp;