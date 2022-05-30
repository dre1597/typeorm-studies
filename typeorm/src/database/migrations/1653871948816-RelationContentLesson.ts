import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationContentLesson1653871948816 implements MigrationInterface {
    name = 'RelationContentLesson1653871948816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" ADD "lessonId" uuid`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" UNIQUE ("lessonId")`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_e71f0c6a7cd0bc1516bfd8adb03"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "description" character varying(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_e71f0c6a7cd0bc1516bfd8adb03" UNIQUE ("description")`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_e71f0c6a7cd0bc1516bfd8adb03"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "content" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "UQ_e71f0c6a7cd0bc1516bfd8adb03" UNIQUE ("description")`);
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd"`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "class" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_574dd394846fb85d495d0f77dfd" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonId"`);
    }

}
