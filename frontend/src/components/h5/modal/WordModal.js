/**
 * Created by sunlong on 2017/3/20.
 */
export default class WordModal {
    constructor(text = '请输入文字') {
        this.id = new Date().getTime();
        this.text = text;
    }
}
