import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type { config as MigrateMongoConfig } from 'migrate-mongo';

@Injectable()
export class DbMigrationService implements OnModuleInit {
  private readonly dbMigrationConfig: Partial<MigrateMongoConfig.Config>;

  constructor(private readonly configService: ConfigService) {
    this.dbMigrationConfig = {
      mongodb: {
        databaseName: this.configService.getOrThrow('DB_NAME'),
        url: this.configService.getOrThrow('MONGODB_URI'),
      },
      migrationsDir: `${__dirname}/../../migrations`,
      changelogCollectionName: 'changelog',
      migrationFileExtension: '.js',
    };
  }

  async onModuleInit() {
    const { config, database, up } = await import('migrate-mongo');
    config.set(this.dbMigrationConfig);
    const { db, client } = await database.connect();
    await up(db, client);
  }
}
