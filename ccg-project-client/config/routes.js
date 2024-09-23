import react from '../controllers/reactView.js';

export default [
	{ path : '/', method : 'get', action : react, },
	//{ path : '**', method : 'get', action : (req, res) => res.redirect("/"), },
]

