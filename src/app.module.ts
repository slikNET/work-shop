import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DatabaseService} from "./core/database/database.service";
import {ConfigModule} from "@nestjs/config";
import configuration from "./users/config/configuration";

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true,
        }),
        TypeOrmModule.forRootAsync({
            useClass: DatabaseService,
        }),
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
