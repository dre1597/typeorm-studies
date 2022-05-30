import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationClassroomLesson1653873181239 implements MigrationInterface {
    name = 'RelationClassroomLesson1653873181239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" ADD "classroomId" uuid`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_8b6d946af64cde1e7408012f6d6" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_8b6d946af64cde1e7408012f6d6"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "classroomId"`);
    }

}
