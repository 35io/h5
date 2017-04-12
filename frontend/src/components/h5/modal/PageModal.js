/**
 * Created by sunlong on 2017/3/20.
 */
import BaseModal from './BaseModal';

export default class PageModal extends BaseModal {
    constructor() {
        super();
        this.id = this.generateId();
        this.elements = [];
        this.style = {};
    }
}
