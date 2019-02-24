import {loadSound} from '../soundHandler';

export type Pingu = {
	name: string,
    imageSource: any,
    sound: any,
};

var urlPrefix = 'C:\\Users\\robby\\Documents\\NootNoot\\images\\';

export const pingus = [{
        name: 'Standard Pingu',
        imageSource: require(urlPrefix + 'hello-pingu.png'),
        sound: loadSound('noot_noot.mp3'),
    }, {
        name: 'Loud Pingu',
        imageSource: require(urlPrefix + 'loud-pingu.jpg'),
        sound: loadSound('noot_noot.mp3'),
    }, {
        name: 'Young Pingu',
        imageSource: require(urlPrefix + 'young-pingu.jpg'),
        sound: loadSound('noot_noot.mp3'),
    }, {
        name: 'Happy Pingu',
        imageSource: require(urlPrefix + 'happy-pingu.jpg'),
        sound: loadSound('noot_noot.mp3'),
    }];