import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationStudentClassroom1653875024233 implements MigrationInterface {
    name = 'RelationStudentClassroom1653875024233'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student_classrooms_classroom" ("studentId" uuid NOT NULL, "classroomId" uuid NOT NULL, CONSTRAINT "PK_37a4622e506bd01afe2ad0cfc78" PRIMARY KEY ("studentId", "classroomId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d42b239f7cdfff630e75f4027f" ON "student_classrooms_classroom" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d6c94528fd650ce7cfcf98e235" ON "student_classrooms_classroom" ("classroomId") `);
        await queryRunner.query(`ALTER TABLE "student_classrooms_classroom" ADD CONSTRAINT "FK_d42b239f7cdfff630e75f4027f4" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_classrooms_classroom" ADD CONSTRAINT "FK_d6c94528fd650ce7cfcf98e235a" FOREIGN KEY ("classroomId") REFERENCES "classroom"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student_classrooms_classroom" DROP CONSTRAINT "FK_d6c94528fd650ce7cfcf98e235a"`);
        await queryRunner.query(`ALTER TABLE "student_classrooms_classroom" DROP CONSTRAINT "FK_d42b239f7cdfff630e75f4027f4"`);
        await queryRunner.query(`DROP INDEX "IDX_d6c94528fd650ce7cfcf98e235"`);
        await queryRunner.query(`DROP INDEX "IDX_d42b239f7cdfff630e75f4027f"`);
        await queryRunner.query(`DROP TABLE "student_classrooms_classroom"`);
    }

}
