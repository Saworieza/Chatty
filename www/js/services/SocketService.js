(function(){

    angular.module('starter')
    .service('SocketService', ['socketFactory', SocketService]);

    function SocketService(socketFactory){
        return socketFactory({
        	//change to net link when deployed to your url
            ioSocket: io.connect('http://localhost:3000')

        });
    }
})();