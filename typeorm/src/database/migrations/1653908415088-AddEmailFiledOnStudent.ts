import {MigrationInterface, QueryRunner} from "typeorm";

export class AddEmailFiledOnStudent1653908415088 implements MigrationInterface {
    name = 'AddEmailFiledOnStudent1653908415088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "UQ_a56c051c91dbe1068ad683f536e" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "UQ_91fd8559eee7a8817008c4cde59" UNIQUE ("key")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "UQ_91fd8559eee7a8817008c4cde59"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "UQ_a56c051c91dbe1068ad683f536e"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
