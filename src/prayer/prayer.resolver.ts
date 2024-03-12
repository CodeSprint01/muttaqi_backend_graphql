/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { PrayerService } from './prayer.service';
import { offeredPrayer } from './entities/offered-prayer.entity';
import { CreateOfferedPrayerInput } from './dto/create-offeredPrayer.input';
import { CreatePrayerInput } from './dto/create-prayer.input';
import { Prayer } from './entities/prayers-entity';
import { typeOfWorship } from './entities/typeOfWorship-entity';
import { CreateTypeOfWorshipInput } from './dto/create-typeOfWorship.input';

@Resolver(() => offeredPrayer)
export class PrayerResolver {
  constructor(private readonly prayerService: PrayerService) { }

  // {  OFFERED PRAYER MODULE }

  // offeredPrayer mutation
  @Mutation(() => offeredPrayer)
  createOfferdPrayer(@Args('createOfferedPrayerInput') CreateOfferedPrayerInput: CreateOfferedPrayerInput) {
    return this.prayerService.create(CreateOfferedPrayerInput);
  }

  // find all offeredPrayers query
  @Query(() => [offeredPrayer])
  findAllOfferedPrayer() {
    return this.prayerService.findAllOfferedPrayer();
  }

  // findOfferedPrayerById query
  @Query(() => offeredPrayer)
  findOfferedPrayer(@Args('Id') Id: string): Promise<offeredPrayer> {
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
    const createTypeOfWorship = await this.prayerService.typeOfWorship(createTypeOfWorshipInput);
    return createTypeOfWorship;
  }

}
