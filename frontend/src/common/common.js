var common = {};

common.getAccessToken = function(){
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
    var accessToken = sessionStorage.token;
    if(!accessToken){
        accessToken = getQueryString("access_token");
    }
    return accessToken;
};

export {common as default}