import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateQuestsCollectionDto } from './create-quests-collections.dto';

@Controller('quests-collections')
export class QuestsCollectionsController {
  constructor(private prismaService: PrismaService) {}

  @Get('/')
  async findAll() {
    const collections = await this.prismaService.questCollections.findMany({
      take: 11,
    });
    const featured = collections[0];
    const recent = collections.slice(1);
    return { featured, recent };
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
