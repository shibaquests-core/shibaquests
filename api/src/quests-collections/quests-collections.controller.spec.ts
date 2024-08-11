import { Test, TestingModule } from '@nestjs/testing';
import { QuestsCollectionsController } from './quests-collections.controller';

describe('QuestsCollectionsController', () => {
  let controller: QuestsCollectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuestsCollectionsController],
    }).compile();

    controller = module.get<QuestsCollectionsController>(QuestsCollectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
