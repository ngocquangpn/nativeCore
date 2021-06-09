import {Subject} from 'rxjs';

const events = {};

function getSubject(name) {
    if (!events.hasOwnProperty(name)) {
        events[name] = new Subject();
    }
    return events[name];
}

/**
 *
 * @param name
 * @param observer
 * @param tag
 * @returns {*}
 */
export function listen(name, observer, tag = '') {
    const subject = getSubject(name);
    const listener = subject.subscribe(observer);
    if (tag !== '') {
        if (!subject.tags) {
            subject.tags = {};
        }
        if (undefined !== subject.tags[tag]) {
            subject.tags[tag].unsubscribe();
        }
        subject.tags[tag] = listener;
    }
    return listener;
}

/**
 *
 * @param name
 * @param data
 */
export function fire(name, data) {
    getSubject(name).next(data);
}

export default {
    listen, fire,
};


