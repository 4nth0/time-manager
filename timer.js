/**
 * [Timer description]
 * @param {int} interval [description]
 * @param {function} method   [description]
 *
 * @todo deport to Utils
 */
var Timer = function(interval, method){

    var cycle, playing = false;

    return {
        /**
         * [start description]
         * @return {object} Instance of the current object
         */
        start   : function(){

            playing = true

            cycle = function(){

                // console.log('""" Timer::start > cycle() """');

                method();
                if(playing) setTimeout(cycle, (interval * 1000));
            };

            cycle();

            return this;
        },

        /**
         * [stop description]
         * @return {object} Instance of the current object
         */
        stop    : function(){
            playing = false;

            return this;
        }
    };
}

module.exports = Timer;