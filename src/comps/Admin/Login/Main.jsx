import axios from 'axios';
import { AppContext } from '../../../wrappers/Provider';
import { useContext } from 'react';

export default function() {
    const { reloadCookies } = useContext(AppContext);
    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={e => {
                e.preventDefault();
                axios.post(`http://${window.location.hostname}/api/login`, {
                    username: e.target.username.value,
                    password: e.target.password.value
                }, { withCredentials: true }).then(({ data : r }) => {
                    reloadCookies();
                });
            }}>
                <input type="text" name="username" placeholder="Username" />
                <input type="password" name="password" placeholder="Password" autoComplete="off" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}