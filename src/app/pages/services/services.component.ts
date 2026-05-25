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

  // readonly serviceMap: any = {
  //   'tarot': {
  //     title: 'TAROT TERAPÊUTICO',
  //     subtitle: 'Um espelho para a sua alma',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_3hwgqb3hwgqb3hwg%20(1).png',
  //     description: 'Diferente do Tarot divinatório comum, o Tarot Terapêutico foca no seu momento presente. Ele funciona como um espelho da alma, revelando padrões inconscientes, bloqueios e potenciais que você ainda não percebeu. É uma ferramenta de autoconhecimento profundo.',
  //     quote: '"As cartas não revelam o futuro — elas revelam quem você é agora."',
  //     duration: '60 a 90 minutos',
  //     sessionInfo: 'Cada leitura é única, conduzida em um ambiente de acolhimento e sigilo absoluto. Você pode trazer uma pergunta ou simplesmente se abrir para o que precisa ser visto.',
  //     benefits: [
  //       { icon: 'auto_awesome', title: 'Clareza Mental', desc: 'Dissolve a confusão interna e ajuda você a enxergar com nitidez o que antes parecia nebuloso, facilitando a tomada de decisões importantes.' },
  //       { icon: 'favorite_border', title: 'Equilíbrio Emocional', desc: 'Identifica a raiz de angústias, medos e padrões repetitivos, trazendo acolhimento e uma nova perspectiva sobre seus sentimentos.' },
  //       { icon: 'psychology', title: 'Despertar Interior', desc: 'Revela o seu propósito, potenciais adormecidos e os próximos passos da sua evolução pessoal e espiritual.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Intenção', desc: 'Definimos juntas o foco da sessão — uma pergunta, uma área da vida ou uma abertura total para o que precisar emergir.' },
  //       { step: '02', title: 'Leitura', desc: 'As cartas são dispostas em um spread personalizado. Cada arcano é interpretado no contexto da sua história e momento atual.' },
  //       { step: '03', title: 'Integração', desc: 'Conversamos sobre os insights, emoções e próximos passos. Você sai com clareza e direcionamento concreto.' }
  //     ],
  //     presencialDesc: 'Realizado em nosso templo em Camaçari-BA, com aromas, cristais e uma atmosfera que aprofunda a conexão com seu interior.',
  //     onlineDesc: 'Via videochamada, com a mesma profundidade e presença. As cartas falam além das telas — a energia chega onde você estiver.'
  //   },

  //   'reiki': {
  //     title: 'REIKI',
  //     subtitle: 'Restaurando o fluxo da sua energia vital',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_rigdtjrigdtjrigd%20(1).png',
  //     description: 'O Reiki é uma técnica milenar de imposição de mãos que trabalha o campo energético, restaurando o equilíbrio do corpo, mente e espírito. Desenvolvido no Japão por Mikao Usui, é uma jornada de cura que atua diretamente onde a energia está estagnada ou bloqueada.',
  //     quote: '"Onde a energia flui livremente, a cura acontece naturalmente."',
  //     duration: '60 minutos',
  //     sessionInfo: 'Você permanece vestida e deitada confortavelmente. As mãos são posicionadas suavemente sobre ou próximas ao corpo, seguindo os centros energéticos. Muitas pessoas experimentam calor, formigamento e um relaxamento profundo.',
  //     benefits: [
  //       { icon: 'spa', title: 'Alinhamento dos Chakras', desc: 'Reequilibra os sete centros de energia vital do corpo, restaurando a harmonia entre as dimensões física, emocional, mental e espiritual.' },
  //       { icon: 'refresh', title: 'Redução de Stress', desc: 'Ativa o sistema nervoso parassimpático, promovendo um relaxamento profundo que o corpo raramente experimenta no cotidiano moderno.' },
  //       { icon: 'bolt', title: 'Fluxo Energético', desc: 'Remove bloqueios densos causados por traumas, emoções reprimidas ou padrões de pensamento negativos acumulados ao longo do tempo.' },
  //       { icon: 'healing', title: 'Apoio à Saúde', desc: 'Complementa tratamentos médicos convencionais, fortalecendo o sistema imunológico e acelerando processos de recuperação.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Acolhimento', desc: 'Uma breve conversa para entender seu momento e intenção. O ambiente é preparado com óleos essenciais e música de alta vibração.' },
  //       { step: '02', title: 'Canalização', desc: 'Você deita-se enquanto a energia Reiki é canalizada através das mãos, percorrendo os chakras e pontos de tensão do corpo.' },
  //       { step: '03', title: 'Compartilhamento', desc: 'Após a sessão, compartilhamos as percepções e sensações. Você recebe orientações para manter o campo energético elevado.' }
  //     ],
  //     presencialDesc: 'Realizado em maca terapêutica, em nosso templo em Camaçari-BA. Um espaço sagrado com cristais, aromaterapia e sons de cura.',
  //     onlineDesc: 'O Reiki à distância (Reiki Remoto) tem a mesma eficácia comprovada. A energia não conhece limitações de tempo ou espaço.'
  //   },

  //   'mesa-radionica': {
  //     title: 'MESA RADIÔNICA',
  //     subtitle: 'Cura quântica além do espaço e do tempo',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_uxpslyuxpslyuxps%20(1).png',
  //     description: 'A Mesa Radiônica é um instrumento sofisticado de cura quântica que atua na transmutação de energias negativas, quebra de bloqueios e alinhamento dos corpos sutis. Operada por meio de radiestesia e radiônica, ela acessa o campo mórfico do indivíduo e promove transformações profundas.',
  //     quote: '"Tudo é frequência. Ajustar a sua é a maior alquimia possível."',
  //     duration: '75 a 90 minutos',
  //     sessionInfo: 'A Mesa Radiônica pode ser aplicada presencialmente ou à distância com igual eficácia. Uma fotografia e dados básicos são suficientes para estabelecer a conexão com o campo energético do solicitante.',
  //     benefits: [
  //       { icon: 'cleaning_services', title: 'Limpeza de Bloqueios', desc: 'Remove traumas, crenças limitantes e programações negativas gravadas nos corpos sutis ao longo desta e de outras vidas.' },
  //       { icon: 'sync', title: 'Transmutação', desc: 'Converte energias densas e negativas em vibrações elevadas, reorganizando o campo energético em padrões de harmonia e saúde.' },
  //       { icon: 'gavel', title: 'Harmonização', desc: 'Alinha o campo energético de pessoas, ambientes e relacionamentos, dissolvendo conflitos e atraindo coerência.' },
  //       { icon: 'electric_bolt', title: 'Ativação de Potenciais', desc: 'Desperta dons, talentos e potenciais adormecidos, sintonizando o indivíduo com sua linha de tempo mais elevada.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Mapeamento', desc: 'Através de radiestesia, mapeamos as áreas de interferência, bloqueios e desequilíbrios no campo energético multidimensional.' },
  //       { step: '02', title: 'Transmissão', desc: 'A Mesa processa as frequências de cura, transmutando as energias identificadas e reprogramando o campo com padrões de saúde.' },
  //       { step: '03', title: 'Ancoragem', desc: 'As novas frequências são ancoradas e lacradas no campo energético. Um relatório detalhado da sessão é entregue ao solicitante.' }
  //     ],
  //     presencialDesc: 'Em nosso templo em Camaçari-BA, com você presente e integrada ao processo de transmutação em tempo real.',
  //     onlineDesc: 'Totalmente eficaz à distância. Enviamos um relatório completo e conduzimos uma breve chamada de integração após a sessão.'
  //   },

  //   'cromoterapia': {
  //     title: 'CROMOTERAPIA',
  //     subtitle: 'A linguagem vibracional das cores',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_xjnj5sxjnj5sxjnj%20(1).png',
  //     description: 'Utilização das frequências vibracionais das cores para restaurar o equilíbrio do corpo e da mente. Cada cor possui um comprimento de onda específico que ressoa com diferentes órgãos, emoções e centros energéticos, promovendo saúde integral através da aplicação de luz direcionada.',
  //     quote: '"A cor é a linguagem que a alma fala quando as palavras não são suficientes."',
  //     duration: '45 a 60 minutos',
  //     sessionInfo: 'A sessão utiliza lâmpadas de cromoterapia, filtros e cristais coloridos posicionados estrategicamente sobre os chakras e pontos de tensão. A experiência é profundamente relaxante e reveladora.',
  //     benefits: [
  //       { icon: 'wb_sunny', title: 'Harmonização Chakral', desc: 'Cada chakra responde a uma cor específica do espectro. A cromoterapia reequilibra esses centros com precisão e naturalidade.' },
  //       { icon: 'favorite', title: 'Estímulo Emocional', desc: 'As cores atuam diretamente no sistema límbico, o centro emocional do cérebro, dissolvendo padrões de ansiedade, tristeza e medo.' },
  //       { icon: 'opacity', title: 'Bem-estar Físico', desc: 'Cores específicas estimulam a produção de hormônios, melhoram a circulação e fortalecem o sistema imunológico.' },
  //       { icon: 'lens', title: 'Clareza Mental', desc: 'Certas frequências luminosas melhoram a concentração, criatividade e clareza cognitiva de forma natural e não invasiva.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Diagnóstico', desc: 'Identificamos as cores deficientes e em excesso no seu campo energético, além das queixas físicas e emocionais do momento.' },
  //       { step: '02', title: 'Aplicação', desc: 'As cores terapêuticas são aplicadas sobre os pontos correspondentes usando lâmpadas, filtros e cristais coloridos.' },
  //       { step: '03', title: 'Equilíbrio', desc: 'Ao final, seu campo energético está reequilibrado. Orientações sobre cores para usar no dia a dia são compartilhadas.' }
  //     ],
  //     presencialDesc: 'Em nosso templo em Camaçari-BA, com equipamentos profissionais de cromoterapia e cristais amplificadores.',
  //     onlineDesc: 'A distância, com transmissão de frequências cromáticas e orientações de uso de cores no ambiente e vestuário pessoal.'
  //   },

  //   'cristaloterapia': {
  //     title: 'CRISTALOTERAPIA',
  //     subtitle: 'A sabedoria ancestral da Terra a serviço da sua cura',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_zfk7xuzfk7xuzfk7%20(1).png',
  //     description: 'O uso da energia vibracional dos cristais para harmonizar o campo energético, desbloquear centros vitais e promover a cura física, mental e espiritual. Os cristais são transmissores e amplificadores de energia que a Terra criou ao longo de milhões de anos para servir à nossa evolução.',
  //     quote: '"Os cristais são a memória da Terra — e eles lembram o que você esqueceu."',
  //     duration: '60 a 75 minutos',
  //     sessionInfo: 'Cristais específicos são selecionados intuitivamente e posicionados sobre e ao redor do corpo, sobre os chakras e pontos de pressão. A sessão induz um estado meditativo profundo de restauração.',
  //     benefits: [
  //       { icon: 'grain', title: 'Limpeza Áurica', desc: 'Os cristais absorvem e neutralizam as energias densas do campo áurico, restaurando a luminosidade e integridade da sua aura.' },
  //       { icon: 'shield', title: 'Proteção Energética', desc: 'Criação de um escudo vibracional que protege de influências externas negativas, psiquismo alheio e ambientes tóxicos.' },
  //       { icon: 'trending_up', title: 'Vitalidade', desc: 'Aumento do fluxo de energia vital (prana) em todos os níveis, resultando em disposição, entusiasmo e saúde radiante.' },
  //       { icon: 'diamond', title: 'Expansão de Consciência', desc: 'Cristais de alta vibração como a Selenita e o Cristal de Quartzo amplificam a percepção espiritual e a intuição.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Escolha Intuitiva', desc: 'Os cristais são selecionados para você de forma intuitiva e diagnóstica, alinhados com as necessidades do seu campo.' },
  //       { step: '02', title: 'Posicionamento', desc: 'Os cristais são dispostos em grades e sobre os chakras enquanto você descansa em estado de abertura e receptividade.' },
  //       { step: '03', title: 'Limpeza e Orientação', desc: 'Os cristais são limpos após a sessão. Você recebe orientações sobre quais cristais carregar ou ter em casa.' }
  //     ],
  //     presencialDesc: 'Em nosso templo em Camaçari-BA, com uma coleção especial de cristais de alta vibração, incluindo peças raras e programadas.',
  //     onlineDesc: 'À distância, com envio de uma grade cristalina programada com a sua intenção ou mediante orientação de uso dos seus próprios cristais.'
  //   },

  //   'limpeza-energetica': {
  //     title: 'LIMPEZA ENERGÉTICA',
  //     subtitle: 'Remova o que não é seu e reconquiste sua leveza',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_65cdri65cdri65cd%20(1).png',
  //     description: 'Um procedimento profundo para retirar densidades, energias estagnadas ou influências externas que impedem o seu fluxo natural. Essas interferências bloqueiam o sucesso, a saúde, os relacionamentos e a paz. A limpeza é o primeiro passo para uma vida de presença plena.',
  //     quote: '"Você não precisa carregar o peso do mundo. Deixe ir o que não é seu."',
  //     duration: '60 a 90 minutos',
  //     sessionInfo: 'A sessão combina técnicas de defumação, uso de sal, cristais e imposição de mãos para remover camada a camada as interferências energéticas. Pode incluir corte de cordões e limpeza de programações negativas.',
  //     benefits: [
  //       { icon: 'flare', title: 'Liberação de Cargas', desc: 'Eliminação de energias acumuladas no campo áurico: medos, mágoas, traumas, sentimentos alheios absorvidos inconscientemente.' },
  //       { icon: 'autorenew', title: 'Renovação do Campo', desc: 'Restauração da sua frequência vibracional original — aquela que existia antes das experiências difíceis.' },
  //       { icon: 'brightness_5', title: 'Leveza no Cotidiano', desc: 'Sensação imediata de clareza, alívio e bem-estar. A respiração fica mais fácil, o pensamento mais claro, as escolhas mais alinhadas.' },
  //       { icon: 'link_off', title: 'Corte de Cordões', desc: 'Dissolução de vínculos energéticos tóxicos com pessoas, situações e padrões que drenam sua energia vital.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Diagnóstico', desc: 'Identificamos os tipos de interferência presentes: densidades, influências externas, cordões, programações e entidades.' },
  //       { step: '02', title: 'Remoção', desc: 'Utilizando defumação, cristais, sal grosso e passes energéticos, removemos camada a camada cada interferência identificada.' },
  //       { step: '03', title: 'Lacre e Proteção', desc: 'O campo limpo é selado com luz e proteção. Orientações práticas para manter o campo limpo no pós-sessão são fornecidas.' }
  //     ],
  //     presencialDesc: 'Em nosso templo em Camaçari-BA, com o ritual completo de defumação, cristais e passes. A experiência presencial tem uma profundidade singular.',
  //     onlineDesc: 'À distância, com total eficácia. Você pode sentir a sessão acontecer em tempo real. Muitos relatam sensações físicas de leveza e calor durante o processo.'
  //   },

  //   'alinhamento-vibracional': {
  //     title: 'ALINHAMENTO VIBRACIONAL',
  //     subtitle: 'Sincronize-se com o seu propósito mais elevado',
  //     heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_20ttr820ttr820tt%20(1).png',
  //     description: 'Processo de sintonização profunda das frequências do indivíduo com o seu propósito de vida. Elimina interferências, reorganiza o sistema energético e reconecta você com a sua essência mais verdadeira — aquela que existia antes dos condicionamentos, traumas e crenças impostas pelo mundo.',
  //     quote: '"Quando você se alinha com quem realmente é, o universo conspira a seu favor."',
  //     duration: '90 minutos',
  //     sessionInfo: 'O Alinhamento Vibracional é a sessão mais completa do nosso atelier. Ela combina elementos do Reiki, Radiônica e Cristaloterapia, conduzida com mapeamento energético detalhado e intenção cirúrgica.',
  //     benefits: [
  //       { icon: 'gps_fixed', title: 'Conexão com Propósito', desc: 'Sintonização fina com sua missão de vida e dons de alma. Quando alinhado, o caminho fica claro e as oportunidades surgem naturalmente.' },
  //       { icon: 'waves', title: 'Sincronicidade', desc: 'Atração natural de situações, pessoas e oportunidades que resonam com sua nova frequência vibracional elevada.' },
  //       { icon: 'self_improvement', title: 'Paz Interior', desc: 'Harmonia absoluta entre as dimensões físicas, emocionais, mentais e espirituais do seu sistema pessoal.' },
  //       { icon: 'rocket_launch', title: 'Manifestação Acelerada', desc: 'Em alta vibração e alinhamento, seus pensamentos e intenções se materializam com muito mais velocidade e precisão.' }
  //     ],
  //     process: [
  //       { step: '01', title: 'Mapeamento Integral', desc: 'Avaliação completa do campo energético: chakras, corpo áurico, programações, missão de alma e pontos de desalinhamento.' },
  //       { step: '02', title: 'Alinhamento Multidimensional', desc: 'Combinação de técnicas para elevar a frequência, remover interferências e sintonizar cada camada do ser com o propósito maior.' },
  //       { step: '03', title: 'Ancoragem do Novo Campo', desc: 'As novas frequências são ancoradas com cristais e mantras. Um plano de manutenção vibracional personalizado é entregue.' }
  //     ],
  //     presencialDesc: 'Em nosso templo em Camaçari-BA. A sessão presencial de Alinhamento Vibracional é uma imersão completa de 90 minutos de pura transformação.',
  //     onlineDesc: 'À distância, com entrega de relatório detalhado de mapeamento e sessão de integração por videochamada ao final do processo.'
  //   }
  // };
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
    title: 'REIKI DO COMANDO DA TRÍADE DOS ARCANJOS',
    subtitle: 'Restaurando o fluxo da sua energia vital',
    heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_rigdtjrigdtjrigd%20(1).png',
    description: 'O Reiki do Comando da Tríade dos Arcanjos é uma metodologia exclusiva canalizada e documentada por Karla Tavares. Unindo a imposição de mãos tradicional à egrégora de cura dos Arcanjos Miguel, Rafael e Gabriel, esta prática atua diretamente nas esferas física, mental e espiritual, desintegrando bloqueios severos e restaurando a harmonia integral do ser.',
    quote: '"Onde a energia sintonizada com os Arcanjos flui, a cura acontece naturalmente."',
    duration: '60 minutos',
    sessionInfo: 'Você permanece vestida e deitada confortavelmente na maca. Através desta técnica documentada, a energia é direcionada cirurgicamente para os seus principais centros vitais, limpando e reestruturando a sua malha eletromagnética.',
    benefits: [
      { icon: 'spa', title: 'Metodologia Exclusiva', desc: 'Sessão fundamentada em uma técnica autoral canalizada, projetada para acessar frequências mais elevadas e acelerar curas profundas.' },
      { icon: 'refresh', title: 'Redução de Stress', desc: 'Ativa o sistema nervoso parassimpático, promovendo um relaxamento profundo que o corpo raramente experimenta no cotidiano moderno.' },
      { icon: 'bolt', title: 'Fluxo Energético', desc: 'Remove bloqueios densos causados por traumas, emoções reprimidas ou padrões de pensamento negativos acumulados ao longo do tempo.' },
      { icon: 'healing', title: 'Alinhamento dos Chakras', desc: 'Reequilibra os sete centros de energia vital do corpo sob a emanação e proteção direta da egrégora dos Arcanjos.' }
    ],
    process: [
      { step: '01', title: 'Acolhimento', desc: 'Uma breve conversa para entender seu momento e intenção. O ambiente é preparado com óleos essenciais e música de alta vibração.' },
      { step: '02', title: 'Canalização Arcanjo', desc: 'Você deita-se enquanto a energia do Reiki do Comando da Tríade é canalizada através das mãos, percorrendo os chakras e pontos de tensão do corpo.' },
      { step: '03', title: 'Compartilhamento', desc: 'Após a sessão, compartilhamos as percepções e sensações. Você recebe orientações para manter o campo energético elevado.' }
    ],
    presencialDesc: 'Realizado em maca terapêutica, em nosso templo em Camaçari-BA. Um espaço sagrado com cristais, aromaterapia e sons de cura.',
    onlineDesc: 'O Reiki à distância (Reiki Remoto) tem a mesma eficácia comprovada. A egrégora dos Arcanjos não conhece limitações de tempo ou espaço.'
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
        { icon: 'wb_sunny', title: 'Harmonização Chakral', desc: 'Cada chakra responde a uma cor específica do espectro. A cromoterapia reequilibra esses centers com precisão e naturalidade.' },
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
        { icon: 'flare', title: 'Liberacão de Cargas', desc: 'Eliminação de energias acumuladas no campo áurico: medos, mágoas, traumas, sentimentos alheios absorvidos inconscientemente.' },
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
    },

    'prosperidade-merecimento': {
      title: 'PROSPERIDADE & MERECIMENTO',
      subtitle: 'Alinhe sua energia ao fluxo da abundância e expansão',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_prosperidade.png',
      description: 'Um atendimento focado em destravar o fluxo da abundância na sua vida. Esta sessão combina a Mesa Radiônica de Manifestação e o Reiki voltado à prosperidade, utilizando também a ativação vibracional e gráficos radiônicos específicos para o fortalecimento do merecimento e dissolução de crenças de escassez.',
      quote: '"A abundância não é algo que adquirimos, é algo com o qual nos sintonizamos."',
      duration: '75 a 90 minutos',
      sessionInfo: 'Uma imersão profunda voltada para a sua expansão profissional e financeira. Através de ferramentas quânticas e energéticas, trabalhamos na raiz geométrica e espiritual dos seus bloqueios com o receber.',
      benefits: [
        { icon: 'trending_up', title: 'Desbloqueio da Escassez', desc: 'Identifica e limpa na raiz as travas financeiras e o medo inconsciente de faltar ou de receber.' },
        { icon: 'auto_awesome', title: 'Fortalecimento do Merecimento', desc: 'Reprograma o seu campo vibracional para que você se sinta genuinamente pronta e merecedora do melhor da vida.' },
        { icon: 'work_outline', title: 'Expansão Profissional', desc: 'Abre caminhos e sintoniza suas metas e carreira com uma frequência de sucesso e reconhecimento.' }
      ],
      process: [
        { step: '01', title: 'Diagnóstico', desc: 'Análise radiestésica para mapear onde estão os nós e travas que bloqueiam a sua energia de troca e ganho financeiro.' },
        { step: '02', title: 'Manifestação', desc: 'Ativação da Mesa Radiônica combinada com Reiki da Prosperidade e gráficos emissores para abrir o fluxo de abundância.' },
        { step: '03', title: 'Ancoragem', desc: 'Fixação das frequências de merecimento no seu campo. Você sai com clareza mental e direcionamento para agir em harmonia com a prosperidade.' }
      ],
      presencialDesc: 'Realizado em nosso templo em Camaçari-BA, com ativação de gráficos radiônicos físicos e cristais sintonizados na frequência da opulência.',
      onlineDesc: 'Via videochamada com total eficácia quântica. Você recebe o relatório das ativações e o direcionamento pós-sessão.'
    },

    'realinhamento-energetico': {
      title: 'REALINHAMENTO ENERGÉTICO & ESPIRITUAL',
      subtitle: 'Restaure seu equilíbrio emocional, energético e espiritual',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_realinhamento.png',
      description: 'Esta sessão traz o reequilíbrio profundo do seu campo através do Reiki do Comando da Tríade dos Arcanjos (Miguel, Rafael e Gabriel). Unindo a harmonização vibracional, a cromoterapia e uma leitura precisa da sua frequência energética, este atendimento promove um retorno ao seu centro, trazendo clareza e reconexão interior.',
      quote: '"Sob as asas da Tríade, a mente silencia e a alma encontra o seu prumo."',
      duration: '60 a 75 minutos',
      sessionInfo: 'Indicado para momentos de sobrecarga e ruído mental. O atendimento atua como um bálsamo que repara as fissuras do campo áurico e devolve a paz de espírito primordial.',
      benefits: [
        { icon: 'spa', title: 'Alívio da Ansiedade', desc: 'Acalma o sistema nervoso e o fluxo de pensamentos, desarmando os gatilhos que geram o desgaste emocional.' },
        { icon: 'shield', title: 'Proteção dos Arcanjos', desc: 'Ancoragem na energia de São Miguel, São Rafael e São Gabriel para um campo espiritual blindado e saudável.' },
        { icon: 'favorite_border', title: 'Reconexão Interior', desc: 'Resgata a sua força vital e devolve a sensação de presença, integrando corpo, mente e espírito.' }
      ],
      process: [
        { step: '01', title: 'Acolhimento', desc: 'Conversa inicial para leitura da sua frequência atual e identificação dos pontos de maior exaustão ou desconexão.' },
        { step: '02', title: 'Sintonização', desc: 'Aplicação do Reiki do Comando da Tríade dos Arcanjos em conjunto com frequências de cromoterapia para harmonização.' },
        { step: '03', title: 'Clareza', desc: 'Fechamento do campo energético, compartilhamento das percepções da leitura e orientações para manter a viabrção elevada.' }
      ],
      presencialDesc: 'Em nosso templo em Camaçari-BA, imerso em aromas sutis, luzes cromoterápicas e a egrégora física do Comando dos Arcanjos.',
      onlineDesc: 'À distância, com a mesma intensidade vibracional. A energia dos Arcanjos ultrapassa qualquer barreira física ou digital.'
    },

    'limpeza-protecao-desbloqueio': {
      title: 'LIMPEZA, PROTEÇÃO & DESBLOQUEIO ENERGÉTICO',
      subtitle: 'Libere pesos energéticos e reorganize seu campo vibracional',
      heroImage: 'https://pub-72dc93fc334e4d3f84eb4bfabf9eff67.r2.dev/Gemini_Generated_Image_limpeza.png',
      description: 'Um poderoso atendimento integrativo focado em desatar nós e eliminar cargas densas. Utiliza a Mesa Radiônica da Tríade dos Arcanjos, técnicas de limpeza energética profunda, transmutação vibracional e a ativação de gráficos radiônicos projetados especificamente para a reorganização do seu campo e liberação de bloqueios.',
      quote: '"Para que o novo se manifeste, o que é denso precisa ser transmutado."',
      duration: '75 a 90 minutos',
      sessionInfo: 'Ideal para quando a vida parece estagnada ou quando há uma sensação nítida de peso espiritual e repetição de padrões nocivos nos relacionamentos ou no cotidiano.',
      benefits: [
        { icon: 'link_off', title: 'Quebra de Padrões', desc: 'Desfaz a repetição de ciclos cármicos ou comportamentais que mantêm você presa às mesmas situações.' },
        { icon: 'cleaning_services', title: 'Fim do Travamento', desc: 'Limpa inveja, formas-pensamento e energias intrusas que causam a sensação de estagnação e cansaço inexplicável.' },
        { icon: 'gavel', title: 'Blindagem e Ordem', desc: 'Reorganiza geometricamente o seu campo áurico e ativa defesas radiônicas permanentes para proteção.' }
      ],
      process: [
        { step: '01', title: 'Rastreamento', desc: 'Acessamos o campo com a Mesa da Tríade dos Arcanjos para detectar focos de contaminação e fios energéticos tóxicos.' },
        { step: '02', title: 'Transmutação', desc: 'Execução da limpeza pesada e quebra de bloqueios. As energias densas são convertidas em pura luz e ordem cósmica.' },
        { step: '03', title: 'Selamento', desc: 'Ativação dos gráficos de proteção e entrega do diagnóstico detalhado para resguardar o seu campo limpo.' }
      ],
      presencialDesc: 'Realizado presencialmente em Camaçari-BA, unindo a operação da mesa quântica a rituais de defumação e cristais de alta proteção.',
      onlineDesc: 'Totalmente eficaz de forma remota. Um relatório completo com tudo o que foi limpo e ativado é enviado logo após o término.'
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