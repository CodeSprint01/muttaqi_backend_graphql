import { PrayerService } from './../prayer/prayer.service';
import { Injectable } from '@nestjs/common';
import { CreateOfferedfastInput } from './dto/create-offeredfast.input';
import { UpdateOfferedfastInput } from './dto/update-offeredfast.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Offeredfast } from './entities/offeredfast.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class OfferedfastsService {
  constructor(
    @InjectRepository(Offeredfast)
    private readonly offeredFastRepository: Repository<Offeredfast>,
    private userService: UserService,
    private prayerService: PrayerService,
    
  ){}
  async create(createOfferedfastInput: CreateOfferedfastInput){
    const { userId, typeOfWorshipId } = createOfferedfastInput;
  
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new Error('User does not exist');
    }
  
    const typeOfWorship = await this.prayerService.findOneTypeId(typeOfWorshipId);
    if (!typeOfWorship) {
      throw new Error('Type of worship does not exist');
    }
  
    const fast= this.offeredFastRepository.create(
      
      {
        typeOfWorship: typeOfWorship,
        User: user
      }
    );
    return this.offeredFastRepository.save(fast)
  }
  

  async findAll(): Promise<Offeredfast[]> {
    const findAllOfferedFast = await this.offeredFastRepository.find()
    return findAllOfferedFast;
  }

  async findOne(id: number): Promise<Offeredfast> {
    return this.offeredFastRepository.findOne({where: {id}});
  }

  update(id: string, updateOfferedfastInput: UpdateOfferedfastInput) {
    return `This action updates a #${id} offeredfast`;
  }

  remove(id: number) {
    return `This action removes a #${id} offeredfast`;
  }
}
