import 'whatwg-fetch';
import { message } from 'antd';
import common from './common';

export default class Fetch{
    static remote(url, config, success, failed){
        let defaultConfig = {
            method: 'GET'
        };
        let newConfig = Object.assign({}, defaultConfig, config);

        fetch(url, newConfig).then(response => {
            return response.json()
        }).then(result=> {
            if(result.success){
                if(success){
                    success(result.data);
                }
            }else{
                throw new Error(result.msg);
            }
        }).catch(function (error) {
            message.error(error.message);
            if(failed){
                failed(error);
            }
        });
    }

    static get(url, config){
        return new Promise(function(resolve, reject) {
            let newConfig = Object.assign({}, {
                method: 'GET',
                headers: {"Authorization": "Bearer " + common.getAccessToken()}
            }, config);
            Fetch.remote(url, newConfig, resolve, reject);
        });
    }

    static post(url, config){
        return new Promise(function(resolve, reject) {
            let newConfig = Object.assign({}, {
                method: 'POST',
                headers:{"Content-Type": "application/x-www-form-urlencoded", "Authorization": "Bearer " + common.getAccessToken()}
            }, config);
            Fetch.remote(url, newConfig, resolve, reject);
        });
    }

    static del(url, config){
        return new Promise(function(resolve, reject) {
            let newConfig = Object.assign({}, {
                method: 'DELETE',
                headers:{"Authorization": "Bearer " + common.getAccessToken()}
            }, config);
            Fetch.remote(url, newConfig, resolve, reject);
        });
    }

    static postJSON(url, config){
        return new Promise(function(resolve, reject) {
            let newConfig = Object.assign({}, {
                method: 'POST',
                headers:{"Content-Type": "application/json", "Authorization": "Bearer " + common.getAccessToken()}
            }, config);
            Fetch.remote(url, newConfig, resolve, reject);
        });
    }

    static putJSON(url, config){
        return new Promise(function(resolve, reject) {
            let newConfig = Object.assign({}, {
                method: 'PUT',
                headers:{"Content-Type": "application/json", "Authorization": "Bearer " + common.getAccessToken()}
            }, config);
            Fetch.remote(url, newConfig, resolve, reject);
        });
    }
}