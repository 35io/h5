const URL = 'http://localhost:9080/api';

const STATIC = false;

let API_URL = {

};

if (!STATIC) {
    API_URL = {
        activity: {
            save: `${URL}/activity`,
        },
    };
}

export { API_URL as default };
