import AbstractFactory from './AbstractFactory';

export class ComponentFactory extends AbstractFactory {
    get(Class) {
        return this.getClass('Component', Class);
    }
}

const componentFactory = new ComponentFactory();

export default componentFactory;
