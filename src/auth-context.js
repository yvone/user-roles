import React, { useState, useContext } from 'react';
// import axios from 'axios';

const AuthContext = React.createContext();

export function AuthProvider(props) {
    const [user, setUser] = useState(null);

    async function getUser() {
        if (getToken()) {
            // MOCKED PROCESS
            // change role from operator to admin to try new things
            await setUser({
                username: 'test@example.com',
                name: 'Joe Doe',
                role: 'operator',
            });
            return user;

            // IDEAL PROCESS
            // decode token info to set user
            // await setUser(jwt(getToken()));
        } else {
            return null;
        }
    }

    async function login({ username, password }) {
        // MOCKED PROCESS
        const user = { username, token: "abc" };
        window.localStorage.setItem('__auth_token__', user.token);
        setUser({
            username: user.username,
            name: 'Joe Doe',
            role: 'operator',
        });
        return user.token;

        // IDEAL PROCESS
        // axios({
        //     url: 'api-url.com/login',
        //     method: 'post',
        //     body: { username, password },
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then((data) => {
        //     window.localStorage.setItem('__auth_token__', data.token);
        //     setUser(jwt(data.token));
        //     return true;
        // })
    }

    async function register(userData) {
        const user = { ...userData.username, token: "abc" };
        window.localStorage.setItem('__auth_token__', user.token);
        setUser({
            username: user.username,
            name: 'Joe Doe',
            role: 'operator',
        });
        return user.token;

        // axios({
        //     url: 'api-url.com/sign-up',
        //     method: 'post',
        //     body: userData,
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // }).then((data) => {
        //     window.localStorage.setItem('__auth_token__', data.token);
        //     setUser(jwt(data.token));
        //     return true;
        // })
    }

    async function logout() {
        window.localStorage.removeItem('__auth_token__');
        setUser(null);
    }

	function getToken() {
        return window.localStorage.getItem('__auth_token__')
    }

    const value = {
        user,
        getUser,
        getToken,
        login,
        logout,
        register,
	};
    return <AuthContext.Provider value={value} {...props} />;
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error(`useAuth must be used within the AuthProvider`)
    };
    return context;
}

export default AuthContext;
