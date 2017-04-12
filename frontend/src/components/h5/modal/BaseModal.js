/**
 * Created by sunlong on 2017/3/20.
 */
export default class BaseModal {
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    generateId = () => `${new Date().getTime()}${this.getRandomInt(0, 10000)}`
}
