import { Module } from '@nestjs/common';
import { QuestsCollectionsController } from './quests-collections/quests-collections.controller';
import { PrismaService } from './prisma.service';

// IMPORTS - START
// IMPORTS - END

@Module({
  imports: [
    // MODULE IMPORTS - START
    // MODULE IMPORTS - END
  ],
  controllers: [
    // MODULE CONTROLLERS - START
    QuestsCollectionsController,
    // MODULE CONTROLLERS - END
  ],
  providers: [
    // MODULE PROVIDERS - START
    PrismaService,
    // MODULE PROVIDERS - END
  ],
})
export class AppModule {}
