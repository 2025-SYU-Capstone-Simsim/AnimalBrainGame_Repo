if (!cc.sys.isNative) {
    window.io = window.io || require("socket.io-client");
    window.socket = io("https://smartzoo.shop");// 서버 주소에 맞게 수정
}
