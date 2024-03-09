import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SwaggerModule } from '@nestjs/swagger';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { dataSourceFactory } from './db/db.source';
import { KafkaModule } from './kafka/kafka.module';
import { LlmModule } from './llm/llm.module';
import entities from './entities';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities,
        synchronize: true,
        autoLoadEntities: true,
      }),
      dataSourceFactory,
    }),
    SwaggerModule,
    DbModule,
    KafkaModule,
    LlmModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
