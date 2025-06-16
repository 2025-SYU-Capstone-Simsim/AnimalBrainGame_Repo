if (!cc.sys.isNative) {
    window.io = window.io || require("socket.io-client");
    window.socket = io("http://43.201.75.158:3000"); // 서버 주소에 맞게 수정
}
