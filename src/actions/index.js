import { createAction } from "redux-actions";

export const onScoreChange = createAction('SCORE_CHANGE', score => score);
export const onScoreSubmit = createAction('SCORE_SUBMIT');
export const onScoreClear = createAction('SCORE_CLEAR');
export const onScoreUndo = createAction('SCORE_UNDO');

export const onGameStart = createAction('GAME_START');
export const onGameStartNew = createAction('GAME_START_NEW');
export const onGameSetName = createAction('GAME_SET_NAME', (player, name) => ({
  player,
  name
}));
export const onGameSetTotal = createAction('GAME_SET_TOTAL', total => total);
export const onGameResetWinner = createAction('GAME_RESET_WINNER');