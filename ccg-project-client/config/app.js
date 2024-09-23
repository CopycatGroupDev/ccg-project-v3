import express from 'express';
import app from './express.js';
import _static from './static.js';
import routes from './routes.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from './cors.js';
import 'express-group-routes';

app.use(_static);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors)
for (
	const {
		path,
		method,
		action,
		middlewares : m = []
	} of routes
) app?.[method](path, ...m, action);

export default app;