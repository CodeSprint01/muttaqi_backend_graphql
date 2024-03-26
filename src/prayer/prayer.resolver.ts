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
import { UpdateOfferedPrayerInput } from './dto/update-offeredPrayer.input';
import { UpdatePrayerInput } from './dto/update-prayer.input';

@Resolver(() => OfferedPrayer)
export class PrayerResolver {
  constructor(private readonly prayerService: PrayerService) { }

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

  // update offeredPrayer mutation
  @Mutation(() => OfferedPrayer)
  updateOfferedPrayer(@Args('updateOfferedPrayerInput') updateOfferedPrayerInput: UpdateOfferedPrayerInput) {
    return this.prayerService.updateOfferedPrayer(updateOfferedPrayerInput.id, updateOfferedPrayerInput)
  }

  // remove offeredPrayer
  @Mutation(() => OfferedPrayer)
  removeOfferedPrayer(@Args('id') id: string) {
    return this.prayerService.removeOfferedPrayer(id)
  }


  // create prayer mutation 
  @Mutation(() => Prayer)
  createPrayer(@Args('createPrayerInput') CreatePrayerInput: CreatePrayerInput) {
    return this.prayerService.createPrayer(CreatePrayerInput);
  }


  // find all prayers query
  @Query(() => [Prayer])
  findAllPrayers() {
    return this.prayerService.findAllprayer();
  }

  // findPrayerById query
  @Query(() => Prayer)
  findOneprayer(@Args('id') id: string) {
    return this.prayerService.findOneprayer(id);
  }

  //  update prayer mutation
  @Mutation(() => Prayer)
  updatePrayer(@Args('UpdatePrayerInput') UpdatePrayerInput: UpdatePrayerInput) {
    return this.prayerService.updatePrayer(UpdatePrayerInput.id, UpdatePrayerInput)
  }

  // remove prayer mutation
  @Mutation(() => Prayer)
  removePrayer(@Args('id') id: string) {
    return this.prayerService.removePrayer(id)
  }

  // typeOfWorship mutation
  @Mutation(() => typeOfWorship)
  async typeOfWorship(@Args('createTypeOfWorshipInput') createTypeOfWorshipInput: CreateTypeOfWorshipInput): Promise<typeOfWorship> {
    const createTypeOfWorship = await this.prayerService.createtypeOfWorship(createTypeOfWorshipInput);
    return createTypeOfWorship;
  }

  //  find one id of typeOfWorship
  @Query(() => typeOfWorship)
  async findOneTypeOfWorship(@Args('id') id: string) {
    return this.prayerService.findOneTypeOfWorship(id)
  }

}
