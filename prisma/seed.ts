import { PrismaClient, Platform } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Wiedźmin 3: Dziki Gon',
      price: 259.99,
      language: 'PL',
      pegi: 18,
      description:
        'Gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.',
      mainPicture: 'Witcher3.jpg',
      platform: [
        Platform.PC,
        Platform.PLAYSTATION,
        Platform.XBOX,
        Platform.NINTENDO,
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      name: 'Cyberpunk 2077',
      price: 249.99,
      language: 'PL',
      pegi: 18,
      description:
        'Cyberpunk 2077 to gra RPG akcji osadzona w otwartym świecie, która jest dziełem studia CD Projekt RED, odpowiedzialnego za całą serię Wiedźmin. Tytuł ukazał się na platformach PC, PS4 i XONE.',
      mainPicture: 'Cyberpunk2077.jpg',
      platform: [Platform.PC, Platform.PLAYSTATION, Platform.XBOX],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Grand Theft Auto V',
      price: 149.99,
      language: 'PL',
      pegi: 18,
      description:
        'Grand Theft Auto V to najnowsza odsłona jednej z najpopularniejszych i najbardziej kontrowersyjnych serii w historii gier wideo. Tytuł został wyprodukowany przez studio Rockstar North, a wydaniem zajęła się firma Rockstar Games.',
      mainPicture: 'GTA5.jpg',
      platform: [Platform.PC, Platform.PLAYSTATION, Platform.XBOX],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17255',
      name: 'The Elder Scrolls V: Skyrim',
      price: 99.99,
      language: 'PL',
      pegi: 18,
      description:
        'The Elder Scrolls V: Skyrim to piąta część popularnego cyklu gier RPG studia Bethesda Softworks. Podobnie jak w przypadku poprzednich odsłon, gracz ma okazję wcielić się w bohatera, który ma za zadanie ocalić świat przed zagładą.',
      mainPicture: 'Skyrim.jpg',
      platform: [
        Platform.PC,
        Platform.PLAYSTATION,
        Platform.XBOX,
        Platform.NINTENDO,
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17254',
      name: 'Elden Ring',
      price: 299.99,
      language: 'PL',
      pegi: 18,
      description:
        'Elden Ring to gra akcji RPG osadzona w otwartym świecie, stworzona przez studio FromSoftware, znane z takich tytułów jak Dark Souls czy Sekiro: Shadows Die Twice. Za produkcję odpowiada Hidetaka Miyazaki, a wydawcą jest firma Bandai Namco.',
      mainPicture: 'EldenRing.jpg',
      platform: [Platform.PC, Platform.PLAYSTATION, Platform.XBOX],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17253',
      name: 'Red Dead Redemption 2',
      price: 199.99,
      language: 'PL',
      pegi: 18,
      description:
        'Red Dead Redemption 2 to wyprodukowana przez Rockstar Games gra akcji, stanowiąca trzecią część serii Red Dead. Akcja gry została osadzona w roku 1899, czyli w czasach, w których Dziki Zachód zaczyna powoli znikać.',
      mainPicture: 'RDR2.jpg',
      platform: [Platform.PC, Platform.PLAYSTATION, Platform.XBOX],
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map(({ platform, ...productData }) => {
      return db.product.create({
        data: {
          ...productData,
          platform: {
            create: platform.map((platform) => ({ platform: platform })),
          },
        },
      });
    }),
  );
}

seed();
