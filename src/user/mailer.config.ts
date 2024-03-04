/* eslint-disable prettier/prettier */
import { MailerOptions } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

export const mailerConfig: MailerOptions = {
  transport: {
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your_email@example.com',
      pass: 'your_email_password',
    },
  },
  defaults: {
    from: '"Your App" <your_email@example.com>',
  },
  template: {
    dir: process.cwd() + '/templates/email',
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
};
