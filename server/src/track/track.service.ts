import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Track, TrackDocument } from './schemas/track.shema';
import { Model } from 'mongoose';
import { Comment, CommentDocument } from './schemas/comment.shema';
import { CreateTrackDTO } from './dto/create-track.dto';

@Injectable()
export class TrackService {
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async create(dto: CreateTrackDTO): Promise<Track> {
    const track = await this.trackModel.create({ ...dto, listens: 0 });
    return track;
  }

  async getAll() {}

  async getOne() {}

  async delete() {}
}
