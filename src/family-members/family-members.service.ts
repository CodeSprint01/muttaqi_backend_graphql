import { Injectable } from '@nestjs/common';
import { CreateFamilyMemberInput } from './dto/create-family-member.input';
import { UpdateFamilyMemberInput } from './dto/update-family-member.input';
import { CreateFamilyRelationInput } from './dto/create-family-relation.input';
import { InjectRepository } from '@nestjs/typeorm';
import { FamilyMember } from './entities/family-member.entity';
import { Repository } from 'typeorm';
import { FamilyRelation } from './entities/family-relations.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class FamilyMemberService {
  constructor(@InjectRepository(FamilyMember) private familyMemberRepsitory: Repository<FamilyMember>,
    @InjectRepository(FamilyRelation) private familyRelationRepository: Repository<FamilyRelation>,
    private userService: UserService
  ) {

  }
  async create(createFamilyMemberInput: CreateFamilyMemberInput) {
    console.log(
      'ðŸš€ ~ GeneralInformationService ~ create ~ createGeneralInformationInput:',
      createFamilyMemberInput,
    );
    const user = await this.userService.findOne(
      createFamilyMemberInput.userId,
    );
    console.log('ðŸš€ ~ GeneralInformationService ~ create ~ user:', user);
    if (!user) {
      throw new Error('User not found');
    }
    const relation = await this.familyRelationRepository.findOne(
      {
        where: {
          id: createFamilyMemberInput.relationId
        }
      }
    )
    console.log("Realtion" + relation);


    const member = this.familyMemberRepsitory.create({
      cinic: createFamilyMemberInput.cinic,
      name: createFamilyMemberInput.name,
      isAlive: createFamilyMemberInput.isAlive,
      familyRelation: relation,
      user: user,
    })
    console.log(
      'ðŸš€ ~ GeneralInformationService ~ create ~ general:',
      member,
    );
    return await this.familyMemberRepsitory.save(member);
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

  async createRelations(createRelation: CreateFamilyRelationInput) {
    const relation = this.familyRelationRepository.create(createRelation);
    return await this.familyRelationRepository.save(relation);
  }
}
