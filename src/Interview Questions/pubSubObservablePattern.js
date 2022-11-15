class Observable {
    list = [];

    constructor(topic) {
        this.topic = topic;
    }

    methods(id) {
        return {
            pause: (timer) => {
                this.list.forEach(i => {
                    if (i.id === id) {
                        i.active = false;

                        if (timer) {
                            i.timer = setTimeout(() => this.resume(topic, id), timer);
                        }
                    }

                });

            },
            resume: () => {
                this.list.forEach(i => {
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
            },
            ubsubscribe: () => {
                this.list = this.list.filter(i => i.id !== id);
            }
        };
    }

    subscribe(callback) {
        const id = Math.floor(1000 + Math.random() * 9000);
        const item = { id, callback, active: true, queue: [] };
        this.list = this.list ? [...this.list, item] : [item]

        return this.methods(id);
    }


    publish(message) {
        this.list.forEach(element => {
            element.active ? element.callback(message) : element.queue.push(message);
        });
    }
}

const cricket = new Observable('cricket');
const football = new Observable('Football');

const user1 = cricket.subscribe((message) => { console.log(message) });
const user2 = cricket.subscribe((message) => { console.log(message) });
const user3 = cricket.subscribe((message) => { console.log(message) });


user1.pause()

cricket.publish('Hi')
cricket.publish('Hello world')
