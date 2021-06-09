import AbstractFactory from "./AbstractFactory";
import ObjectManager from "../ObjectManager";

export class ServiceFactory extends AbstractFactory {
    get(Class) {
        return ObjectManager.get(this.getClass('Service', Class));
    }
}

const serviceFactory = new ServiceFactory();

export default serviceFactory;
