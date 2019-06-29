import authReducer from './authReducer';

describe('authReducer', () => {
    it('returns new state with authError when action.type is LOGIN_ERROR', () => {
        const state = {};
        const action = {
            type: 'LOGIN_ERROR'
        };

        const newState = authReducer(state, action);

        expect(newState.authError).toEqual('Login failed');

    });

    it('returns new state with authError when action.type is LOGIN_SUCCESS', ()=> {
        const state = {};
        const action = {
            type: 'LOGIN_SUCCESS'
        };

        const newState = authReducer(state, action);

        expect(newState.authError).toEqual(null);
    });

    it('returns new state with authError when action.type is SIGNOUT_SUCCESS', ()=> {
        const state = {};
        const action = {
            type: 'SIGNOUT_SUCCESS'
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual(state);
    });

    it('returns new state with authError when action.type is SIGNUP_SUCCESS', ()=> {
        const state = {};
        const action = {
            type: 'SIGNUP_SUCCESS'
        };

        const newState = authReducer(state, action);

        expect(newState.authError).toEqual(null);
    });

    it('returns new state with authError when action.type is SIGNUP_ERROR', ()=> {
        const state = {};
        const action = {
            type: 'SIGNUP_ERROR',
            err: {
                message: "error"
            }
        };

        const newState = authReducer(state, action);

        expect(newState.authError).toEqual(action.err.message);
    });

    it('returns same state when action.type is other', () => {
        const state = {};
        const action = {
            type: 'OTHER',
            payload: 'something'
        };

        const newState = authReducer(state, action);

        expect(newState).toEqual(state);
    });

    it('throws an error when action is not defined', () => {
        expect(
            () => authReducer({})
        ).toThrow();
    });
});