import produce from "immer";
import { saveToFirebase } from '../services/FirebaseService';
import { AlertIOS } from 'react-native';

const handleActions = (actionsMap, defaultState) => (
    state = defaultState,
    { type, payload }
) =>
    produce(state, draft => {
        const action = actionsMap[type];
        action && action(draft, payload);
    });

export let initialState = {
    view: "Home",
    error: "",
    total: 0,
    currentScore: "",
    currentPlayer: "p1",
    p1: { score: 0, name: "p1" },
    p2: { score: 0, name: "p2" },
    p3: { score: 0, name: "p3" },
    p4: { score: 0, name: "p4" },
    history: []
};

export default handleActions(
    {
        ['SCORE_CHANGE']: (state, payload) => {
            let prevScore = Number(state.currentScore);

            if (prevScore + payload <= 180) {
                state.currentScore += String(payload);
                return;
            }

            state.error = "The possible  highest score is 180";
        },

        ['SCORE_SUBMIT']: state => {

            
            let currentPlayer = state.currentPlayer;
            let nextScore = state[currentPlayer].score - Number(state.currentScore);
            
            saveToFirebase(currentPlayer, state.currentScore);

            if (!state.currentScore) {
                return;
            }

            if (nextScore === 0) {
                state.winner = state[currentPlayer].name;
                state.view = "menu";
                return;
            }

            if (nextScore < 0) {
                state.history.push("Bust");
                state.currentPlayer = currentPlayer === "p1" ? "p2" : "p1";
                return;
            }

            state[currentPlayer] = { ...state[currentPlayer], score: nextScore };
            state.history.push(state.currentScore);
            state.currentPlayer = currentPlayer === "p1" ? "p2" : "p1";
        },

        ['SCORE_CLEAR']: state => {
            state.error = "";
            state.currentScore = "";
        },

        ['SCORE_UNDO']: state => {
            if (state.currentScore) {
                state.error = "";
                state.currentScore = "";
                return;
            }

            let { history } = state;

            if (history.length === 0) {
                return;
            }

            let lastDraw = history[history.length - 1];

            if (lastDraw === "Bust") {
                lastDraw = 0;
            } else {
                lastDraw = Number(lastDraw);
            }

            let prevPlayer = state.currentPlayer === "p1" ? "p2" : "p1";

            state.history = history.slice(0, history.length - 1);
            state[prevPlayer] = {
                ...state[prevPlayer],
                score: state[prevPlayer].score + lastDraw
            };
            state.currentPlayer = prevPlayer;
        },

        ['GAME_START']: state => {
            state.view = "game";
            state.p1.score = state.total;
            state.p2.score = state.total;
            state.history = [];
            state.currentPlayer = "p1";
            state.currentScore = "";
        },

        ['GAME_START_NEW']: state => {
            state.p1.score = state.total;
            state.p2.score = state.total;
        },

        ['GAME_SET_NAME']: (state, { player, name }) => {
            state[player].name = name;
        },

        ['GAME_SET_TOTAL']: (state, payload) => {
            state.total = payload;
        },

        ['GAME_RESET_WINNER']: state => {
            state.winner = null;
        }
    },
    initialState
);