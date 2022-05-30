import {MigrationInterface, QueryRunner} from "typeorm";

export class AddIdentifierUsingComposition1653910817901 implements MigrationInterface {
    name = 'AddIdentifierUsingComposition1653910817901'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "graduations" character varying NOT NULL, "year" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, CONSTRAINT "UQ_718da330bdf8d923f94493dd3d5" UNIQUE ("identificationCnpj"), CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "university" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "graduations" character varying NOT NULL, "doctors" character varying NOT NULL, "masters" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, CONSTRAINT "UQ_fa1b26532c34eb34f6b69c1f5de" UNIQUE ("identificationCnpj"), CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
