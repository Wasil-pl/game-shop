import { PrismaClient, Platform } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17258',
      name: 'Wiedźmin 3: Dziki Gon',
      language: 'PL',
      pegi: 18,
      description:
        'Gra action RPG, stanowiąca trzecią część przygód Geralta z Rivii. Podobnie jak we wcześniejszych odsłonach cyklu, Wiedźmin 3: Dziki Gon bazuje na motywach twórczości literackiej Andrzeja Sapkowskiego, jednak nie jest bezpośrednią adaptacją żadnej z jego książek.',
      mainPicture: 'Witcher3.jpg',
      inStock: 10,
      platform: [
        { platform: Platform.PC, price: 159.99 },
        { platform: Platform.PLAYSTATION, price: 259.99 },
        { platform: Platform.XBOX, price: 259.99 },
        { platform: Platform.NINTENDO, price: 259.99 },
      ],
      pictures: [
        'Witcher3_1.jpg',
        'Witcher3_2.jpg',
        'Witcher3_3.jpg',
        'Witcher3_4.jpg',
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17257',
      name: 'Cyberpunk 2077',
      language: 'PL',
      pegi: 18,
      description:
        'Cyberpunk 2077 to gra RPG akcji osadzona w otwartym świecie, która jest dziełem studia CD Projekt RED, odpowiedzialnego za całą serię Wiedźmin. Tytuł ukazał się na platformach PC, PS4 i XONE.',
      mainPicture: 'Cyberpunk2077.jpg',
      inStock: 7,
      platform: [
        { platform: Platform.PC, price: 159.99 },
        { platform: Platform.PLAYSTATION, price: 259.99 },
        { platform: Platform.XBOX, price: 259.99 },
      ],
      pictures: [
        'Cyberpunk2077_1.jpg',
        'Cyberpunk2077_2.jpg',
        'Cyberpunk2077_3.jpg',
        'Cyberpunk2077_4.jpg',
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17256',
      name: 'Grand Theft Auto V',
      language: 'PL',
      pegi: 18,
      description:
        'Grand Theft Auto V to najnowsza odsłona jednej z najpopularniejszych i najbardziej kontrowersyjnych serii w historii gier wideo. Tytuł został wyprodukowany przez studio Rockstar North, a wydaniem zajęła się firma Rockstar Games.',
      mainPicture: 'GTA5.jpg',
      inStock: 3,
      platform: [
        { platform: Platform.PC, price: 159.99 },
        { platform: Platform.PLAYSTATION, price: 259.99 },
        { platform: Platform.XBOX, price: 259.99 },
      ],
      pictures: [
        'GTA5_1.jpg',
        'GTA5_2.jpg',
        'GTA5_3.jpg',
        'GTA5_4.jpg',
        'GTA5_5.jpg',
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17255',
      name: 'The Elder Scrolls V: Skyrim',
      language: 'PL',
      pegi: 18,
      description:
        'The Elder Scrolls V: Skyrim to piąta część popularnego cyklu gier RPG studia Bethesda Softworks. Podobnie jak w przypadku poprzednich odsłon, gracz ma okazję wcielić się w bohatera, który ma za zadanie ocalić świat przed zagładą.',
      mainPicture: 'Skyrim.jpg',
      inStock: 0,
      platform: [
        { platform: Platform.PC, price: 99.99 },
        { platform: Platform.PLAYSTATION, price: 159.99 },
        { platform: Platform.XBOX, price: 159.99 },
        { platform: Platform.NINTENDO, price: 259.99 },
      ],
      pictures: ['Skyrim_1.jpg', 'Skyrim_2.jpg', 'Skyrim_3.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17254',
      name: 'Elden Ring',
      language: 'PL',
      pegi: 18,
      description:
        'Elden Ring to gra akcji RPG osadzona w otwartym świecie, stworzona przez studio FromSoftware, znane z takich tytułów jak Dark Souls czy Sekiro: Shadows Die Twice. Za produkcję odpowiada Hidetaka Miyazaki, a wydawcą jest firma Bandai Namco.',
      mainPicture: 'EldenRing.jpg',
      inStock: 1,
      platform: [
        { platform: Platform.PC, price: 159.99 },
        { platform: Platform.PLAYSTATION, price: 259.99 },
        { platform: Platform.XBOX, price: 259.99 },
      ],
      pictures: [
        'EldenRing_1.jpg',
        'EldenRing_2.jpg',
        'EldenRing_3.jpg',
        'EldenRing_4.jpg',
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17253',
      name: 'Red Dead Redemption 2',
      language: 'PL',
      pegi: 18,
      description:
        'Red Dead Redemption 2 to wyprodukowana przez Rockstar Games gra akcji, stanowiąca trzecią część serii Red Dead. Akcja gry została osadzona w roku 1899, czyli w czasach, w których Dziki Zachód zaczyna powoli znikać.',
      mainPicture: 'RDR2.jpg',
      inStock: 5,
      platform: [
        { platform: Platform.PC, price: 159.99 },
        { platform: Platform.PLAYSTATION, price: 259.99 },
        { platform: Platform.XBOX, price: 259.99 },
      ],
      pictures: ['RDR2_1.jpg', 'RDR2_2.jpg', 'RDR2_3.jpg', 'RDR2_4.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17252',
      name: 'Assassins Creed Valhalla',
      language: 'PL',
      pegi: 18,
      description: `Assassin's Creed Valhalla to kolejna odsłona popularnego cyklu sandboksowych gier akcji studia Ubisoft, nad którą pieczę sprawuje ekipa z kanadyjskiego oddziału dewelopera (m.in. Assassin's Creed IV: Black Flag, Assassin's Creed: Rogue, Assassin's Creed: Unity, Assassin's Creed: Syndicate oraz Assassin's Creed: Odyssey).`,
      mainPicture: 'ACValhalla.jpg',
      inStock: 2,
      platform: [
        { platform: Platform.PC, price: 129.99 },
        { platform: Platform.PLAYSTATION, price: 209.99 },
        { platform: Platform.XBOX, price: 209.99 },
      ],
      pictures: [
        'ACValhalla_1.jpg',
        'ACValhalla_2.jpg',
        'ACValhalla_3.jpg',
        'ACValhalla_4.jpg',
      ],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17251',
      name: 'Baldurs Gate 3',
      language: 'PL',
      pegi: 18,
      description:
        'Baldur’s Gate III to trzecia odsłona kultowej serii cRPG, która zadebiutowała w 1998 roku. Za produkcję gry odpowiada studio Larian, znane z takich tytułów jak Divinity: Original Sin czy Divinity: Original Sin II.',
      mainPicture: 'BaldursGate3.jpg',
      inStock: 4,
      platform: [{ platform: Platform.PC, price: 189.99 }],
      pictures: ['BaldursGate3_1.jpg', 'BaldursGate3_2.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17250',
      name: 'FIFA 22',
      language: 'PL',
      pegi: 18,
      description:
        'FIFA 22 to kolejna odsłona popularnego cyklu gier piłkarskich, nad którym pieczę sprawuje studio EA Sports. Produkcja została wydana przez firmę Electronic Arts i jest dostępna na platformach PC, PS4, PS5, XONE i XSX.',
      mainPicture: 'FIFA22.jpg',
      inStock: 6,
      platform: [
        { platform: Platform.PC, price: 159.99 },
        { platform: Platform.PLAYSTATION, price: 259.99 },
        { platform: Platform.XBOX, price: 259.99 },
      ],
      pictures: ['FIFA22_1.jpg', 'FIFA22_2.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17249',
      name: 'Mario Kart 8 Deluxe',
      language: 'ENG',
      pegi: 3,
      description:
        'Mario Kart 8 Deluxe to wyścigowa gra zręcznościowa, stanowiąca rozwinięcie wydanej w 2014 roku gry Mario Kart 8. Produkcja została wydana przez firmę Nintendo i jest dostępna na platformie Nintendo Switch.',
      mainPicture: 'MarioKart8.jpg',
      inStock: 8,
      platform: [{ platform: Platform.NINTENDO, price: 259.99 }],
      pictures: ['MarioKart8_1.jpg', 'MarioKart8_2.jpg', 'MarioKart8_3.jpg'],
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17248',
      name: 'The Legend of Zelda: Breath of the Wild',
      language: 'ENG',
      pegi: 12,
      description:
        'The Legend of Zelda: Breath of the Wild to wydana na platformę Switch gra akcji należąca do cyklu The Legend of Zelda. Tytuł został wyprodukowany przez japońską firmę Nintendo, która jest również wydawcą gry.',
      mainPicture: 'Zelda.jpg',
      inStock: 0,
      platform: [{ platform: Platform.NINTENDO, price: 259.99 }],
      pictures: ['Zelda_1.jpg', 'Zelda_2.jpg', 'Zelda_3.jpg'],
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map(({ platform, pictures, ...productData }) => {
      return db.product.create({
        data: {
          ...productData,
          platform: {
            create: platform,
          },
          pictures: {
            create: pictures.map((url) => ({ url: url })),
          },
        },
      });
    }),
  );
}

seed();
