import extension from '../Extension';

export default class AbstractFactory {
    getClass(type, Class) {
        return extension.get(type, Class);
    }
}
