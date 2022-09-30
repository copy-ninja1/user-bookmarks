import { PrismaService } from './../src/prisma/prisma.service';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import { Test } from '@nestjs/testing';

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  afterAll(() => {
    app.close();
  });

  describe('Auth', () => {
    describe('SignUp', () => {});

    describe('Sigin', () => {});
  });

  describe('User', () => {
    describe('Get me', () => {});

    describe('Edit User', () => {});
  });

  describe('BookMarks', () => {
    describe('Create bookmarks', () => {});

    describe('get bookmarks', () => {});
    describe('get bookmark by id', () => {});
    describe('Edit bookmark', () => {});
    describe('Delete bookmark', () => {});
  });
});
