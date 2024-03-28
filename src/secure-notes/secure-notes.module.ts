import { Module } from '@nestjs/common';
import { SecureNotesService } from './secure-notes.service';
import { SecureNotesResolver } from './secure-notes.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VualtModule } from 'src/vualt/vualt.module';
import { SecureNote } from './entities/secure-note.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SecureNote]),
    VualtModule
  ],
  providers: [SecureNotesResolver, SecureNotesService],
})
export class SecureNotesModule { }
