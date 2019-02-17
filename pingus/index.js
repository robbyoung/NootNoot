export type Pingu = {
	name: string,
    onTap: () => void,
    imageSource: any,
};

export const pingus = [{
        name: 'Standard Pingu',
        onTap: () => console.error('Noot Noot!'),
        imageSource: require('C:\\Users\\robby\\Documents\\NootNoot\\images\\hello-pingu.png'),
    }, {
        name: 'Loud Pingu',
        onTap: () => console.error('NOOT NOOT!'),
        imageSource: require('C:\\Users\\robby\\Documents\\NootNoot\\images\\loud-pingu.jpg'),
    }, {
        name: 'Young Pingu',
        onTap: () => console.error('noot, noot'),
        imageSource: require('C:\\Users\\robby\\Documents\\NootNoot\\images\\young-pingu.jpg'),
    }, {
        name: 'Happy Pingu',
        onTap: () => console.error('noot noot :)'),
        imageSource: require('C:\\Users\\robby\\Documents\\NootNoot\\images\\happy-pingu.jpg'),
    }];