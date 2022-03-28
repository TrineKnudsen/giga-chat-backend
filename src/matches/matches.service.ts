import { Inject, Injectable } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Model } from 'mongoose';
import { Match } from './entities/match.entity';
import { CreateProfileDto } from '../profiles/dto/create-profile.dto';

@Injectable()
export class MatchesService {
  constructor(@Inject('MATCH_MODEL') private matchModel: Model<Match>) {}

  create(createMatchDto: CreateMatchDto) {
    const createdMatch = new this.matchModel(CreateProfileDto);
    return createdProfile.save();
  }

  findAll() {
    return `This action returns all matches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} match`;
  }

  update(id: number, updateMatchDto: UpdateMatchDto) {
    return `This action updates a #${id} match`;
  }

  remove(id: number) {
    return `This action removes a #${id} match`;
  }
}
