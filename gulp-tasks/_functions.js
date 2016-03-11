var op = require('openport');
module.exports = function (gulp, plugins) {
    return function () {
        // Check port function, if port is closed(Currently in use) then increment parsed port by 1.
        GLOBAL.checkPort = function(port) {
            op.find({
                    startingPort: port,
                    endingPort: 9000
                },
                function(err, port) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    params.port = port;
                }
            );
        }(params.port);
    };
};
