export type Pingu = {
	name: string,
	onTap: () => void,
};

export const pingus = [{
        name: 'Standard Pingu',
        onTap: () => console.error('Noot Noot!'),
    }, {
        name: 'Angry Pingu',
        onTap: () => console.error('NOOT NOOT!'),
    }, {
        name: 'Calm Pingu',
        onTap: () => console.error('noot, noot'),
    }];