/**
 * Created by sunlong on 2017/3/20.
 */
export default class WordModal {
    constructor(text = '双击输入文字') {
        this.id = new Date().getTime();
        this.text = text;
        this.style = {};
        this.contenteditable = false;
    }
}
