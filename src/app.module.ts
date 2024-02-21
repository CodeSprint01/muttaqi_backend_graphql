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

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
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

UserModule,

GeneralInformationModule,

FamilyInfromationModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
