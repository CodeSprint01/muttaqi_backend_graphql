import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DrivingLicensesService } from './driving-licenses.service';
import { DrivingLicense } from './entities/driving-license.entity';
import { CreateDrivingLicenseInput } from './dto/create-driving-license.input';
import { UpdateDrivingLicenseInput } from './dto/update-driving-license.input';

@Resolver(() => DrivingLicense)
export class DrivingLicensesResolver {
  constructor(private readonly drivingLicensesService: DrivingLicensesService) {}

  @Mutation(() => DrivingLicense)
  createDrivingLicense(@Args('createDrivingLicenseInput') createDrivingLicenseInput: CreateDrivingLicenseInput) {
    return this.drivingLicensesService.create(createDrivingLicenseInput);
  }

  @Query(() => [DrivingLicense])
  findAllDrivingLicense() {
    return this.drivingLicensesService.findAll();
  }

  @Query(() => DrivingLicense)
  findOneDrivingLicense(@Args('id') id: string) {
    return this.drivingLicensesService.findOne(id);
  }

  @Mutation(() => DrivingLicense)
  updateDrivingLicense(@Args('updateDrivingLicenseInput') updateDrivingLicenseInput: UpdateDrivingLicenseInput) {
    return this.drivingLicensesService.update(updateDrivingLicenseInput.id, updateDrivingLicenseInput);
  }

  @Mutation(() => DrivingLicense)
  removeDrivingLicense(@Args('id') id: string) {
    return this.drivingLicensesService.remove(id);
  }
}
