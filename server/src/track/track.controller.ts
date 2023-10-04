import { Body, Controller, Get, Post } from '@nestjs/common';
import { TrackService } from './track.service';
import { CreateTrackDTO } from './dto/create-track.dto';

@Controller('/tracks')
export class TrackController {
  constructor(private trackService: TrackService) {}
  @Post()
  create(@Body() dto: CreateTrackDTO) {
    return this.trackService.create(dto);
  }

  @Get()
  getAll(): string {
    return 'Work';
  }

  getOne() {}

  delete() {}
}
