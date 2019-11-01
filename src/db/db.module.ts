import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '../config/config.service';
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  NODE_ENV,
  REDIS_HOST,
  REDIS_PORT,
} from '../consts';
import { Notification } from '../notification/notification.entity';
import { Role } from '../access-control/role/roles.entity';

export interface DbOptions {
  entities: any[];
  usingAccessControl: boolean;
}

@Module({})
export class DbModule {
  static forRoot(params: DbOptions): DynamicModule {
    return {
      module: DbModule,
      imports: [
        TypeOrmModule.forRootAsync({
          inject: [ConfigService],
          useFactory: (config: ConfigService): TypeOrmModuleOptions => {
            const envs = config.getAll();
            const shouldCache = envs[REDIS_HOST] !== undefined;
            const isProduction = envs[NODE_ENV] === 'production';
            const entities = [...params.entities, Notification];
            if (params.usingAccessControl) entities.push(Role);
            // const type =

            const options: TypeOrmModuleOptions = {
              entities,
              type: 'postgres',
              host: envs[DB_HOST],
              database: envs[DB_DATABASE],
              username: envs[DB_USER],
              password: envs[DB_PASSWORD],
              port: parseInt(envs[DB_PORT], 10),
              maxQueryExecutionTime: 3000,
              synchronize: false,
              logging: isProduction ? ['error'] : 'all',
              cache: shouldCache && {
                type: 'redis',
                options: {
                  port: envs[REDIS_PORT],
                  host: envs[REDIS_HOST],
                },
                duration: 30000,
              },
            };
            return options;
          },
        }),
      ],
    };
  }
}
