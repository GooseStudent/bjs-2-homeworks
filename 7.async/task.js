class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = undefined;
	}

	addClock(time, callback) {
		this.alarmCollection.push(time);
		this.alarmCollection.push(callback);

		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.some(alarm => alarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			time: time,
			callback: callback,
			canCall: true
		})
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(
			alarm => alarm.time !== time);
	}

	getCurrentFormattedTime(time) {
		let now = Dare();
		let hours = now.getHours();
		let minutes = this.getMinutes();
		return hours + ":" + minute;
	}

	start() {
		if (!this.intervalId) {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(alarm => {
					if (alarm.time === this.getCurrentFormattedTime()) {
						alarm.canCall = false;
						alarm.callback();
					}
				});
			}, 1000);
		} else {
			return;
		}

	}

	stop() {
        clearInterval (this.intervalId);
        this.intervalId = null;
	}

    resetAllCalls () {
        this.alarmCollection.forEach(alarm =>
            alarm.canCall = true
        )
    }
    
    clearAlarms () {
        this.stop ();
        this.alarmCollection = [];
    }
}