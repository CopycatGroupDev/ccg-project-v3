import react from '../controllers/reactView.js';
import reactRoutes, { toRedirect } from './reactRoutes.js';

export default [
	...reactRoutes.map(path => ({ path, method : 'get', action : react, })),
	...toRedirect.map(({ oldPath, newPath }) => ({ path : oldPath, method : 'get', action : (req, res) => res.redirect(newPath), })),
	//{ path : '**', method : 'get', action : (req, res) => res.redirect("/"), },
]

///s%C3%A8vres