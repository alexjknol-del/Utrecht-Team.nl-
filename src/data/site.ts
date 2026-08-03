// Centrale site-data: navigatie, activiteiten en gelegenheden.
// Outbound links naar theteambuilding.nl zijn de officiële boekingspagina's
// van The Team Building (Admiraal Helfrichlaan 6, 3527 KV Utrecht).

export const SITE = {
  name: 'Utrecht Team',
  domain: 'Utrecht-Team.nl',
  tagline: 'Het inspiratieplatform voor teambuilding en uitjes in Utrecht',
  contactEmail: 'info@Utrecht-Team.nl',
  partnerName: 'The Team Building',
  partnerUrl: 'https://theteambuilding.nl/',
  partnerAddress: 'Admiraal Helfrichlaan 6, 3527 KV Utrecht',
};

export type Activity = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  intro: string;
  groupSize: string;
  duration: string;
  category: 'Actief' | 'Interactief' | 'Puzzel' | 'Muziek';
  isNew?: boolean;
  partnerUrl: string;
  vimeoId?: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  forWho: string;
  goodToKnow: string;
};

export const ACTIVITIES: Activity[] = [
  {
    slug: 'nox-room',
    name: 'Nox Room',
    shortName: 'Nox Room',
    tagline: 'Strategisch en hilarisch teamspel in een pikdonker labyrint',
    intro:
      'Nox Room is een ondergrondse spelervaring in het hart van Utrecht: groepen van 4 tot 32 spelers gaan in volledige duisternis op zoek naar opdrachten, geluiden en aanwijzingen. Wie het beste communiceert en het meest op elkaar vertrouwt, wint.',
    groupSize: '4 – 32 spelers',
    duration: 'Circa 45 – 60 minuten',
    category: 'Actief',
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/nox-room/',
    vimeoId: '985638953',
    image: '/images/activiteiten/nox-room-3.jpg',
    imageAlt: 'Ondergrondse gang van Nox Room bij The Team Building in Utrecht',
    highlights: [
      'Volledig verduisterde ruimte: alleen geluid en tastzin wijzen de weg',
      'Meerdere kamers en scenario’s, dus geschikt om vaker te spelen',
      'Werkt zowel als samenwerkingsspel als als competitie tussen subgroepen',
    ],
    forWho:
      'Nox Room werkt goed voor teams die weleens te veel op zicht en op de luidste stem in de ruimte vertrouwen. In het donker valt die dynamiek weg — iedereen begint gelijk, en groepen die goed naar elkaar luisteren, winnen.',
    goodToKnow:
      'Denk aan makkelijk zittende kleding en schoenen: er wordt gelopen, gebukt en getast. Een lichte vorm van claustrofobie of donkervrees kan de activiteit minder geschikt maken; overleg dit vooraf met The Team Building.',
  },
  {
    slug: 'social-games',
    name: 'Social Games',
    shortName: 'Social Games',
    tagline: 'Next-level interactieve games met verschillende levels',
    intro:
      'Social Games combineert zes interactieve minigames op een lichtgevende speelvloer: van reactiesnelheid tot samenwerking. De activiteit is razendsnel uit te leggen en werkt voor groepen van 2 tot 50 personen, van kinderfeestje tot bedrijfsborrel.',
    groupSize: '2 – 50 spelers',
    duration: 'Circa 30 – 45 minuten',
    category: 'Interactief',
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/social-games/',
    vimeoId: '1161037161',
    image: '/images/sfeer/social-games.jpg',
    imageAlt: 'Interactieve lichtvloer van Social Games in Utrecht',
    highlights: [
      'Zes verschillende minigames, van reactiesnelheid tot samenwerking',
      'Regels zijn in een paar zinnen uit te leggen — geen lange briefing vooraf',
      'Schaalt moeiteloos van een klein vriendengroepje tot een bedrijfsborrel van 50 man',
    ],
    forWho:
      'Social Games is de gemakkelijkste instap van het aanbod: laagdrempelig voor wie niet van puzzelen houdt, maar met genoeg niveauverschil om ook fanatieke spelers uit te dagen. Geschikt voor gemengde groepen qua leeftijd en fitheid.',
    goodToKnow:
      'De activiteit combineert goed met een borrel of pizza-arrangement erna, omdat de speelvloer middenin de horecaruimte van The Team Building ligt.',
  },
  {
    slug: 'fusion-drift',
    name: 'Fusion Drift',
    shortName: 'Fusion Drift',
    tagline: 'De leukste combinatie van real-life videogames en drift karten',
    intro:
      'Fusion Drift (voorheen House of Karts) laat groepen driften op een indoor karbaan terwijl een gamified scoresysteem punten, boosts en power-ups toevoegt. Puur racen wordt zo net zo veel een kwestie van tactiek als van snelheid.',
    groupSize: '2 – 15 spelers',
    duration: 'Circa 45 minuten',
    category: 'Actief',
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/karten-utrecht/fusion-drift/',
    vimeoId: '900774865',
    image: '/images/activiteiten/fusion-drift-kart.jpg',
    imageAlt: 'Kart op de indoor baan van Fusion Drift bij The Team Building in Utrecht',
    highlights: [
      'Game-elementen als speed-ups, aanvallen en verdediging bovenop het racen zelf',
      'Elektrische karts, dus geschikt voor een indoor baan zonder uitlaatgassen',
      'Scorebord houdt bij wie de beste combinatie van snelheid en tactiek heeft',
    ],
    forWho:
      'Fusion Drift trekt vooral groepen die van een competitief element houden, zonder dat er echte rijervaring nodig is. Doordat de power-ups het verschil kunnen maken, maakt een mindere starttijd op de baan later nog goed.',
    goodToKnow:
      'Er geldt een minimumleeftijd en -lengte voor het besturen van een kart; check de actuele voorwaarden bij het boeken op de website van The Team Building.',
  },
  {
    slug: 'melody-vault',
    name: 'Melody Vault',
    shortName: 'Melody Vault',
    tagline: 'Zing de grootste muziekhits mee en doe mee aan muziekquizzen',
    intro:
      'Melody Vault is de karaoke- en muziekquizervaring van The Team Building: eigen zangkamers, een uitgebreide hitcatalogus en interactieve muziekquizzen voor wie liever meezingt dan meerent. Ideaal voor groepen die een gezellige, laagdrempelige avond zoeken.',
    groupSize: '4 – 20 spelers',
    duration: 'Circa 60 minuten',
    category: 'Muziek',
    isNew: true,
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/karaoke-music-quiz/',
    image: '/images/sfeer/melody-vault.jpg',
    imageAlt: 'Groep zingt karaoke onder de discobal in de Melody Vault-zangkamer bij The Team Building in Utrecht',
    highlights: [
      'Eigen zangkamers voor een kleinere, besloten groep binnen het gezelschap',
      'Uitgebreide hitcatalogus van verschillende decennia en genres',
      'Interactieve muziekquizzen als alternatief voor wie liever raadt dan zingt',
    ],
    forWho:
      'Melody Vault is de aangewezen keuze voor groepen die liever kletsen, lachen en meezingen dan fysiek actief zijn. Ook sterk voor gemengde gezelschappen waarin niet iedereen evenveel van sport houdt.',
    goodToKnow:
      'Combineer de zangkamers met een muziekquiz-ronde voor het hele gezelschap: zo wisselen intieme en groepsmomenten elkaar af tijdens één avond.',
  },
  {
    slug: 'axe-throwing',
    name: 'Axe Throwing',
    shortName: 'Axe Throwing',
    tagline: 'Wakker de oermens in je aan en kom bijlwerpen',
    intro:
      'Bij Axe Throwing gooien groepen van 2 tot 30+ personen met echte bijlen op een houten doelwit, onder begeleiding van een instructeur. Een activiteit die concentratie en een gezonde dosis competitie combineert, en verrassend snel te leren is.',
    groupSize: '2 – 30+ spelers',
    duration: 'Circa 45 minuten',
    category: 'Actief',
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/axe-throwing-utrecht/',
    vimeoId: '1020584913',
    image: '/images/sfeer/axe-throwing.jpg',
    imageAlt: 'Deelnemer gooit met een bijl op het doelwit bij Axe Throwing van The Team Building in Utrecht',
    highlights: [
      'Instructie en begeleiding door een gamemaster, ook voor complete beginners',
      'Individuele banen naast elkaar, dus iedereen gooit tegelijk mee',
      'Optioneel te combineren met een onderlinge competitie of toernooivorm',
    ],
    forWho:
      'Axe throwing is geliefd bij groepen die een fysieke uitlaatklep zoeken zonder dat er conditie voor nodig is. De focus die nodig is om een bijl recht te gooien, zorgt er ook voor dat het hoofd al snel leeg raakt van werkgedachten.',
    goodToKnow:
      'Gesloten schoenen zijn verplicht. De activiteit is geschikt vanaf een bepaalde minimumleeftijd; controleer de voorwaarden bij boeking, zeker bij een kinderfeestje of gemengde groep.',
  },
  {
    slug: 'escape-room-diamond-heist',
    name: 'Escape Room: The Diamond Heist',
    shortName: 'The Diamond Heist',
    tagline: 'Kraak de kluis voordat de tijd om is — ook als battle te spelen',
    intro:
      'The Diamond Heist is de escape room van The Team Building: groepen van 3 tot 16 spelers kruipen in de huid van meesterdieven en moeten binnen de tijd puzzels oplossen om de buit veilig te stellen. Ook te boeken als battle tussen twee teams tegelijk.',
    groupSize: '3 – 16 spelers',
    duration: 'Circa 60 minuten',
    category: 'Puzzel',
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/escaperoom-the-diamond-heist/',
    image: '/images/sfeer/diamond-heist.jpg',
    imageAlt: 'Escape room The Diamond Heist bij The Team Building in Utrecht',
    highlights: [
      'Puzzels die logisch nadenken combineren met samenwerken onder tijdsdruk',
      'Te boeken als battle: twee teams kraken tegelijk dezelfde kluis',
      'Verhaallijn en aankleding maken er een volledige belevenis van, niet alleen een puzzeltocht',
    ],
    forWho:
      'The Diamond Heist past bij groepen die analytisch sterk zijn of dat graag willen ontdekken. Doordat rollen zich vanzelf verdelen — iemand leest hardop, iemand rekent, iemand houdt overzicht — komt vaak duidelijk naar voren wie in de groep welke rol pakt onder druk.',
    goodToKnow:
      'Bij twijfel over het niveau: The Team Building kan meedenken over de moeilijkheidsgraad en over de battle-vorm als er twee gelijke teams te vormen zijn.',
  },
];

export type Occasion = {
  slug: string;
  name: string;
  tagline: string;
  partnerUrl: string;
  image: string;
  imageAlt: string;
  intro: string;
  tips: string[];
  suggestedActivities: string[];
  practicalNote: string;
};

export const OCCASIONS: Occasion[] = [
  {
    slug: 'bedrijfsuitje-utrecht',
    name: 'Bedrijfsuitje',
    tagline: 'Een teamuitje dat mensen nog weken later bespreken bij het koffiezetapparaat',
    partnerUrl: 'https://theteambuilding.nl/bedrijfsuitje-utrecht/',
    image: '/images/sfeer/bedrijfsuitje.jpg',
    imageAlt: 'Collega’s tijdens een bedrijfsuitje in Utrecht',
    intro:
      'Een geslaagd bedrijfsuitje draait niet om de duurste activiteit, maar om een programma waarbij collega’s elkaar buiten hun functietitel om leren kennen. In Utrecht ligt The Team Building daar centraal genoeg voor: op loopafstand van Utrecht Centraal, met ruimte voor groepen tot circa 180 personen.',
    tips: [
      'Combineer een actieve activiteit met een rustiger onderdeel, zoals een muziekquiz of borrel, zodat niet iedereen fysiek hoeft mee te doen',
      'Bij grotere afdelingen: splits de groep en laat subteams onderling een battle spelen, bijvoorbeeld in de escape room of op de kartbaan',
      'Plan een vast eindtijdstip en communiceer dat vooraf — dat voorkomt dat het uitje op het einde uit elkaar valt',
    ],
    suggestedActivities: ['social-games', 'fusion-drift', 'escape-room-diamond-heist'],
    practicalNote:
      'The Team Building beschikt ook over vergaderzalen, wat het mogelijk maakt om een middag vergaderen direct te laten overlopen in het bedrijfsuitje, zonder van locatie te wisselen.',
  },
  {
    slug: 'vrijgezellenfeest-utrecht',
    name: 'Vrijgezellenfeest',
    tagline: 'Van bijlwerpen tot karaoke: een programma dat past bij de bruid of bruidegom',
    partnerUrl: 'https://theteambuilding.nl/vrijgezellenfeest-utrecht/',
    image: '/images/sfeer/vrijgezellenfeest.jpg',
    imageAlt: 'Groep vrienden tijdens een vrijgezellenfeest in Utrecht',
    intro:
      'Een vrijgezellenfeest staat of valt met hoe goed het programma past bij de persoon in kwestie. Utrecht leent zich goed voor een middag- of avondprogramma dat op één locatie start, met genoeg opties om daarna de stad in te trekken.',
    tips: [
      'Kies een activiteit die past bij de bruid of bruidegom: competitief en fysiek (axe throwing, karten) of juist gezellig en muzikaal (Melody Vault)',
      'Vraag vooraf naar allergieën en beperkingen binnen de groep, zeker bij activiteiten met fysieke inspanning',
      'Reserveer op tijd: vrijgezellenfeesten vallen vaak in het weekend, en dat zijn de populairste tijdsloten',
    ],
    suggestedActivities: ['axe-throwing', 'melody-vault', 'nox-room'],
    practicalNote:
      'Na de activiteit kan de groep aansluitend in de lounge van The Team Building blijven hangen met eigen bar en bordspellen, voordat het gezelschap de stad in trekt.',
  },
  {
    slug: 'kinderfeestje-utrecht',
    name: 'Kinderfeestje',
    tagline: 'Een verjaardag die niet in een zaaltje met slingers hoeft te eindigen',
    partnerUrl: 'https://theteambuilding.nl/kinderfeestje-utrecht/',
    image: '/images/sfeer/kinderfeestje.jpg',
    imageAlt: 'Interactieve Social Games-activiteit bij The Team Building, geschikt voor een kinderfeestje in Utrecht',
    intro:
      'Voor een kinderfeestje telt vooral dat de activiteit snel te begrijpen is en genoeg actie bevat om een groepje kinderen langer dan tien minuten geboeid te houden. Social Games en Fusion Drift zijn daar allebei geschikt voor.',
    tips: [
      'Check vooraf de minimumleeftijd per activiteit — die verschilt per spel, zeker bij karten en bijlwerpen',
      'Reken op begeleiding van minstens één volwassene per klein groepje kinderen',
      'Vraag naar een arrangement inclusief taart en limonade, zodat er niets extra geregeld hoeft te worden',
    ],
    suggestedActivities: ['social-games', 'fusion-drift'],
    practicalNote:
      'The Team Building biedt kinderfeestjes met een vast programma inclusief verjaardagstaart en limonade — handig voor ouders die niet zelf willen cateren.',
  },
  {
    slug: 'vriendengroep-en-familie-utrecht',
    name: 'Vrienden & familie',
    tagline: 'Een middagje weg met de app-groep, zonder eindeloos overleg over wat jullie gaan doen',
    partnerUrl: 'https://theteambuilding.nl/activiteiten-utrecht/',
    image: '/images/sfeer/vrienden.jpg',
    imageAlt: 'Vriendengroep tijdens een uitje in Utrecht',
    intro:
      'Niet elk uitje heeft een aanleiding nodig. Voor een vriendengroep of familiedag werkt het vaak het best om één activiteit te boeken die voor iedereen leuk is, en de rest van de dag open te laten.',
    tips: [
      'Bij een brede leeftijdsrange (kinderen tot grootouders) werkt Social Games het meest inclusief',
      'Voor een groep die van een uitdaging houdt, is de escape room een goede gezamenlijke ijsbreker',
      'Combineer de activiteit met een van de horeca-arrangementen, zodat eten en drinken geregeld zijn zonder er zelf iets voor te hoeven boeken',
    ],
    suggestedActivities: ['social-games', 'escape-room-diamond-heist', 'melody-vault'],
    practicalNote:
      'Gratis parkeren op eigen terrein maakt de locatie ook praktisch voor gezelschappen die van buiten Utrecht komen.',
  },
];

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/activiteiten/', label: 'Activiteiten' },
  { href: '/uitjes-voor/', label: 'Uitjes voor' },
  { href: '/nieuws/', label: 'Nieuws' },
  { href: '/over/', label: 'Over' },
  { href: '/contact/', label: 'Contact' },
];

export const FOOTER_LINKS = [
  { href: '/over/', label: 'Over dit platform' },
  { href: '/over/redactie/', label: 'De redactie' },
  { href: '/contact/', label: 'Contact' },
  { href: '/privacybeleid/', label: 'Privacybeleid' },
  { href: '/cookiebeleid/', label: 'Cookiebeleid' },
];
