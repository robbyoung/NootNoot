var Sound = require('react-native-sound');
Sound.setCategory('Playback');

export function loadSound(filename) {
    return new Sound(filename, Sound.MAIN_BUNDLE, (error) => {
        console.error('Failed to load sound: ' + filename, error);
    });
}

export function playSound(sound) {
    sound.play((success) => {
        if (!success) {
            console.error('Failed to play sound');
        }
    });
}