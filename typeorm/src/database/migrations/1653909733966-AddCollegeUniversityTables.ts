import {MigrationInterface, QueryRunner} from "typeorm";

export class AddCollegeUniversityTables1653909733966 implements MigrationInterface {
    name = 'AddCollegeUniversityTables1653909733966'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "graduations" character varying NOT NULL, CONSTRAINT "UQ_52385020e406d0838ffeb4ed7cb" UNIQUE ("cnpj"), CONSTRAINT "PK_ebef1972362002203cdf7a22e0c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "university" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "graduations" character varying NOT NULL, "doctors" character varying NOT NULL, "masters" character varying NOT NULL, CONSTRAINT "UQ_f191b37f51b363b817675453696" UNIQUE ("cnpj"), CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
