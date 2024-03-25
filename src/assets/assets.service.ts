import { Injectable } from '@nestjs/common';
import { CreateAssetInput } from './dto/create-asset.input';
import { UpdateAssetInput } from './dto/update-asset.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AssetsService {
  @InjectRepository(Asset)
  private readonly assetRepository: Repository<Asset>
  private userService: UserService

  async create(createAssetInput: CreateAssetInput) {
    const {userId, ...otherFields} = createAssetInput
    const finUserId = await this.userService.findOne(userId)
    if (!finUserId){
      throw new Error('user id does not exist')
    }
    const createAssets = this.assetRepository.create({
      user: finUserId,
      ...otherFields
    })
    return this.assetRepository.save(createAssets);
  }

  findAll():Promise<Asset[]> {
    return this.assetRepository.find();
  }

  findOne(id: string) {
    return this.assetRepository.findOne({where: {id}});
  }

  async update(id: string, updateAssetInput: UpdateAssetInput) {
    const findId = await this.assetRepository.findOne({where: {id}})
    if(!findId){
      throw new Error('assets id is required')
    }
    Object.assign(findId, updateAssetInput)
    return await this.assetRepository.save(findId)
  }

  remove(id: string) {
    return this.assetRepository.delete(id);
  }
}
