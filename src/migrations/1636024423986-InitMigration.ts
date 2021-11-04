import {MigrationInterface, QueryRunner} from "typeorm";

export class InitMigration1636024423986 implements MigrationInterface {
    name = 'InitMigration1636024423986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`mytestdb\`.\`image\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isMain\` tinyint NOT NULL, \`url\` varchar(255) NOT NULL, \`movieId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mytestdb\`.\`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mytestdb\`.\`movie\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createAt\` datetime NOT NULL, \`updateAt\` datetime NOT NULL, \`year\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mytestdb\`.\`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`dob\` datetime NOT NULL, \`sex\` varchar(255) NOT NULL, \`photoUrl\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mytestdb\`.\`movie_categories_category\` (\`movieId\` int NOT NULL, \`categoryId\` int NOT NULL, INDEX \`IDX_0d43cf9426be5b4db28f207179\` (\`movieId\`), INDEX \`IDX_32d9eb1bb6f1e2bee2411b7226\` (\`categoryId\`), PRIMARY KEY (\`movieId\`, \`categoryId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`mytestdb\`.\`movie_actors_actor\` (\`movieId\` int NOT NULL, \`actorId\` int NOT NULL, INDEX \`IDX_992f9af300d8c96c46fea4e541\` (\`movieId\`), INDEX \`IDX_65be8ded67af2677acfd19854c\` (\`actorId\`), PRIMARY KEY (\`movieId\`, \`actorId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`image\` ADD CONSTRAINT \`FK_f9ca629edc61a86c266d14eb8df\` FOREIGN KEY (\`movieId\`) REFERENCES \`mytestdb\`.\`movie\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_categories_category\` ADD CONSTRAINT \`FK_0d43cf9426be5b4db28f2071794\` FOREIGN KEY (\`movieId\`) REFERENCES \`mytestdb\`.\`movie\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_categories_category\` ADD CONSTRAINT \`FK_32d9eb1bb6f1e2bee2411b7226c\` FOREIGN KEY (\`categoryId\`) REFERENCES \`mytestdb\`.\`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_actors_actor\` ADD CONSTRAINT \`FK_992f9af300d8c96c46fea4e5419\` FOREIGN KEY (\`movieId\`) REFERENCES \`mytestdb\`.\`movie\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_actors_actor\` ADD CONSTRAINT \`FK_65be8ded67af2677acfd19854c2\` FOREIGN KEY (\`actorId\`) REFERENCES \`mytestdb\`.\`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_actors_actor\` DROP FOREIGN KEY \`FK_65be8ded67af2677acfd19854c2\``);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_actors_actor\` DROP FOREIGN KEY \`FK_992f9af300d8c96c46fea4e5419\``);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_categories_category\` DROP FOREIGN KEY \`FK_32d9eb1bb6f1e2bee2411b7226c\``);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`movie_categories_category\` DROP FOREIGN KEY \`FK_0d43cf9426be5b4db28f2071794\``);
        await queryRunner.query(`ALTER TABLE \`mytestdb\`.\`image\` DROP FOREIGN KEY \`FK_f9ca629edc61a86c266d14eb8df\``);
        await queryRunner.query(`DROP INDEX \`IDX_65be8ded67af2677acfd19854c\` ON \`mytestdb\`.\`movie_actors_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_992f9af300d8c96c46fea4e541\` ON \`mytestdb\`.\`movie_actors_actor\``);
        await queryRunner.query(`DROP TABLE \`mytestdb\`.\`movie_actors_actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_32d9eb1bb6f1e2bee2411b7226\` ON \`mytestdb\`.\`movie_categories_category\``);
        await queryRunner.query(`DROP INDEX \`IDX_0d43cf9426be5b4db28f207179\` ON \`mytestdb\`.\`movie_categories_category\``);
        await queryRunner.query(`DROP TABLE \`mytestdb\`.\`movie_categories_category\``);
        await queryRunner.query(`DROP TABLE \`mytestdb\`.\`actor\``);
        await queryRunner.query(`DROP TABLE \`mytestdb\`.\`movie\``);
        await queryRunner.query(`DROP TABLE \`mytestdb\`.\`category\``);
        await queryRunner.query(`DROP TABLE \`mytestdb\`.\`image\``);
    }

}
