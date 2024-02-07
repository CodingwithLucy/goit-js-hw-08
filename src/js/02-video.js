const Player = require('@vimeo/player').default;
const _ = require('lodash.throttle');

/*import Player from '@vimeo/player';
import throttle from 'lodash.throttle';*/

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('play the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

/*const onPlay = _.throttle(function(data) {
    return {
        duration: 61.857,
        percent: 0.049,
        seconds: 3.034,
    };
}, 1000);*/

const onPlay = _.throttle(function() {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem('videoplayer-current-time', seconds);
    });
}, 1000);

player.on('timeupdate', onPlay);

/*player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});*/

window.addEventListener('load', function() {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(savedTime).catch(function(error) {
            console.error('Error setting current time:', error);
        });
    }
});