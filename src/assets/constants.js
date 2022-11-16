import { IoTvOutline, IoRadioOutline } from 'react-icons/io5';
import rossiya1 from './img/channels/rossiya1.webp';
import rossiya24 from './img/channels/rossiya24.webp';
import sts from './img/channels/sts.png';
import tnt from './img/channels/tnt.webp';
import rentv from './img/channels/rentv.png';
import pervyi from './img/channels/pervyi.png';
import ntv from './img/channels/ntv.png';
import zvezda from './img/channels/zvezda.png';
import match from './img/channels/match.png';
import kultura from './img/channels/kultura.webp';
import planeta from './img/channels/rtrpl.png';
import che from './img/channels/che.png';
import tvc from './img/channels/tvc.png';

export const channels = [
  { titleDisplay: false,
    image: tnt,
    urlId: 'tnt',
    title: 'THT',
    streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1',
    descr: {
      one: 'российский федеральный телеканал, входящий в ТОП-5 наиболее популярных каналов в России. Начал свое вещание в 1998 году. Слоган – «Почувствуй нашу Зиму»',
      two: 'телевизионные сериалы, художественные фильмы, ток-шоу развлекательной тематики.',
      three: 'в начале 2015 года среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) телеканала ТНТ составляла 12,7% от общего количества телезрителей.',
    },
  },
  { titleDisplay: false, image: sts, urlId: 'sts', title: 'СТС', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'федеральный телеканал, основанный в декабре 1996 года. Это первый сетевой телевизионный канал России, в концепцию развития которого изначально был заложен принцип партнерства с региональными телевизионными станциями. В настоящее время канал является собственностью крупнейшей независимой медиакомпании «СТС Медиа», являющейся дочерним предприятием известного меди холдинга «Modern Times Group» из Швеции. Сегодня СТС позиционирует свою концепцию как «классического развлекательного телеканала».', two: '', three: '' } },
  { titleDisplay: false, image: pervyi, urlId: 'pervyi', title: 'Первый', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: '«Первый канал» считается наиболее популярным и любимым русскоязычным каналом в мире. Начал вещание в 1995 году. До 2002 года носил название «Общественное Российское Телевидение» (ОРТ).', two: 'развлекательные шоу, документальные передачи, новости, аналитические передачи, кино- и телепремьеры, спортивные программы.', three: 'среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) «Первого канала» в России в начале 2015 года составляла 13,3% от общего количества телезрителей.' } },
  { titleDisplay: false, image: ntv, urlId: 'ntv', title: 'НТВ', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'общероссийский круглосуточный телеканал. Начал вещание в 1993 году. Также вещает на страны СНГ и Балтии, Западную Европу, Ближний Восток, США и Канаду, Израиль, Австралию, Новую Зеландию и Океанию.', two: 'развлекательные шоу, документальные передачи, новостные выпуски, аналитические передачи, кино- и телепремьеры, спортивные программы.', three: 'в начале 2015 года среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) телеканала «НТВ» составляла 10,7% от общего количества телезрителей.' } },
  { titleDisplay: false, image: rentv, urlId: 'rentv', title: 'РЕН ТВ', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: '', two: '', three: '' } },
  { titleDisplay: false, image: zvezda, urlId: 'zvezda', title: 'Звезда', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'всероссийский государственный круглосуточный телеканал. Основан в 2005 году. Полное название телеканала: «Национальная телевизионная компания „Звезда“». Слоган – «Мы вместе».', two: 'информационные и аналитические передачи, посвященные истории, культуре, науке и спорту, познавательные и образовательные программы на темы армии, оружия и др.', three: 'в начале 2015 года среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) телеканала «Звезда» составляла 2,3% от общего количества телезрителей.' } },
  { titleDisplay: false, image: rossiya1, urlId: 'rossiya1', title: 'Россия-1', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'телеканал «Россия 1» начал вещание в 1991 году и с тех пор неизменно входит в число наиболее популярных каналов РФ. Покрывает своим вещанием практически всю территорию страны.', two: 'информационные программы, многосерийные телефильмы, ток-шоу, телевикторины, полнометражные художественные и документальные фильмы, трансляции спортивных и общественно-политических событий, аналитические передачи.', three: 'среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) телеканала «Россия 1» в России в начале 2015 года составляла 13,8% от общего количества телезрителей, что делало его лидером среди российских каналов.' } },
  { titleDisplay: false, image: rossiya24, urlId: 'rossiya24', title: 'Россия-24', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'телеканал «Россия 24» начал вещание в 2006 году. До 2009 года назывался «Вести». Вещает на территории России, стран СНГ, Европейского союза.', two: 'выпуски новостей, информационно-аналитические программы.', three: 'среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) телеканала «Россия 24» в России в начале 2015 года составляла 3,5% от общего количества телезрителей.' } },
  { titleDisplay: false, image: match, urlId: 'match', title: 'МАТЧ ТВ', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'российский федеральный телеканал о спорте и здоровом образе жизни. Начал вещание в ноябре 2015 года. Создан в соответствии с указом президента РФ Владимира Путина.', two: 'прямые трансляции различных спортивных событий, новости, аналитические программы, реалити- и ток-шоу, документальные фильмы, художественные фильмы и сериалы о спорте.', three: '' } },
  { titleDisplay: false, image: kultura, urlId: 'kultura', title: 'Культура', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'телеканал «Культура» был учрежден в 1997 году. В 2010 году получил название «Россия – Культура» («Россия К»). Попечительский совет телеканала одно время возглавлял первый президент РФ Борис Ельцин.', two: 'документальные и художественные кинофильмы, аналитические передачи, музыкальные передачи, посвященные российской и зарубежной культуре.', three: 'состоит преимущественно из людей среднего и старшего возраста, с высшим образованием.' } },
  { titleDisplay: false, image: planeta, urlId: 'planeta', title: 'РТР-Планета', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'круглосуточный телеканал на русском языке, осуществляющий вещание для зрителей во всем мире.', two: 'выпуски новостей; прямые репортажи; аналитические программы; документальные фильмы; спортивные соревнования; художественные фильмы; учебные телефильмы и познавательные программы.', three: 'свыше 30 миллионов телезрителей на обоих полушариях.' } },
  { titleDisplay: false, image: che, urlId: 'che', title: 'Чe', streamUrl: '//uma.media/play/embed/4e4e37727e07a7124cd7b29f2975e295?autoPlay=true&amp;wmode=opaque&amp;fakeFullscreen=1', descr: { one: 'российский федеральный круглосуточный телеканал. Начал вещание в 2015 году. Ранее на этой частоте вещал канал «Перец». Слоган: «Че – это звучит гордо».', two: 'специализируется на трансляции проектов о мужских увлечениях, хобби и мужских профессиях, спортивных состязаний, научно-популярных программ, художественных фильмов, зарубежных и отечественных сериалов.', three: 'мужчины в возрасте от 25 до 50 лет.' } },
  { titleDisplay: false, image: tvc, urlId: 'tvc', title: 'ТВЦ', streamUrl: '', descr: { one: 'российский круглосуточный федеральный телеканал, большая часть которого принадлежит Правительству Москвы. Начал вещание в 1997 году. Вещает из Москвы.', two: 'передачи, направленные на освещение политической, социальной и культурной жизни Москвы.', three: 'в начале 2015 года среднесуточная доля (среднее количество человек, смотревших телеканал на протяжении суток) телеканала ТВЦ составляла 3,5% от общего количества телезрителей.' } },
];

export const radioStations = [
  { titleDisplay: true, image: 'https://radiomap.eu/ru/images/vgtrk_radio-rossii.svg', title: 'Россия', streamUrl: 'https://icecast-vgtrk.cdnvideo.ru/rrzonam', urlId: 'rrzonam', descr: { one: 'Новости', two: 'Россия', three: 'Русский', four: 'Федеральная государственная радиостанция общего формата, входящая в состав Всероссийской государственной телевизионной и радиовещательной компании.' } },
  { titleDisplay: true, image: 'https://radiomap.eu/ru/images/vgtrk_mayak.svg', title: 'Маяк', streamUrl: 'https://icecast-vgtrk.cdnvideo.ru/mayakfm', urlId: 'mayakfm', descr: { one: 'Новости, Развлечения', two: 'Россия', three: 'Русский', four: 'Федеральная государственная радиостанция, одна из крупнейших и самых узнаваемых радиостанций на территории бывшего СССР. Основана в 1964 году по решению ЦК КПСС для создания «противовеса западным „голосам“».' } },
  { titleDisplay: true, image: 'https://radiomap.eu/ru/images/vgtrk_vesti.svg', title: 'Вести FM', streamUrl: 'https://icecast-vgtrk.cdnvideo.ru/vestifm', urlId: 'vestifm', descr: { one: 'Новости', two: 'Новости', three: 'Русский', four: 'Российская федеральная государственная информационная радиостанция. Входит в холдинг ВГТРК. Начало вещания - 5 февраля 2008 года в 06:00 утра по московскому времени.' } },
  { titleDisplay: true, image: 'https://radiomap.eu/ru/images/vgtrk_kultura.svg', title: 'Культура', streamUrl: 'https://icecast-vgtrk.cdnvideo.ru/kulturafm', urlId: 'kulturafm', descr: { one: 'Новости', two: 'Развлечения, Образование', three: 'Русский', four: 'российская радиостанция, входит в состав Всероссийской государственной телевизионной и радиовещательной компании (ВГТРК).' } },
  { titleDisplay: true, image: 'https://radiomap.eu/ru/images/vgtrk_yunost.svg', title: 'Юность', streamUrl: 'https://icecast-vgtrk.cdnvideo.ru/unost', urlId: 'unost', descr: { one: 'Развлечения', two: 'Россия', three: 'Русский', four: 'Государственная молодёжная радиостанция. Входит в состав Всероссийской государственной телерадиокомпании. До 9 января 2014 года вещала в Москве и на многих региональных частотах в России, а также со спутников в пакетах русскоязычных радиопрограмм. ' } },
];

export const headerNavLinks = [
  { name: 'Каналы', url: '/channels', icon: IoTvOutline },
  { name: 'Радио', url: '/radio', icon: IoRadioOutline },
];

export const footerLinks = [
  { name: 'О проекте', url: '/about' },
  { name: 'Вакансии', url: '/vacancies' },
  { name: 'Соглашение', url: '/terms' },
  { name: 'Контакты', url: '/contact' },
];
