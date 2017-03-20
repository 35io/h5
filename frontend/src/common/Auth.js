/**
 * Created by sunlong on 16/8/3.
 */
import {browserHistory} from "react-router";
import "antd/lib/message/style/index.css";

var Base64 = require('js-base64').Base64;

export default class Auth{
    check(){
        if(!sessionStorage.user){
            browserHistory.push('/user/login');
        }
    }

    logout(){
        sessionStorage.clear();
        browserHistory.push('/user/login');
    }

    login(token, reload=false){
        sessionStorage.token = token;
        sessionStorage.user = Base64.decode(token.split(".")[1]);
        if(reload){
            location.href = "/dashboard.html";
        }else{
            browserHistory.push('/dashboard.html');
        }
    }
}