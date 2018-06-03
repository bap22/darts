import { db } from '../config/db';

export const saveToFirebase =  (player, score) => {
    db.ref('/games/' + player).push({
        turn: score
    });
}