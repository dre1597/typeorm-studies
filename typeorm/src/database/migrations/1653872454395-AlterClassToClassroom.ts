import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterClassToClassroom1653872454395 implements MigrationInterface {
    name = 'AlterClassToClassroom1653872454395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "classroom" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "duration" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_321e9ff53b2d2b374d6e8d3df8e" UNIQUE ("name"), CONSTRAINT "PK_729f896c8b7b96ddf10c341e6ff" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "classroom"`);
    }

}
