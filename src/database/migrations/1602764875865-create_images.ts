import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1602764875865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'uuid',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage',
          columnNames: ['orphanage_id'],
          referencedTableName: 'orphanages',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images');
  }
}
