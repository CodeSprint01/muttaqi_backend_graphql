import { Injectable } from '@nestjs/common';
import { CreateFamilyMemberInput } from './dto/create-family-member.input';
import { UpdateFamilyMemberInput } from './dto/update-family-member.input';

@Injectable()
export class FamilyMembersService {
  create(createFamilyMemberInput: CreateFamilyMemberInput) {
    return 'This action adds a new familyMember';
  }

  findAll() {
    return `This action returns all familyMembers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} familyMember`;
  }

  update(id: number, updateFamilyMemberInput: UpdateFamilyMemberInput) {
    return `This action updates a #${id} familyMember`;
  }

  remove(id: number) {
    return `This action removes a #${id} familyMember`;
  }
}
