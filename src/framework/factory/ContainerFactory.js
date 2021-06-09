import AbstractFactory from "./AbstractFactory";

export class ContainerFactory extends AbstractFactory{
    get(Class) {
        return this.getClass('Container', Class);
    }
}

const containerFactory = new ContainerFactory();

export default containerFactory;
