import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { SecureNotesService } from './secure-notes.service';
import { SecureNote } from './entities/secure-note.entity';
import { CreateSecureNoteInput } from './dto/create-secure-note.input';
import { UpdateSecureNoteInput } from './dto/update-secure-note.input';

@Resolver(() => SecureNote)
export class SecureNotesResolver {
  constructor(private readonly secureNotesService: SecureNotesService) {}

  @Mutation(() => SecureNote)
  createSecureNote(@Args('createSecureNoteInput') createSecureNoteInput: CreateSecureNoteInput) {
    return this.secureNotesService.create(createSecureNoteInput);
  }

  @Query(() => [SecureNote])
  findAllSecureNote() {
    return this.secureNotesService.findAll();
  }

  @Query(() => SecureNote)
  findOneSecureNote(@Args('id') id: string) {
    return this.secureNotesService.findOne(id);
  }

  @Mutation(() => SecureNote)
  updateSecureNote(@Args('updateSecureNoteInput') updateSecureNoteInput: UpdateSecureNoteInput) {
    return this.secureNotesService.update(updateSecureNoteInput.id, updateSecureNoteInput);
  }

  @Mutation(() => SecureNote)
  removeSecureNote(@Args('id') id: string) {
    return this.secureNotesService.remove(id);
  }
}
