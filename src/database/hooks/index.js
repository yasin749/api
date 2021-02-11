module.exports = {
    init: function (database) {
        // @todo should be automatic
        require('./connectionHooks')(database);
        require('./defineHooks')(database);
        require('./createHooks')(database);
        require('./findHooks')(database);
        require('./queryHooks')(database);
        require('./saveHooks')(database);
        require('./updateHooks')(database);
    }
}
