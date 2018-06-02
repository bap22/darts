import { db } from '../config/db';

export const addItem =  (item) => {
    db.ref('/test-items').push({
        name: item
    });
}