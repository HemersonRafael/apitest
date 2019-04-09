const Path = require('path');
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')
const {host, post, user, pass} = require('../config/mail.json')

var transport = nodemailer.createTransport({
    host,
    port,
    auth: {user, pass},
  });

transport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: Path.resolve('./src/resources/mail'),
    extName: '.html',
}));

module.exports = transport;