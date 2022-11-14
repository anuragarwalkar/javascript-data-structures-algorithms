
class Observable {
    list = {

    };

    subscribe(topic, id, callback) {
        const item = { id, callback, active: true, queue: [] };
        this.list[topic] = this.list[topic] ? [...this.list[topic], item] : [item]
    }

    pause(topic, id, timer) {
        this.list[topic].forEach(i => {
            if (i.id === id) {
                i.active = false;

                if (timer) {
                    i.timer = setTimeout(() => this.resume(topic, id), timer);
                }
            }

        });

    }

    resume(topic, id) {
        this.list[topic].forEach(i => {
            if (i.timer) {
                clearTimeout(i.timer);
            }

            if (i.id === id) {
                i.active = true;
            }

            if (i.queue.length) {
                i.queue.forEach(j => i.callback(j));
            }
        });
    }

    ubsubscribe(topic, id) {
        this.list[topic] = this.list[topic].filter(i => i.id !== id);
    }

    publish(topic, message) {
        this.list[topic].forEach(element => {
            element.active ? element.callback(message) : element.queue.push(message);
        });
    }
}

const instance = new Observable()


instance.subscribe('cricket', 'anu', (message) => { console.log(message) })
instance.subscribe('cricket', 'shree', (message) => { console.log(message) })
instance.subscribe('cricket', 'janu', (message) => { console.log(message) })

instance.publish('cricket', 'world');
instance.pause('cricket', 'janu', 1000);
instance.publish('cricket', 'sometimeLater');

setTimeout(() => {
    instance.publish('cricket', 'hello2');
    instance.publish('cricket', 'some');
}, 5000);
