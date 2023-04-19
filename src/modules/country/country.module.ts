import { CacheModule, Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
  imports: [CacheModule.register()],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
