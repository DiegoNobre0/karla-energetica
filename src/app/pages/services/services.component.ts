import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  service: any;

  getBgImage(url: string): SafeStyle {
  return this.domSanitizer.bypassSecurityTrustStyle(`url('${url}')`);
}

  readonly serviceMap: any = {
    'tarot': {
      title: 'TAROT TERAPÊUTICO',
      subtitle: 'Um espelho para a sua alma',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_3hwgqb3hwgqb3hwg%20(1).png',
      description: 'Diferente do Tarot divinatório comum, o Tarot Terapêutico foca no seu momento presente. Ele funciona como um espelho da alma, revelando padrões inconscientes, bloqueios e potenciais que você ainda não percebeu. É uma ferramenta de autoconhecimento profundo.',
      quote: '"As cartas não revelam o futuro — elas revelam quem você é agora."',
      duration: '60 a 90 minutos',
      sessionInfo: 'Cada leitura é única, conduzida em um ambiente de acolhimento e sigilo absoluto. Você pode trazer uma pergunta ou simplesmente se abrir para o que precisa ser visto.',
      benefits: [
        { icon: 'auto_awesome', title: 'Clareza Mental', desc: 'Dissolve a confusão interna e ajuda você a enxergar com nitidez o que antes parecia nebuloso, facilitando a tomada de decisões importantes.' },
        { icon: 'favorite_border', title: 'Equilíbrio Emocional', desc: 'Identifica a raiz de angústias, medos e padrões repetitivos, trazendo acolhimento e uma nova perspectiva sobre seus sentimentos.' },
        { icon: 'psychology', title: 'Despertar Interior', desc: 'Revela o seu propósito, potenciais adormecidos e os próximos passos da sua evolução pessoal e espiritual.' }
      ],
      process: [
        { step: '01', title: 'Intenção', desc: 'Definimos juntas o foco da sessão — uma pergunta, uma área da vida ou uma abertura total para o que precisar emergir.' },
        { step: '02', title: 'Leitura', desc: 'As cartas são dispostas em um spread personalizado. Cada arcano é interpretado no contexto da sua história e momento atual.' },
        { step: '03', title: 'Integração', desc: 'Conversamos sobre os insights, emoções e próximos passos. Você sai com clareza e direcionamento concreto.' }
      ],
      presencialDesc: 'Realizado em nosso templo em Camaçari-BA, com aromas, cristais e uma atmosfera que aprofunda a conexão com seu interior.',
      onlineDesc: 'Via videochamada, com a mesma profundidade e presença. As cartas falam além das telas — a energia chega onde você estiver.'
    },

    'reiki': {
      title: 'REIKI',
      subtitle: 'Restaurando o fluxo da sua energia vital',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_rigdtjrigdtjrigd%20(1).png',
      description: 'O Reiki é uma técnica milenar de imposição de mãos que trabalha o campo energético, restaurando o equilíbrio do corpo, mente e espírito. Desenvolvido no Japão por Mikao Usui, é uma jornada de cura que atua diretamente onde a energia está estagnada ou bloqueada.',
      quote: '"Onde a energia flui livremente, a cura acontece naturalmente."',
      duration: '60 minutos',
      sessionInfo: 'Você permanece vestida e deitada confortavelmente. As mãos são posicionadas suavemente sobre ou próximas ao corpo, seguindo os centros energéticos. Muitas pessoas experimentam calor, formigamento e um relaxamento profundo.',
      benefits: [
        { icon: 'spa', title: 'Alinhamento dos Chakras', desc: 'Reequilibra os sete centros de energia vital do corpo, restaurando a harmonia entre as dimensões física, emocional, mental e espiritual.' },
        { icon: 'refresh', title: 'Redução de Stress', desc: 'Ativa o sistema nervoso parassimpático, promovendo um relaxamento profundo que o corpo raramente experimenta no cotidiano moderno.' },
        { icon: 'bolt', title: 'Fluxo Energético', desc: 'Remove bloqueios densos causados por traumas, emoções reprimidas ou padrões de pensamento negativos acumulados ao longo do tempo.' },
        { icon: 'healing', title: 'Apoio à Saúde', desc: 'Complementa tratamentos médicos convencionais, fortalecendo o sistema imunológico e acelerando processos de recuperação.' }
      ],
      process: [
        { step: '01', title: 'Acolhimento', desc: 'Uma breve conversa para entender seu momento e intenção. O ambiente é preparado com óleos essenciais e música de alta vibração.' },
        { step: '02', title: 'Canalização', desc: 'Você deita-se enquanto a energia Reiki é canalizada através das mãos, percorrendo os chakras e pontos de tensão do corpo.' },
        { step: '03', title: 'Compartilhamento', desc: 'Após a sessão, compartilhamos as percepções e sensações. Você recebe orientações para manter o campo energético elevado.' }
      ],
      presencialDesc: 'Realizado em maca terapêutica, em nosso templo em Camaçari-BA. Um espaço sagrado com cristais, aromaterapia e sons de cura.',
      onlineDesc: 'O Reiki à distância (Reiki Remoto) tem a mesma eficácia comprovada. A energia não conhece limitações de tempo ou espaço.'
    },

    'mesa-radionica': {
      title: 'MESA RADIÔNICA',
      subtitle: 'Cura quântica além do espaço e do tempo',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_uxpslyuxpslyuxps%20(1).png',
      description: 'A Mesa Radiônica é um instrumento sofisticado de cura quântica que atua na transmutação de energias negativas, quebra de bloqueios e alinhamento dos corpos sutis. Operada por meio de radiestesia e radiônica, ela acessa o campo mórfico do indivíduo e promove transformações profundas.',
      quote: '"Tudo é frequência. Ajustar a sua é a maior alquimia possível."',
      duration: '75 a 90 minutos',
      sessionInfo: 'A Mesa Radiônica pode ser aplicada presencialmente ou à distância com igual eficácia. Uma fotografia e dados básicos são suficientes para estabelecer a conexão com o campo energético do solicitante.',
      benefits: [
        { icon: 'cleaning_services', title: 'Limpeza de Bloqueios', desc: 'Remove traumas, crenças limitantes e programações negativas gravadas nos corpos sutis ao longo desta e de outras vidas.' },
        { icon: 'sync', title: 'Transmutação', desc: 'Converte energias densas e negativas em vibrações elevadas, reorganizando o campo energético em padrões de harmonia e saúde.' },
        { icon: 'gavel', title: 'Harmonização', desc: 'Alinha o campo energético de pessoas, ambientes e relacionamentos, dissolvendo conflitos e atraindo coerência.' },
        { icon: 'electric_bolt', title: 'Ativação de Potenciais', desc: 'Desperta dons, talentos e potenciais adormecidos, sintonizando o indivíduo com sua linha de tempo mais elevada.' }
      ],
      process: [
        { step: '01', title: 'Mapeamento', desc: 'Através de radiestesia, mapeamos as áreas de interferência, bloqueios e desequilíbrios no campo energético multidimensional.' },
        { step: '02', title: 'Transmissão', desc: 'A Mesa processa as frequências de cura, transmutando as energias identificadas e reprogramando o campo com padrões de saúde.' },
        { step: '03', title: 'Ancoragem', desc: 'As novas frequências são ancoradas e lacradas no campo energético. Um relatório detalhado da sessão é entregue ao solicitante.' }
      ],
      presencialDesc: 'Em nosso templo em Camaçari-BA, com você presente e integrada ao processo de transmutação em tempo real.',
      onlineDesc: 'Totalmente eficaz à distância. Enviamos um relatório completo e conduzimos uma breve chamada de integração após a sessão.'
    },

    'cromoterapia': {
      title: 'CROMOTERAPIA',
      subtitle: 'A linguagem vibracional das cores',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_xjnj5sxjnj5sxjnj%20(1).png',
      description: 'Utilização das frequências vibracionais das cores para restaurar o equilíbrio do corpo e da mente. Cada cor possui um comprimento de onda específico que ressoa com diferentes órgãos, emoções e centros energéticos, promovendo saúde integral através da aplicação de luz direcionada.',
      quote: '"A cor é a linguagem que a alma fala quando as palavras não são suficientes."',
      duration: '45 a 60 minutos',
      sessionInfo: 'A sessão utiliza lâmpadas de cromoterapia, filtros e cristais coloridos posicionados estrategicamente sobre os chakras e pontos de tensão. A experiência é profundamente relaxante e reveladora.',
      benefits: [
        { icon: 'wb_sunny', title: 'Harmonização Chakral', desc: 'Cada chakra responde a uma cor específica do espectro. A cromoterapia reequilibra esses centros com precisão e naturalidade.' },
        { icon: 'favorite', title: 'Estímulo Emocional', desc: 'As cores atuam diretamente no sistema límbico, o centro emocional do cérebro, dissolvendo padrões de ansiedade, tristeza e medo.' },
        { icon: 'opacity', title: 'Bem-estar Físico', desc: 'Cores específicas estimulam a produção de hormônios, melhoram a circulação e fortalecem o sistema imunológico.' },
        { icon: 'lens', title: 'Clareza Mental', desc: 'Certas frequências luminosas melhoram a concentração, criatividade e clareza cognitiva de forma natural e não invasiva.' }
      ],
      process: [
        { step: '01', title: 'Diagnóstico', desc: 'Identificamos as cores deficientes e em excesso no seu campo energético, além das queixas físicas e emocionais do momento.' },
        { step: '02', title: 'Aplicação', desc: 'As cores terapêuticas são aplicadas sobre os pontos correspondentes usando lâmpadas, filtros e cristais coloridos.' },
        { step: '03', title: 'Equilíbrio', desc: 'Ao final, seu campo energético está reequilibrado. Orientações sobre cores para usar no dia a dia são compartilhadas.' }
      ],
      presencialDesc: 'Em nosso templo em Camaçari-BA, com equipamentos profissionais de cromoterapia e cristais amplificadores.',
      onlineDesc: 'A distância, com transmissão de frequências cromáticas e orientações de uso de cores no ambiente e vestuário pessoal.'
    },

    'cristaloterapia': {
      title: 'CRISTALOTERAPIA',
      subtitle: 'A sabedoria ancestral da Terra a serviço da sua cura',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_zfk7xuzfk7xuzfk7%20(1).png',
      description: 'O uso da energia vibracional dos cristais para harmonizar o campo energético, desbloquear centros vitais e promover a cura física, mental e espiritual. Os cristais são transmissores e amplificadores de energia que a Terra criou ao longo de milhões de anos para servir à nossa evolução.',
      quote: '"Os cristais são a memória da Terra — e eles lembram o que você esqueceu."',
      duration: '60 a 75 minutos',
      sessionInfo: 'Cristais específicos são selecionados intuitivamente e posicionados sobre e ao redor do corpo, sobre os chakras e pontos de pressão. A sessão induz um estado meditativo profundo de restauração.',
      benefits: [
        { icon: 'grain', title: 'Limpeza Áurica', desc: 'Os cristais absorvem e neutralizam as energias densas do campo áurico, restaurando a luminosidade e integridade da sua aura.' },
        { icon: 'shield', title: 'Proteção Energética', desc: 'Criação de um escudo vibracional que protege de influências externas negativas, psiquismo alheio e ambientes tóxicos.' },
        { icon: 'trending_up', title: 'Vitalidade', desc: 'Aumento do fluxo de energia vital (prana) em todos os níveis, resultando em disposição, entusiasmo e saúde radiante.' },
        { icon: 'diamond', title: 'Expansão de Consciência', desc: 'Cristais de alta vibração como a Selenita e o Cristal de Quartzo amplificam a percepção espiritual e a intuição.' }
      ],
      process: [
        { step: '01', title: 'Escolha Intuitiva', desc: 'Os cristais são selecionados para você de forma intuitiva e diagnóstica, alinhados com as necessidades do seu campo.' },
        { step: '02', title: 'Posicionamento', desc: 'Os cristais são dispostos em grades e sobre os chakras enquanto você descansa em estado de abertura e receptividade.' },
        { step: '03', title: 'Limpeza e Orientação', desc: 'Os cristais são limpos após a sessão. Você recebe orientações sobre quais cristais carregar ou ter em casa.' }
      ],
      presencialDesc: 'Em nosso templo em Camaçari-BA, com uma coleção especial de cristais de alta vibração, incluindo peças raras e programadas.',
      onlineDesc: 'À distância, com envio de uma grade cristalina programada com a sua intenção ou mediante orientação de uso dos seus próprios cristais.'
    },

    'limpeza-energetica': {
      title: 'LIMPEZA ENERGÉTICA',
      subtitle: 'Remova o que não é seu e reconquiste sua leveza',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_65cdri65cdri65cd%20(1).png',
      description: 'Um procedimento profundo para retirar densidades, energias estagnadas ou influências externas que impedem o seu fluxo natural. Essas interferências bloqueiam o sucesso, a saúde, os relacionamentos e a paz. A limpeza é o primeiro passo para uma vida de presença plena.',
      quote: '"Você não precisa carregar o peso do mundo. Deixe ir o que não é seu."',
      duration: '60 a 90 minutos',
      sessionInfo: 'A sessão combina técnicas de defumação, uso de sal, cristais e imposição de mãos para remover camada a camada as interferências energéticas. Pode incluir corte de cordões e limpeza de programações negativas.',
      benefits: [
        { icon: 'flare', title: 'Liberação de Cargas', desc: 'Eliminação de energias acumuladas no campo áurico: medos, mágoas, traumas, sentimentos alheios absorvidos inconscientemente.' },
        { icon: 'autorenew', title: 'Renovação do Campo', desc: 'Restauração da sua frequência vibracional original — aquela que existia antes das experiências difíceis.' },
        { icon: 'brightness_5', title: 'Leveza no Cotidiano', desc: 'Sensação imediata de clareza, alívio e bem-estar. A respiração fica mais fácil, o pensamento mais claro, as escolhas mais alinhadas.' },
        { icon: 'link_off', title: 'Corte de Cordões', desc: 'Dissolução de vínculos energéticos tóxicos com pessoas, situações e padrões que drenam sua energia vital.' }
      ],
      process: [
        { step: '01', title: 'Diagnóstico', desc: 'Identificamos os tipos de interferência presentes: densidades, influências externas, cordões, programações e entidades.' },
        { step: '02', title: 'Remoção', desc: 'Utilizando defumação, cristais, sal grosso e passes energéticos, removemos camada a camada cada interferência identificada.' },
        { step: '03', title: 'Lacre e Proteção', desc: 'O campo limpo é selado com luz e proteção. Orientações práticas para manter o campo limpo no pós-sessão são fornecidas.' }
      ],
      presencialDesc: 'Em nosso templo em Camaçari-BA, com o ritual completo de defumação, cristais e passes. A experiência presencial tem uma profundidade singular.',
      onlineDesc: 'À distância, com total eficácia. Você pode sentir a sessão acontecer em tempo real. Muitos relatam sensações físicas de leveza e calor durante o processo.'
    },

    'alinhamento-vibracional': {
      title: 'ALINHAMENTO VIBRACIONAL',
      subtitle: 'Sincronize-se com o seu propósito mais elevado',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_20ttr820ttr820tt%20(1).png',
      description: 'Processo de sintonização profunda das frequências do indivíduo com o seu propósito de vida. Elimina interferências, reorganiza o sistema energético e reconecta você com a sua essência mais verdadeira — aquela que existia antes dos condicionamentos, traumas e crenças impostas pelo mundo.',
      quote: '"Quando você se alinha com quem realmente é, o universo conspira a seu favor."',
      duration: '90 minutos',
      sessionInfo: 'O Alinhamento Vibracional é a sessão mais completa do nosso atelier. Ela combina elementos do Reiki, Radiônica e Cristaloterapia, conduzida com mapeamento energético detalhado e intenção cirúrgica.',
      benefits: [
        { icon: 'gps_fixed', title: 'Conexão com Propósito', desc: 'Sintonização fina com sua missão de vida e dons de alma. Quando alinhado, o caminho fica claro e as oportunidades surgem naturalmente.' },
        { icon: 'waves', title: 'Sincronicidade', desc: 'Atração natural de situações, pessoas e oportunidades que resonam com sua nova frequência vibracional elevada.' },
        { icon: 'self_improvement', title: 'Paz Interior', desc: 'Harmonia absoluta entre as dimensões físicas, emocionais, mentais e espirituais do seu sistema pessoal.' },
        { icon: 'rocket_launch', title: 'Manifestação Acelerada', desc: 'Em alta vibração e alinhamento, seus pensamentos e intenções se materializam com muito mais velocidade e precisão.' }
      ],
      process: [
        { step: '01', title: 'Mapeamento Integral', desc: 'Avaliação completa do campo energético: chakras, corpo áurico, programações, missão de alma e pontos de desalinhamento.' },
        { step: '02', title: 'Alinhamento Multidimensional', desc: 'Combinação de técnicas para elevar a frequência, remover interferências e sintonizar cada camada do ser com o propósito maior.' },
        { step: '03', title: 'Ancoragem do Novo Campo', desc: 'As novas frequências são ancoradas com cristais e mantras. Um plano de manutenção vibracional personalizado é entregue.' }
      ],
      presencialDesc: 'Em nosso templo em Camaçari-BA. A sessão presencial de Alinhamento Vibracional é uma imersão completa de 90 minutos de pura transformação.',
      onlineDesc: 'À distância, com entrega de relatório detalhado de mapeamento e sessão de integração por videochamada ao final do processo.'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon('whatsapp', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/whatsapp.svg'));
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service = this.serviceMap[id];
    });
  }

  whatsapp(): void {
    const phoneNumber = '71987141078';
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${this.service?.title || 'seus serviços'}.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
}