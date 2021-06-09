import AbstractFactory from './AbstractFactory';
import ObjectManager from '../ObjectManager';

class ApiFactory extends AbstractFactory {
    get(Class) {
        return ObjectManager.get(this.getClass('Api', Class));
    }
}

const apiFactory = new ApiFactory();

export default apiFactory;
