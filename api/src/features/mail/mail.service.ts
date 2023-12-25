import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { IUser } from '../user/interfaces/user.interface';
import BaseFunctions from 'src/core/base-functions';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async pwForgotSender(user: IUser, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    BaseFunctions._log('Email was sendet to ' + user.email, '200', 'POST', '/api/mail/pw-forgot-send:token');

    await this.mailerService.sendMail({
      to: user.email,
      // from: '"Support Team" <support@example.com>', // override default from
      subject: 'Password reset', // Subject line
      template: './pw_forgot', // `.hbs` extension is appended automatically
      context: {
        // ✏️ filling curly brackets with content
        user: user,
        url,
        site_name: 'JmrService',
        expiration_time: '15 minutes'
      },
    });
  }
}
