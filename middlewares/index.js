const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const xss = require('xss-clean');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const morgan = require('morgan');


module.exports = [
    express.json({ limit: '2mb' }),
    express.urlencoded({ extended: true }),
    cookieParser(),
    compression(),
    cors({
        origin: true,
        methods: ['HEAD', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowedHeaders: [
            'x-now-id',
            'x-now-trace',
            'x-powered-by',
            'Origin',
            'Accept',
            'Content-Type',
            'Set-Cookie',
            'Authorization',
        ],
        credentials: true,
    }),
    helmet(),
    mongoSanitize(),
    morgan('tiny'),
    xss(),
];