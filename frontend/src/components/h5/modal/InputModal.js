/**
 * Created by sunlong on 2017/3/20.
 */
import BaseModal from './BaseModal';

export default class InputModal extends BaseModal {
    constructor(type = 'text', placeholder = '') {
        super();
        this.id = this.generateId();
        this.placeholder = placeholder;
        this.style = {};
        this.className = '';
        this.type = type;
    }
}
