/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PrayerService } from './prayer.service';
import { OfferedPrayer } from './entities/offered-prayer.entity';
import { CreateOfferedPrayerInput } from './dto/create-offeredPrayer.input';
import { CreatePrayerInput } from './dto/create-prayer.input';
import { Prayer } from './entities/prayers-entity';
import { typeOfWorship } from './entities/typeOfWorship-entity';
import { CreateTypeOfWorshipInput } from './dto/create-typeOfWorship.input';

@Resolver(() => OfferedPrayer)
export class PrayerResolver {
  constructor(private readonly prayerService: PrayerService) { }

  // {  OFFERED PRAYER MODULE }

  // offeredPrayer mutation
  @Mutation(() => OfferedPrayer)
  createOfferdPrayer(@Args('createOfferedPrayerInput') CreateOfferedPrayerInput: CreateOfferedPrayerInput) {
    return this.prayerService.create(CreateOfferedPrayerInput);
  }

  // find all offeredPrayers query
  @Query(() => [OfferedPrayer])
  findAllOfferedPrayer() {
    return this.prayerService.findAllOfferedPrayer();
  }

  // findOfferedPrayerById query
  @Query(() => OfferedPrayer)
  findOfferedPrayer(@Args('Id') Id: string): Promise<OfferedPrayer> {
    return this.prayerService.findOfferedPrayerById(Id);
  }

  // {  PRAYER MODULE }

  // create prayer mutation 
  @Mutation(() => Prayer)
  createPrayer(@Args('createPrayerInput') CreatePrayerInput: CreatePrayerInput) {
    return this.prayerService.createPrayer(CreatePrayerInput);
  }


  // find all prayers query
  @Query(() => [Prayer], { name: 'prayer' })
  findAll() {
    return this.prayerService.findAllprayer();
  }

  // findPrayerById query
  @Mutation(() => Prayer, { name: 'prayer' })
  findOneprayer(@Args('id') id: string) {
    return this.prayerService.findOneprayer(id);
  }

  // typeOfWorship mutation
  @Mutation(() => typeOfWorship)
  async typeOfWorship(@Args('createTypeOfWorshipInput') createTypeOfWorshipInput: CreateTypeOfWorshipInput): Promise<typeOfWorship> {
    const createTypeOfWorship = await this.prayerService.createtypeOfWorship(createTypeOfWorshipInput);
    return createTypeOfWorship;
  }

  // find typeOfWorship id query
@Query(() => typeOfWorship)
findOneTypeId(@Args('id') id: string){
  return this.prayerService.findOneTypeId(id)
}

}
