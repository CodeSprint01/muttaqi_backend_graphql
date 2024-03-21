import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { CreateAssetInput } from './dto/create-asset.input';
import { UpdateAssetInput } from './dto/update-asset.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Asset } from './entities/asset.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AssetsService {
  @InjectRepository(Asset)
  private readonly assetRepository: Repository<Asset>
  create(createAssetInput: CreateAssetInput) {
    const createAssets = this.assetRepository.create(createAssetInput)
    return this.assetRepository.save(createAssets);
  }

  findAll():Promise<Asset[]> {
    return this.assetRepository.find();
  }

  findOne(id: string) {
    return this.assetRepository.findOne({where: {id}});
  }

  update(id: string, updateAssetInput: UpdateAssetInput) {
    const findId = this.assetRepository.findOne({where: {id}})
    if(!findId){
      throw new Error('assets id is required')
    }
    Object.assign(findId, updateAssetInput)
    return this.assetRepository.save(findId)
  }

  remove(id: string) {
    return this.assetRepository.delete(id);
  }
}
