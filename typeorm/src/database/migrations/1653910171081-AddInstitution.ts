import {MigrationInterface, QueryRunner} from "typeorm";

export class AddInstitution1653910171081 implements MigrationInterface {
    name = 'AddInstitution1653910171081'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "institution" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "graduations" character varying, "year" integer, "doctors" character varying, "masters" character varying, "type" character varying NOT NULL, CONSTRAINT "UQ_c9af99711dccbeb22b20b24cca8" UNIQUE ("cnpj"), CONSTRAINT "PK_f60ee4ff0719b7df54830b39087" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_829e3ef7ee5db8aed1a64a2545" ON "institution" ("type") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "IDX_829e3ef7ee5db8aed1a64a2545"`);
        await queryRunner.query(`DROP TABLE "institution"`);
    }

}
