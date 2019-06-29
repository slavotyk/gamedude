import {signIn, signOut} from './authActions';

describe('signIn', () => {
    it('calls firebase signInWithEmailAndPassword() method with provided credentials', () => {
        const email = 'email';
        const password = 'password';
        const dispatch = () => {};
        const getState = () => {};
        const spy = jest.fn(
            () => Promise.resolve()
        );
        const getFirebase = () => ({
            auth: () => ({
                signInWithEmailAndPassword: spy
            })
        });

        const action = signIn({ email, password });
        action(dispatch, getState, { getFirebase });

        expect(spy).toHaveBeenCalledWith(email, password);
    });
});