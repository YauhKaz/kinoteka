import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitDates1638252729902 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO \`kinoteka\`.\`category\` (title, description) VALUES 
        ('Comedy', 'A comedy film is a category of film which emphasizes humor'),
        ('Thriller', 'Thriller is a genre of fiction, having numerous, often overlapping subgenres'),
        ('Action', 'Action film is a film genre in which the protagonist or protagonists are thrust into a series of events that typically include violence, extended fighting, physical feats, rescues and frantic chases'),
        ('Horror', 'A horror film is one that seeks to elicit fear or disgust in its audience for entertainment purposes'),
        ('Drama', 'Drama is a category of narrative fiction (or semi-fiction) intended to be more serious than humorous in tone')`,
    );
    await queryRunner.query(
      `INSERT INTO \`kinoteka\`.\`actor\` (name, dob, sex, photoUrl) VALUES 
        ('Thomas Hanks', '1956-09-07', 'male', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/330px-Tom_Hanks_TIFF_2019.jpg'),
        ('Morgan Freeman', '1937-06-01', 'male', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Morgan_Freeman_Deauville_2018.jpg/375px-Morgan_Freeman_Deauville_2018.jpg'),
        ('Uma Thurman', '1970-04-29', 'female', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Uma_Thurman_2014_%28cropped%29.jpg/350px-Uma_Thurman_2014_%28cropped%29.jpg'),
        ('James Carrey', '1962-01-17', 'male', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jim_Carrey_2008.jpg/375px-Jim_Carrey_2008.jpg'),
        ('Susan Weaver', '1956-07-09', 'female', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Sigourney_Weaver_by_Gage_Skidmore_4.jpg/375px-Sigourney_Weaver_by_Gage_Skidmore_4.jpg')`,
    );
    await queryRunner.query(
      `INSERT INTO \`kinoteka\`.\`movie\` (title, description, createAt, updateAt, year) VALUES 
        ('The Green Mile', 'В тюрьме для смертников появляется заключенный с божественным даром. Мистическая драма по роману Стивена Кинга', '1998-01-01', '1999-01-01', 1999),
        ('The Shawshank Redemption', 'Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга', '1993-01-01', '1994-01-01', 1994),
        ('Pulp Fiction', 'Несколько связанных историй из жизни бандитов. Шедевр Квентина Тарантино, который изменил мировое кино', '1993-01-01', '1994-01-01', 1994),
        ('The Truman Show', 'Благополучный страховой агент обнаруживает, что он — герой реалити-шоу. Джим Керри в пророческой антиутопии', '1997-01-01', '1998-01-01', 1998),
        ('Alien', 'Группа космонавтов высаживается на неизвестной планете и знакомится с ксеноморфом. Шедевр Ридли Скотта', '1978-01-01', '1979-01-01', 1979),
        ('Aliens', 'Эллен Рипли снова в логове ксеноморфов. Вторая часть фантастической экшен-франшизы с «Оскаром» за спецэффекты', '1985-01-01', '1986-01-01', 1986),
        ('Forrest Gump', 'Полувековая история США глазами чудака из Алабамы. Абсолютная классика Роберта Земекиса с Томом Хэнксом', '1993-01-01', '1994-01-01', 1994),
        ('Приключения Шерлока Холмса и доктора Ватсона: Собака Баскервилей', 'Ватсон вынужден жить с эксцентричным клиентом в доме на болотах. Блестящая советская экранизация Конан Дойла', '1980-01-01', '1981-01-01', 1981),
        ('Джентльмены удачи', 'Воспитатель детсада внедряется в банду матерых рецидивистов. Евгений Леонов в разошедшейся на цитаты комедии', '1970-01-01', '1971-01-01', 1971),
        ('Back to the Future', 'Безумный ученый и 17-летний оболтус тестируют машину времени и наводят шороху в 1950-х. Классика кинофантастики', '1984-01-01', '1985-01-01', 1985),
        ('Sen to Chihiro no kamikakushi', 'Девочка должна спасти своих родителей в мире духов. Шедевр Хаяо Миядзаки, фаворит анимационных рейтингов мира', '2000-01-01', '2001-01-01', 2001),
        ('Klaus', 'Klaus', '2018-01-01', '2019-01-01', 2019),
        ('The Matrix', 'Хакер Нео узнает, что его мир — виртуальный. Выдающийся экшен, доказавший, что зрелищное кино может быть умным', '1998-01-01', '1999-01-01', 1999),
        ('Schindlers List', 'История немецкого промышленника, спасшего тысячи жизней во время Холокоста. Драма Стивена Спилберга', '1992-01-01', '1993-01-01', 1993),
        ('Inception', 'Профессиональные воры внедряются в сон наследника огромной империи. Фантастический боевик Кристофера Нолана', '2009-01-01', '2010-01-01', 2010),
        ('Lock, Stock and Two Smoking Barrels', 'Четверке друзей из Лондона нужно где-то найти 500 000 фунтов. Культовая черная комедия, дебют Гая Ричи', '1997-01-01', '1998-01-01', 1998),
        ('Intouchables', 'Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си', '2010-01-01', '2011-01-01', 2011),
        ('Coco', 'Юный музыкант Мигель попадает в мир мертвых. Трогательная история о любви без границ, получившая два «Оскара»', '2016-01-01', '2017-01-01', 2017),
        ('Interstellar', 'Фантастический эпос про задыхающуюся Землю, космические полеты и парадоксы времени. «Оскар» за спецэффекты', '2013-01-01', '2014-01-01', 2014),
        ('Иван Васильевич меняет профессию', 'Иван Грозный отвечает на телефон, пока его тезка-пенсионер сидит на троне. Советский хит о липовом государе', '1972-01-01', '1973-01-01', 1973)`,
    );
    await queryRunner.query(
      `INSERT INTO \`kinoteka\`.\`image\` (isMain, url, movieId) VALUES 
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4057c4b8-8208-4a04-b169-26b0661453e3/300x450', 1),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/300x450', 2),
        (0, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/87b5659d-a159-4224-9bff-d5a5d109a53b/300x450', 3),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/4fbb8130-163b-47e5-8e8c-dacc0478a4a0/300x450', 4),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/14af6019-b2fe-4e1e-bee5-334d9e472d94/300x450', 5),
        (0, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/cc6ba1ce-a005-4e39-b913-06e8c866817c/300x450', 6),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/3560b757-9b95-45ec-af8c-623972370f9d/300x450', 7),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/430042eb-ee69-4818-aed0-a312400a26bf/300x450', 8),
        (0, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/1a170eea-da02-40c1-a750-91c59d56e1a6/300x450', 9),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/b327ada7-d790-49ae-8b24-374497a0980c/300x450', 10),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/8ab9a119-dd74-44f0-baec-0629797483d7/300x450', 11),
        (0, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/6492653f-11d5-4087-a1d2-ec7a74f161d3/300x450', 12),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/300x450', 13),
        (0, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/6e11a16e-c9e7-491f-9162-01098a7d8dd9/300x450', 14),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/eed1de3a-5400-43b3-839e-22490389bf54/300x450', 15),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/279f9f19-6a29-4fae-935e-54ddf80c653b/300x450', 16),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/f08ba921-02dd-4d19-9c15-757e040335d6/300x450', 17),
        (0, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/218102a7-96be-4d7e-8029-815de0f37cfa/300x450', 18),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/73cf2ed0-fd52-47a2-9e26-74104360786a/300x450', 19),
        (1, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/64becb5d-e7b9-4a56-8c71-5008294a854a/300x450', 20)`,
    );
    await queryRunner.query(
      `INSERT INTO \`kinoteka\`.\`movie_categories_category\` (movieId, categoryId) VALUES (1, 1), (1, 3), (2, 2), (3, 3), (4, 4), (5, 5),
        (6, 1), (7, 2), (8, 3), (9, 4), (10, 5), (11, 1), (12, 2), (13, 3), (14, 4), (15, 5), (16, 1), (17, 2), (18, 3), (19, 4), (20, 5)`,
    );
    await queryRunner.query(
      `INSERT INTO \`kinoteka\`.\`movie_actors_actor\` (movieId, actorId) VALUES (1, 1), (2, 2), (3, 3), (4, 4), (5, 5),
      (6, 1), (7, 2), (8, 3), (9, 4), (10, 5), (11, 1), (12, 2), (13, 3), (14, 4), (15, 5), (16, 1), (17, 2), (18, 3), (19, 4), (20, 5)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DELETE FROM \`kinoteka\`.\`category\` WHERE id = 1`,
    );
    await queryRunner.query(
      `DELETE FROM \`kinoteka\`.\`category\` WHERE id = 2`,
    );
    await queryRunner.query(
      `DELETE FROM \`kinoteka\`.\`category\` WHERE id = 3`,
    );
    await queryRunner.query(
      `DELETE FROM \`kinoteka\`.\`category\` WHERE id = 4`,
    );
    await queryRunner.query(
      `DELETE FROM \`kinoteka\`.\`category\` WHERE id = 5`,
    );
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`actor\` WHERE id = 1`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`actor\` WHERE id = 2`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`actor\` WHERE id = 3`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`actor\` WHERE id = 4`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`actor\` WHERE id = 5`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 1`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 2`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 3`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 4`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 5`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 7`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 8`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 9`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 10`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 11`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 12`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 13`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 14`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 15`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 16`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 17`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 18`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 19`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`image\` WHERE id = 20`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 1`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 2`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 3`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 4`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 5`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 6`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 7`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 8`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 9`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 10`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 11`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 12`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 13`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 14`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 15`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 16`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 17`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 18`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 19`);
    await queryRunner.query(`DELETE FROM \`kinoteka\`.\`movie\` WHERE id = 20`);
  }
}
