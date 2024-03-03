import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('HERO_SERVICE')
    private readonly client: ClientKafka,
  ) {}

  @Get('heroes/:id/dragon')
  killDragon(@Param() id: number) {
    return this.client.send<number>('killDragon', id);
  }

  async onModuleInit() {
    this.client.subscribeToResponseOf('killDragon');
    await this.client.connect();
  }

  @MessagePattern('killDragon')
  killDragonReply(@Payload() payload) {
    const { id } = payload;
    const items = [
      { id: 1, name: 'Mythical Sword' },
      { id: 2, name: 'Key to Dungeon' },
      { id: Number.parseInt(id), name: 'Dragon Claw' },
    ];

    return items;
  }

  @MessagePattern('killDragon.reply')
  killDragonReply2(@Payload() items: string[]) {
    console.log('killDragonReply', items);
  }
}
