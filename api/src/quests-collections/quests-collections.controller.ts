import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateQuestsCollectionDto } from './create-quests-collections.dto';

@Controller('quests-collections')
export class QuestsCollectionsController {
  constructor(private prismaService: PrismaService) {}

  @Get('/featured')
  findAll() {
    return this.prismaService.questCollections.findMany({
      take: 10,
    });
  }

  @Post()
  create(@Body() data: CreateQuestsCollectionDto) {
    return this.prismaService.questCollections.create({
      data,
    });
  }

  @Get('/:address')
  findOne(address: string) {
    return this.prismaService.questCollections.findUnique({
      where: {
        address,
      },
    });
  }
}
