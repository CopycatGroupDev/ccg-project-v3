import react from '../controllers/reactView.js';
import users from '../models/users.js';
import crypt from './crypt.js';
import reactRoutes, { toRedirect } from './reactRoutes.js';

export default [
	...reactRoutes.map(path => ({ path, method : 'get', action : react, })),
	...toRedirect.map(({ oldPath, newPath }) => ({ path : oldPath, method : 'get', action : (req, res) => res.redirect(newPath), })),
	{ path : '/api/cookies', method : 'post', action : async (req, res) => { res.send(req.cookies); }},
	{ path : '/api/login', method : 'post', action : async (req, res) => {
		const { username, password } = req.body;
		const user = await users.findOne({ username, password : crypt(password) });

		if (user) {
			//res.json({ success : true });
			res.cookie('ccg-user', user._id, { maxAge : 1000 * 60 * 60 * 24 * 365 });
			res.json({ success : true });
		} else {
			res.json({ success : false });
		}
	}},
	{ path : '/api/logout', method : 'post', action : async (req, res) => {
		res.clearCookie('ccg-user');
		res.json({ success : true });
	}},
	{ path : '**', method : 'get', action : (req, res) => res.redirect("/"), },
]