/**
 * Created by sunlong on 2017/3/20.
 */
import BaseModal from './BaseModal';

export default class WordModal extends BaseModal {
    constructor(text = '双击输入文字') {
        super();
        this.id = this.generateId();
        this.text = text;
        this.style = {};
        this.className = '';
        this.contenteditable = false;
    }
}
