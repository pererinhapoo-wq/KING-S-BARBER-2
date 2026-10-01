import { Service, Barber, GalleryItem, Testimonial } from '../types';

import heroImage from '../assets/images/hero_kings_barber_1790816886244.jpg';
import fadeHaircutImage from '../assets/images/service_fade_haircut_1790816895910.jpg';
import beardGroomingImage from '../assets/images/service_beard_grooming_1790816905975.jpg';
import masterBarberImage from '../assets/images/team_master_barber_1790816914439.jpg';
import loungeImage from '../assets/images/barbershop_interior_lounge_1790816923816.jpg';

export {
  heroImage,
  fadeHaircutImage,
  beardGroomingImage,
  masterBarberImage,
  loungeImage
};

export const SERVICES: Service[] = [
  {
    id: 'corte-masculino',
    name: 'Corte Masculino',
    category: 'cabelo',
    description: 'Corte personalizado adaptado ao seu formato de rosto e estilo de vida. Inclui lavagem com shampoo refrescante e finalização com pomada modeladora.',
    price: 55,
    formattedPrice: 'R$ 55,00',
    duration: '45 min',
    popular: true,
    features: ['Lavagem refrescante com massagem capilar', 'Corte com tesoura e máquina de precisão', 'Finalização com produtos de linha premium']
  },
  {
    id: 'corte-barba',
    name: 'Corte + Barba',
    category: 'combo',
    description: 'O combo assinatura da KING’S BARBER. Transformação completa com corte estilizado e o tradicional ritual de barboterapia com toalha quente.',
    price: 95,
    formattedPrice: 'R$ 95,00',
    duration: '1h 15 min',
    popular: true,
    features: ['Corte completo personalizado', 'Ritual de toalha quente aromática', 'Alinhamento na navalha e hidratação profunda']
  },
  {
    id: 'barba',
    name: 'Barba Terapia',
    category: 'barba',
    description: 'Modelagem e alinhamento milimétrico da barba com navalha descartável. Aplicação de óleos nobres, toalha quente emoliente e bálsamo pós-barba.',
    price: 45,
    formattedPrice: 'R$ 45,00',
    duration: '35 min',
    features: ['Toalha quente com óleos essenciais', 'Navalha descartável esterilizada', 'Massagem facial relaxante pós-barba']
  },
  {
    id: 'degrade',
    name: 'Degradê (Fade)',
    category: 'cabelo',
    description: 'Especialidade da casa. Transição perfeita do zero ou shaver até o topo, sem marcações, com gradiente limpo e acabamento na lâmina.',
    price: 60,
    formattedPrice: 'R$ 60,00',
    duration: '50 min',
    popular: true,
    features: ['Fade de alta precisão (Low, Mid, High ou Taper)', 'Uso de Shaver profissional ultra rente', 'Alinhamento das linhas frontais e costeletas']
  },
  {
    id: 'sobrancelha',
    name: 'Sobrancelha',
    category: 'acabamento',
    description: 'Desenho e alinhamento discreto da sobrancelha masculina com navalhete ou pinça, preservando a naturalidade e a harmonia do olhar.',
    price: 25,
    formattedPrice: 'R$ 25,00',
    duration: '15 min',
    features: ['Técnica não invasiva e natural', 'Remoção do excesso sem afinar', 'Acabamento higienizado com loção']
  },
  {
    id: 'acabamento',
    name: 'Acabamento (Pezinho)',
    category: 'acabamento',
    description: 'Manutenção rápida dos contornos do cabelo, nuca e costeletas na navalha com toalha morna e loção refrescante para manter o corte em dia.',
    price: 30,
    formattedPrice: 'R$ 30,00',
    duration: '20 min',
    features: ['Definição precisa do contorno', 'Navalha e gel emoliente de barbear', 'Aplicação de loção mentolada pós-navalha']
  }
];

export const TEAM: Barber[] = [
  {
    id: 'bruno-silveira',
    name: 'Bruno Silveira',
    nickname: 'The Blade',
    role: 'Mestre Barbeiro & Fundador',
    experience: '10 anos de experiência',
    bio: 'Pioneiro em visagismo masculino e especialista renomado em degradês cirúrgicos e cortes clássicos com tesoura fio laser.',
    photo: masterBarberImage,
    specialty: 'Degradê de Alta Precisão & Visagismo',
    rating: 4.9,
    instagram: '@bruno.blade_barber'
  },
  {
    id: 'rodrigo-santos',
    name: 'Rodrigo Santos',
    nickname: 'Don Rodrigo',
    role: 'Barboterapeuta Sênior',
    experience: '8 anos de experiência',
    bio: 'Mestre nas artes da navalha tradicional. Especialista no ritual italiano de toalha quente, tratamento de pele e modelagem de barbas compridas.',
    photo: beardGroomingImage,
    specialty: 'Barboterapia & Tratamentos Faciais',
    rating: 5.0,
    instagram: '@rodrigo.barboterapia'
  },
  {
    id: 'lucas-ventura',
    name: 'Lucas Ventura',
    nickname: 'Ventura Style',
    role: 'Estilista de Cortes Modernos',
    experience: '6 anos de experiência',
    bio: 'Focado em tendências internacionais, texturização americana, acabamentos geométricos e harmonização para perfis executivos e jovens.',
    photo: fadeHaircutImage,
    specialty: 'Cortes Texturizados & Penteados',
    rating: 4.9,
    instagram: '@lucasventura.cuts'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Degradê Cirúrgico Americano',
    category: 'degrades',
    image: fadeHaircutImage,
    caption: 'Transição suave sem marcações com topo texturizado e acabamento nítido.'
  },
  {
    id: 'g2',
    title: 'Ritual Clássico de Barboterapia',
    category: 'barbas',
    image: beardGroomingImage,
    caption: 'Toalha quente com essência de eucalipto e navalha de precisão.'
  },
  {
    id: 'g3',
    title: 'Ambiente Principal da Barbearia',
    category: 'ambiente',
    image: heroImage,
    caption: 'Poltronas em couro legítimo, iluminação âmbar e padrão de luxo.'
  },
  {
    id: 'g4',
    title: 'Lounge VIP e Espaço Café & Chopp',
    category: 'ambiente',
    image: loungeImage,
    caption: 'Espaço de espera com cafés especiais, cervejas artesanais e sinuca.'
  },
  {
    id: 'g5',
    title: 'Corte Executivo com Navalha',
    category: 'cortes',
    image: masterBarberImage,
    caption: 'Atenção aos detalhes em cada mecha com técnicas de visagismo masculino.'
  },
  {
    id: 'g6',
    title: 'Alinhamento Escultural de Barba',
    category: 'barbas',
    image: beardGroomingImage,
    caption: 'Contorno perfeitamente desenhado e nutrição com óleos importados.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Guilherme Rocha',
    service: 'Corte + Barba',
    rating: 5,
    comment: 'A melhor barbearia que já frequentei em São Paulo. O atendimento do Bruno é impecável, a toalha quente na barba é relaxamento puro e o café cortesia é de primeira qualidade. Saio sempre renovado.',
    date: 'Há 3 dias',
    barber: 'Bruno Silveira'
  },
  {
    id: 't2',
    name: 'Marcelo Medeiros',
    service: 'Degradê (Fade)',
    rating: 5,
    comment: 'O degradê do Lucas é absurdo de limpo, sem nenhuma marca e com caimento perfeito no topo. O ambiente é muito elegante e não atrasa 1 minuto do horário agendado.',
    date: 'Há 1 semana',
    barber: 'Lucas Ventura'
  },
  {
    id: 't3',
    name: 'Felipe Alcantara',
    service: 'Barba Terapia',
    rating: 5,
    comment: 'Minha barba é bem fechada e sempre tinha irritação pós-lâmina. Desde que comecei a fazer a barboterapia com o Rodrigo, minha pele nunca mais inflamou. Recomendo de olhos fechados.',
    date: 'Há 2 semanas',
    barber: 'Rodrigo Santos'
  }
];

export const BARBERSHOP_INFO = {
  name: "KING'S BARBER",
  tagline: "Estilo, precisão e atitude.",
  description: "Barbearia moderna com padrão de excelência internacional. Especialistas em cortes de alta precisão, visagismo masculino e o tradicional ritual de barboterapia.",
  address: "Av. Paulista, 1842 - Bela Vista",
  city: "São Paulo - SP",
  postalCode: "01310-200",
  phone: "(11) 98765-4321",
  whatsapp: "+5511987654321",
  whatsappFormatted: "(11) 98765-4321",
  instagram: "@kingsbarber.oficial",
  hours: {
    weekdays: "Segunda a Sexta: 09h às 20h",
    saturday: "Sábado: 08h às 19h",
    sunday: "Domingo: Fechado"
  },
  googleMapsUrl: "https://maps.google.com/?q=Av.+Paulista,+1842+-+Bela+Vista,+S%C3%A3o+Paulo+-+SP"
};
