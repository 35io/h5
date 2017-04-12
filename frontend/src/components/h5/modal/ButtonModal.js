/**
 * Created by sunlong on 2017/3/20.
 */
import BaseModal from './BaseModal';

export default class ButtonModal extends BaseModal {
    constructor(type = 'submit', text = '提交') {
        super();
        this.id = this.generateId();
        this.text = text;
        this.style = {};
        this.type = type;
    }
}
