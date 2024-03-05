/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { GeneralInformationModule } from './general-information/general-information.module';
import { FamilyInfromationModule } from './family-infromation/family-infromation.module';
import { AuthModule } from './auth/auth.module';
// import { MailerModule } from '@nestjs-modules/mailer';
// import { mailerConfig } from './user/mailer.config';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    context: ({ req, res }) => ({ req, res }),
  }),
  TypeOrmModule.forRoot({

    type: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'muttaqi',
    password: '',
    username: 'root',
    entities: ['dist/**/*.entity{.ts, .js}'],
    synchronize: true,
    autoLoadEntities: true,
  }),

  // MailerModule.forRoot(mailerConfig),

    UserModule,

    GeneralInformationModule,

    FamilyInfromationModule,

    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
