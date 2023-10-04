import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://moskvicheveg:admin@cluster0.hj7ihbn.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
  ],
})
export class AppModule {}
