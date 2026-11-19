export const SOLO10 = {
  ATRIBUTOS: {
    corpo: {
      key: "corpo",
      label: "Corpo",
      reserva: "saude",
      reservaLabel: "Saúde",
      descricao: "Representa o quanto seu personagem é forte, ágil e resistente. Sempre será testado quando sua personagem tentar alguma proeza física."
    },
    espirito: {
      key: "espirito",
      label: "Espírito",
      reserva: "postura",
      reservaLabel: "Postura",
      descricao: "Representa a aparência, a manipulação e o carisma de seu personagem. Sempre será testado quando sua personagem tentar uma interação social."
    },
    mente: {
      key: "mente",
      label: "Mente",
      reserva: "vontade",
      reservaLabel: "Vontade",
      descricao: "Representa a inteligência, o raciocínio e a determinação de seu personagem. Sempre será testado quando sua personagem tentar solucionar um problema."
    }
  },

  PERICIAS: {
    artes: {
      key: "artes",
      label: "Artes",
      descricao: "Sua personagem é versada em pintura, canto, música, dança e demais expressões artísticas. Como tal, você consegue criar, reconhecer, avaliar, falsificar ou mesmo encantar pessoas com suas habilidades e técnicas refinadas, conseguindo influenciar a Postura de um grande número de pessoas ao mesmo tempo."
    },
    atletismo: {
      key: "atletismo",
      label: "Atletismo",
      descricao: "Sua personagem possui grandes habilidades em todo o grupo de exercícios físicos, sabendo escalar, correr, saltar, nadar e na prática de esportes. Como tal, você consegue empregar suas técnicas e conhecimentos nas mais diversas situações, como perseguir alguém por um caminho cheio de obstáculos."
    },
    combateDistancia: {
      key: "combateDistancia",
      label: "Combate a Distância",
      descricao: "Sua personagem é versada na utilização de diversas armas de combate a distância. Como tal, você não consegue apenas utilizar, mas também se posicionar de forma a tornar menos efetivo os ataques a distância de inimigos."
    },
    combateCorporal: {
      key: "combateCorporal",
      label: "Combate Corporal",
      descricao: "Sua personagem é versada em técnicas de combate corporal e armas brancas. Como tal, você consegue utilizar suas habilidades para subjugar oponentes, além de conseguir esquivar de ataques físicos realizados por inimigos e até mesmo reconhecer as técnicas e falhas de adversários através de estudo."
    },
    conducao: {
      key: "conducao",
      label: "Condução",
      descricao: "Sua personagem é capaz de conduzir os mais diversos animais e veículos, bem como conhece o básico na manutenção dos mesmos. Como tal, você é capaz de utilizar animais e veículos em perseguições e fugas."
    },
    conhecimento: {
      key: "conhecimento",
      label: "Conhecimento",
      descricao: "Sua personagem é versada nos mais diversos conhecimentos, sejam científicos, políticos ou humanos. Como tal, você é capaz de utilizá-los para resolver problemas diversos, bem como entender o real sentido das coisas."
    },
    idiomas: {
      key: "idiomas",
      label: "Idiomas",
      descricao: "Sua personagem possui um dom inato para compreender línguas e símbolos, aperfeiçoado com anos de práticas e estudos. Desta forma, você domina as línguas mais comuns (escolha 5 delas), além de ser especialista em códigos diversos."
    },
    investigacao: {
      key: "investigacao",
      label: "Investigação",
      descricao: "Sua personagem possui conhecimento das técnicas e métodos de investigação utilizados. Como tal, você consegue obter informações importantes em simples sinais encontrados ou descobrir pistas onde poucos são capazes."
    },
    manipulacao: {
      key: "manipulacao",
      label: "Manipulação",
      descricao: "Sua personagem possui o incrível dom de direcionar emocionalmente as pessoas para um determinado caminho que ele queira. Seja por meio da sedução, mentiras ou intimidação, você consegue obter informações ou impulsionar pessoas aos seus objetivos, mesmo que isto vá de encontro às suas vontades."
    },
    sobrevivencia: {
      key: "sobrevivencia",
      label: "Sobrevivência",
      descricao: "Sua personagem é capaz de sobreviver perfeitamente nas mais adversas situações. Encontrar abrigo, proteção e alimento não são difíceis, principalmente em locais ermos, mas você conseguirá sustentar a si mesmo e ao seu grupo."
    },
    subterfugio: {
      key: "subterfugio",
      label: "Subterfúgio",
      descricao: "Sua personagem é especialista nas técnicas de discrição e ladinagem. Como tal, você consegue se mover em silêncio, esconder-se, disfarçar-se, abrir fechaduras e cofres e roubar carteiras sem ser percebido."
    },
    oficios: {
      key: "oficios",
      label: "Ofícios",
      descricao: "Utilizada para criar ou melhorar Armas, Armaduras, Itens Mundanos, Edificações e Fortificações, bem como falsificações (capítulo RIQUEZAS E OFÍCIOS e Qualidade Falsificador)."
    },
    tecnologia: {
      key: "tecnologia",
      label: "Tecnologia",
      descricao: "Perícia em informática utilizada em testes como Mente (Tecnologia) (capítulo JOGANDO - EXEMPLO DE AÇÕES)."
    }
  },

  QUALIDADES: [
    {
      slug: "abastado",
      nome: "Abastado",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você possui uma fonte constante de renda definida na obtenção desta Qualidade (um parente rico, uma fortuna herdada, etc). Por este motivo, você começa com 2 vezes os Recursos Iniciais e, sempre que precisar e tiver contato com sua fonte de renda, poderá testar Espírito (Manipulação) para obter $ 100, mais $ 20 por ponto de Bônus de Poder."
    },
    {
      slug: "agil",
      nome: "Ágil",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui uma habilidade espantosa, que permite realizar proezas como escalar muralhas, se equilibrar em uma corda bamba, acrobacias e até mesmo cair de grandes alturas sem se ferir. Por este motivo, receba Vantagem em todos os testes de Corpo (Atletismo)."
    },
    {
      slug: "almaIluminada",
      nome: "Alma Iluminada",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você é agradável às pessoas, assim você é o alvo das atenções sempre que quiser. Você recebe Vantagem em todos os testes de Espírito (Manipulação) voltados a interação benéfica, não funcionando para ameaçar ou prejudicar um alvo."
    },
    {
      slug: "ambidestria",
      nome: "Ambidestria",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você consegue utilizar duas armas de combate corporal ao mesmo tempo, uma em cada mão, perfazendo combinações de golpes poderosos. Assim, você consegue realizar dois ataques por turno sem rolar os mesmos em Desvantagem. Para usar esta Qualidade, nenhuma das duas armas poderá ter a característica Pesada e você não pode usar escudo de forma defensiva ao lutar desta forma."
    },
    {
      slug: "ameacador",
      nome: "Ameaçador",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você consegue amedrontar pessoas com sua presença, forçando-as a atender suas demandas. Por este motivo, receba Vantagem em todos os testes de Espírito (Manipulação) voltados a interação forçada, funcionando para ameaçar ou prejudicar um alvo."
    },
    {
      slug: "amigoDosAnimais",
      nome: "Amigo dos Animais",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui uma lida poderosa para com animais, mesmo os selvagens, permitindo que você se aproxime deles, os dome e até mesmo que eles realizem aquilo que você quer. Por este motivo, receba Vantagem em todos os testes de Condução, Conhecimento e Manipulação voltados a interação com eles."
    },
    {
      slug: "aparenciaInofensiva",
      nome: "Aparência Inofensiva",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Ao ver você, seus Adversários (não funciona com Armadilhas e Perigos Naturais) não imaginam o quão perigoso você pode ser e, por isto, não o atacarão prontamente, baixando a guarda. Por este motivo, o Perigo destes Adversários sempre será 10 ao te encontrar, voltando ao normal tão logo percebam que você representa algum perigo para eles."
    },
    {
      slug: "armadilheiro",
      nome: "Armadilheiro",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você é capaz de criar perigosas armadilhas que podem minar as forças de seus inimigos, atrasar seu avanço e até mesmo mata-los. Faça um teste de Mente (Sobrevivência) para montar a armadilha (todas as armadilhas do capítulo ARMADILHAS estão disponíveis) e seu efeito será acrescido conforme seu Bônus de Poder."
    },
    {
      slug: "aristocrata",
      nome: "Aristocrata",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 4,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você possui um porte e uma postura dignas de um nobre ou um líder, mostrando-se sempre imponente e altivo. Por este motivo, você recebe +4 pontos de Postura."
    },
    {
      slug: "atiradorDeElite",
      nome: "Atirador de Elite",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Você é um especialista em combate a distância, utilizando como poucos arcos, bestas, fundas e outras armas deste tipo. Por este motivo, receba um bônus de +2 nos testes de Corpo (Combate a Distância)."
    },
    {
      slug: "ataqueEmArco",
      nome: "Ataque em Arco",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você consegue realizar golpes amplos, atingindo vários Adversários de uma só vez. Quando quiser utilizar esta Qualidade, realize um teste de Corpo (Combate Corporal) contra o Adversário que estiver no seu alcance com maior Perigo. Em caso de sucesso, você causa uma quantidade de dano igual ao Bônus de Poder do ataque a todos os Adversários que estiverem engajados com você."
    },
    {
      slug: "ataqueSelvagem",
      nome: "Ataque Selvagem",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 5,
      concedeVantagem: false,
      descricao: "Você investe contra seus Adversários de forma furiosa, atacando sem se preocupar com sua segurança e com contra-ataques. Por este motivo, receba um bônus de +5 nos testes de Corpo (Combate Corporal), mas abdique de qualquer defesa durante o turno em que utilizar esta Vantagem, podendo apenas resistir ao dano com sua armadura."
    },
    {
      slug: "boaVida",
      nome: "Boa Vida",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui uma habilidade extraordinária de viver bem em qualquer cidade em que esteja, se tornando amigo de pessoas influentes e estando sempre no lugar certo na hora certa. Por este motivo, sempre que for realizar um teste de Espírito para obter favores para se manter, faça o teste com Vantagem. Caso a Postura do alvo chegue a 0 após a rolagem de Espírito, ele se manterá extremamente afeito a você constantemente, mudando suas atitudes apenas se você causar problemas."
    },
    {
      slug: "camaleao",
      nome: "Camaleão",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você possui a capacidade de se fazer passar por outras pessoas caso tenha tempo para se preparar. Com um teste de Mente (Subterfúgio), você consegue se disfarçar de pessoas com a altura próxima a sua. O Bônus de Poder reduzirá o Perigo de Adversários e, caso o mesmo fique inferior a 10, o Adversário não o atacará enquanto você não revelar suas intenções ou ser descoberto de alguma forma."
    },
    {
      slug: "caoDeBriga",
      nome: "Cão de Briga",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Você é um especialista em combate desarmado, utilizando força e velocidade de forma precisa para espancar seus oponentes. Por este motivo, receba um bônus de +2 nos testes de Corpo (Combate Corporal) quando estiver combatendo desarmado."
    },
    {
      slug: "cuidadoso",
      nome: "Cuidadoso",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você sempre busca fazer as coisas da forma menos perigosa possível. Por este motivo, sempre que você for confrontar Armadilhas ou Perigos Naturais, ignore por completo o Perigo dos mesmos, realizando seus testes sempre contra a dificuldade 10."
    },
    {
      slug: "curandeiro",
      nome: "Curandeiro",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você é um especialista em curar ferimentos e doenças. Realize um teste de Mente (Conhecimento) e em caso de sucesso, você consegue administrar medicamentos que curam doenças mundanas (não funcionando para maldições) ou 2 + Bônus de Poder pontos de Saúde. Utilizar esta Qualidade requer tempo e calma, não podendo ser utilizada no meio de um combate ou em uma viagem forçada."
    },
    {
      slug: "defensor",
      nome: "Defensor",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 1,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Você é um especialista em combate defensivo, utilizando armaduras, escudos e técnicas de defesa como poucos. Por este motivo, você recebe +1 na sua Resistência a Dano e +2 nos testes para se defender de ataques físicos (não funciona com ataques feitos com Espírito e Mente)."
    },
    {
      slug: "desarme",
      nome: "Desarme",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Durante um combate, você é especialista em desarmar seu oponente, fazendo com que ele fique a sua mercê. Sempre que quiser realizar esta manobra, faça um teste de Corpo (Combate Corporal) e em caso de sucesso, você conseguirá desarmar seu oponente. Esta habilidade não funciona caso a arma esteja, de alguma forma, presa. Tal manobra é tão desmoralizante que você desconta seu Bônus de Poder na Postura do seu Adversário. Caso a Postura seja reduzida a 0, ele se renderá."
    },
    {
      slug: "destemido",
      nome: "Destemido",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você não aceita a derrota de forma alguma, lutando até suas últimas forças contra tudo que o mundo lançar contra você. Por este motivo, você é imune a efeitos de medo, além de poder gastar seus pontos de Vontade para resistir aos ferimentos assim que sua reserva de Saúde se esgotar, caindo apenas quando ambas as reservas chegarem a 0."
    },
    {
      slug: "dividaDeHonra",
      nome: "Dívida de Honra",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você fez algo muito importante para uma pessoa muito influente e poderosa que deve ser definida na obtenção desta Qualidade (um poderoso nobre, um líder militar, um rico comerciante, etc) e esta pessoa possui uma dívida de honra com você. Assim, sempre que for realizar um teste de Espírito para obter favores para se manter, faça o teste com Vantagem."
    },
    {
      slug: "falsificador",
      nome: "Falsificador",
      tipo: "ativa",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Você é capaz de criar falsificações de itens de forma semelhante às regras do capítulo OFÍCIOS, podendo comercializá-los e enganar pessoas com pouco conhecimento na área. Além disto, você recebe +2 nos testes da perícia Ofícios ao fazer suas falsificações."
    },
    {
      slug: "forcaTitanica",
      nome: "Força Titânica",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui uma força descomunal, que permite que você realize proezas incríveis como erguer uma grande carga, arrombar uma porta, entortar uma barra de ferro, etc. Por este motivo, receba Vantagem em todos os testes de Corpo envolvendo força física (não válido para combate)."
    },
    {
      slug: "genial",
      nome: "Genial",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui um intelecto brilhante, que o permite feitos mentais possíveis para poucas pessoas. Por este motivo, receba Vantagem em todos os testes de Mente (Conhecimento ou Idiomas)."
    },
    {
      slug: "golpista",
      nome: "Golpista",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui as manhas das ruas, conhecendo diversas técnicas que permitem que você engane e tire proveito de todo tipo de vítima. Por este motivo, receba Vantagem em todos os testes de Espírito (Manipulação) voltados a enganar seus alvos."
    },
    {
      slug: "homemDeArmas",
      nome: "Homem de Armas",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Você é um especialista em combate franco, usando todo tipo de arma pesada ou de duas mãos. Por este motivo, receba um bônus de +2 nos testes de Corpo (Combate Corporal) apenas quando estiver usando armas pesadas ou de duas mãos."
    },
    {
      slug: "honrado",
      nome: "Honrado",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Sua fama como cavaleiro e pessoa honrada o precede, tornando-o bem quisto em determinados locais. Em compensação, criminosos podem ver sua presença como uma ameaça. Por este motivo, receba +2 nos testes de Espírito com aqueles que conhecem sua fama."
    },
    {
      slug: "lutadorVeloz",
      nome: "Lutador Veloz",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 2,
      concedeVantagem: false,
      descricao: "Você é um especialista em combate com armas e armaduras leves, priorizando a velocidade ao invés da força bruta. Por este motivo, receba um bônus de +2 nos testes de Corpo (Combate Corporal) e +1 na sua Resistência a Dano apenas quando estiver usando armas e armaduras leves e nenhum escudo."
    },
    {
      slug: "maosLeves",
      nome: "Mãos Leves",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui mãos rápidas e leves, perfeitas para aliviar suas vítimas de suas moedas e pertences valiosos. Por este motivo, você recebe Vantagem em todos os testes de Corpo (Subterfúgio) feitos para abrir fechaduras e cofres e roubar carteiras."
    },
    {
      slug: "perito",
      nome: "Perito",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você é mais habilidoso que a maioria da população. Por este motivo, você possui uma Perícia extra, que deve ser escolhida na criação do personagem."
    },
    {
      slug: "perseverante",
      nome: "Perseverante",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 4,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você possui uma incrível resistência a influências mentais e uma vontade de ferro. Por este motivo, você recebe +4 pontos de Vontade."
    },
    {
      slug: "poliglota",
      nome: "Poliglota",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você possui grande facilidade com os mais variados idiomas e, por este motivo, consegue ler e escrever (se o idioma possuir escrita) em 5 idiomas diferentes."
    },
    {
      slug: "protetor",
      nome: "Protetor",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você é um especialista em proteger seus aliados que estejam próximos a você. Por este motivo, sempre que você estiver próximo a algum aliado, você pode fazer o teste de defesa no lugar dele (não funciona com ataques feitos com Espírito e Mente)."
    },
    {
      slug: "rastrosInvisiveis",
      nome: "Rastros Invisíveis",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você é um especialista em se esconder e andar furtivamente. Por este motivo, você recebe Vantagem em todos os testes de Corpo (Subterfúgio) feitos para andar furtivamente e para se esconder."
    },
    {
      slug: "redeDeContatos",
      nome: "Rede de Contatos",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Não importa a cidade onde esteja, você sempre possuirá ou conseguirá rapidamente estabelecer uma rede de contatos que poderá te ajudar em diversas situações. Por este motivo, sempre que for realizar um teste de Espírito para obter favores para se manter, faça o teste com Vantagem. Caso a Postura do alvo chegue a 0 após a rolagem de Espírito, ele se manterá extremamente fiel a você constantemente, mudando sua postura apenas se você causar problemas."
    },
    {
      slug: "reflexosDeCombate",
      nome: "Reflexos de Combate",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você nunca é surpreendido em combate e, por este motivo, sempre será o primeiro a atacar. Caso queira, poderá atrasar seu ataque, agindo quando bem entender. Se outro personagem possuir esta Qualidade, vocês poderão escolher a ordem em que cada um vai atacar, da mesma forma que é estabelecido no Capítulo JOGANDO DE FORMA COOPERATIVA."
    },
    {
      slug: "sentidosAgucados",
      nome: "Sentidos Aguçados",
      tipo: "passiva",
      bonusSaude: 0,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: true,
      descricao: "Você possui sentidos incríveis, capazes de perceber quase tudo que acontece a sua volta, funcionando de forma parecida com um Sexto Sentido. Por este motivo, receba Vantagem em todos os testes de Mente (Investigação)."
    },
    {
      slug: "vigoroso",
      nome: "Vigoroso",
      tipo: "passiva",
      bonusSaude: 4,
      bonusPostura: 0,
      bonusVontade: 0,
      bonusRD: 0,
      bonusTeste: 0,
      concedeVantagem: false,
      descricao: "Você possui uma incrível resistência física e uma saúde de ferro. Por este motivo, você recebe +4 pontos de Saúde."
    }
  ],

  ARMAS_PADRAO: [
    {
      nome: "Desarmado",
      alcance: "corporal",
      tipoDano: "corpo",
      bonusDano: 0,
      danoFixo: 0,
      leve: true,
      pesada: false,
      duasMaos: false,
      descricao: "Dano: Atributo Corpo"
    },
    {
      nome: "Faca, Punhal, Soqueira (Corporal +1)",
      alcance: "corporal",
      tipoDano: "corpo",
      bonusDano: 1,
      danoFixo: 0,
      leve: true,
      pesada: false,
      duasMaos: false,
      descricao: "Faca, Punhal, Soqueira ou semelhante. Dano: Atributo Corpo +1"
    },
    {
      nome: "Arco e Flecha, Pistola, Revólver (Distância +1)",
      alcance: "distancia",
      tipoDano: "corpo",
      bonusDano: 1,
      danoFixo: 0,
      leve: true,
      pesada: false,
      duasMaos: false,
      descricao: "Arco e Flecha, Pistola, Revólver ou semelhante. Dano: Atributo Corpo +1"
    },
    {
      nome: "Facão, Espada, Lança (Corporal +2)",
      alcance: "corporal",
      tipoDano: "corpo",
      bonusDano: 2,
      danoFixo: 0,
      leve: false,
      pesada: false,
      duasMaos: false,
      descricao: "Facão, Espada, Lança ou semelhante. Dano: Atributo Corpo +2"
    },
    {
      nome: "Espingarda, Escopeta (Distância +2)",
      alcance: "distancia",
      tipoDano: "corpo",
      bonusDano: 2,
      danoFixo: 0,
      leve: false,
      pesada: false,
      duasMaos: true,
      descricao: "Espingarda, Escopeta ou semelhante. Dano: Atributo Corpo +2"
    },
    {
      nome: "Machado, Martelo, Espada Larga (Corporal +3)",
      alcance: "corporal",
      tipoDano: "corpo",
      bonusDano: 3,
      danoFixo: 0,
      leve: false,
      pesada: true,
      duasMaos: true,
      descricao: "Machado, Martelo, Espada Larga ou semelhante. Dano: Atributo Corpo +3"
    },
    {
      nome: "Metralhadora, Fuzil (Distância +3)",
      alcance: "distancia",
      tipoDano: "corpo",
      bonusDano: 3,
      danoFixo: 0,
      leve: false,
      pesada: true,
      duasMaos: true,
      descricao: "Metralhadora, Fuzil ou semelhante. Dano: Atributo Corpo +3"
    },
    {
      nome: "Arco Granadas",
      alcance: "distancia",
      tipoDano: "fixo",
      bonusDano: 0,
      danoFixo: 6,
      leve: false,
      pesada: true,
      duasMaos: true,
      descricao: "Dano: 6"
    },
    {
      nome: "Explosivos (Fracos)",
      alcance: "distancia",
      tipoDano: "fixo",
      bonusDano: 0,
      danoFixo: 8,
      leve: false,
      pesada: false,
      duasMaos: false,
      descricao: "Dano: 8 (fracos)"
    },
    {
      nome: "Explosivos (Fortes)",
      alcance: "distancia",
      tipoDano: "fixo",
      bonusDano: 0,
      danoFixo: 15,
      leve: false,
      pesada: true,
      duasMaos: false,
      descricao: "Dano: 15 (fortes)"
    }
  ],

  ARMADURAS_PADRAO: [
    {
      nome: "Roupas Pesadas ou Coletes Leves",
      resistenciaDano: 1,
      penalidadeAgilidade: false,
      escudo: false,
      leve: true,
      descricao: "Reduz 1 de dano."
    },
    {
      nome: "Cotas de Malha, Coletes Pesados e Armadura de Couro",
      resistenciaDano: 2,
      penalidadeAgilidade: false,
      escudo: false,
      leve: false,
      descricao: "Reduz 2 de dano."
    },
    {
      nome: "Armaduras Táticas ou de Batalha*",
      resistenciaDano: 3,
      penalidadeAgilidade: true,
      escudo: false,
      leve: false,
      descricao: "Reduz 3 de dano. *Caso esteja equipado com uma destas armaduras, você sempre realizará testes de Corpo relacionados as habilidades destreza e agilidade com desvantagem."
    },
    {
      nome: "Escudo*",
      resistenciaDano: 1,
      penalidadeAgilidade: true,
      escudo: true,
      leve: false,
      descricao: "Reduz 1 de dano extra. *Caso esteja equipado com uma destas armaduras, você sempre realizará testes de Corpo relacionados as habilidades destreza e agilidade com desvantagem."
    }
  ],

  CATEGORIAS_EQUIPAMENTO: {
    equipamento: {
      label: "Equipamento",
      color: "#4a5568",
      icon: "icons/svg/item-bag.svg",
      sort: 100
    },
    vestuario: {
      label: "Vestuário",
      color: "#5b6c5d",
      icon: "icons/svg/cowled.svg",
      sort: 200
    },
    alimentacao: {
      label: "Alimentação",
      color: "#8c5a3c",
      icon: "icons/svg/tankard.svg",
      sort: 300
    },
    outro: {
      label: "Outro",
      color: "#718096",
      icon: "icons/svg/chest.svg",
      sort: 400
    }
  },

  EQUIPAMENTOS_PADRAO: [
    // =========================================================================
    // EQUIPAMENTO (39 itens — Tabela 10, Heróis & Hordas / Solo 10)
    // =========================================================================
    {
      nome: "Alforje para Animal",
      categoria: "equipamento",
      custo: 30,
      descricao: "Permite carregar até 10 outros itens (cada unidade de recurso conta como um item) na montaria."
    },
    {
      nome: "Algemas",
      categoria: "equipamento",
      custo: 50,
      descricao: "Deixa um Adversário preso até conseguir se libertar."
    },
    {
      nome: "Algibeira",
      categoria: "equipamento",
      custo: 30,
      descricao: "Permite carregar até 5 outros itens (cada unidade de recurso conta como um item) sem ocupar as mãos."
    },
    {
      nome: "Aljava",
      categoria: "equipamento",
      custo: 30,
      descricao: "Permite carregar até 5 unidades de munição."
    },
    {
      nome: "Ampulheta",
      categoria: "equipamento",
      custo: 100,
      descricao: "Permite o registro de tempo de forma precisa."
    },
    {
      nome: "Apito",
      categoria: "equipamento",
      custo: 5,
      descricao: "Serve para alertar ou emitir chamados a longas distâncias."
    },
    {
      nome: "Barraca",
      categoria: "equipamento",
      custo: 50,
      descricao: "Permite abrigar até 4 personagens dos efeitos do clima."
    },
    {
      nome: "Baú",
      categoria: "equipamento",
      custo: 100,
      descricao: "Permite carregar até 10 outros itens (cada unidade de recurso conta como um item) trancados, sendo necessária a chave ou um teste de Corpo (Subterfúgio) para arrombar."
    },
    {
      nome: "Caneca",
      categoria: "equipamento",
      custo: 3,
      descricao: "Uma boa e resistente caneca de madeira reforçada com metal, perfeita para viagem."
    },
    {
      nome: "Cantil",
      categoria: "equipamento",
      custo: 10,
      descricao: "Permite carregar uma unidade de Alimento (água ou outra bebida)."
    },
    {
      nome: "Componentes Mágicos",
      categoria: "equipamento",
      custo: 10,
      descricao: "O recurso componente mágico serve genericamente para qualquer usuário de magia. Cada unidade concede 10 pontos de Vontade que podem ser utilizados na conjuração das mais diversas magias no lugar dos pontos de Vontade do usuário."
    },
    {
      nome: "Corda com Gancho",
      categoria: "equipamento",
      custo: 25,
      descricao: "Este pedaço de corda possui uma série de utilidades, desde amarrar alguém (semelhante às Algemas) como auxiliar na escalada, concedendo Vantagem nos testes de Corpo (Atletismo)."
    },
    {
      nome: "Equipamento de Pesca",
      categoria: "equipamento",
      custo: 30,
      descricao: "Este kit com ferramentas básicas de pesca concede Vantagem nos testes de Corpo (Sobrevivência) para pescar."
    },
    {
      nome: "Espelho de Metal Pequeno",
      categoria: "equipamento",
      custo: 30,
      descricao: "Um espelho feito com cobre ou prata barata, bastante polido, com uma boa capacidade reflexiva caso esteja limpo."
    },
    {
      nome: "Ferramentas",
      categoria: "equipamento",
      custo: 100,
      descricao: "Este conjunto de ferramentas profissionais concede Vantagem em todos os testes de Ofícios da referida área."
    },
    {
      nome: "Instrumento Musical",
      categoria: "equipamento",
      custo: 100,
      descricao: "Concede Vantagem em testes de Espírito (Artes) ao ser tocado."
    },
    {
      nome: "Isqueiro e Pederneira",
      categoria: "equipamento",
      custo: 5,
      descricao: "Permite acender fogueiras e outros materiais combustíveis."
    },
    {
      nome: "Kit de Arrombamento",
      categoria: "equipamento",
      custo: 50,
      descricao: "Kit profissional: conjunto de ferramentas que concede Vantagem em todos os testes de arrombamento."
    },
    {
      nome: "Kit de Costura",
      categoria: "equipamento",
      custo: 15,
      descricao: "Ferramentas básicas de costura para criar, ajustar ou reparar roupas e outros itens de tecido."
    },
    {
      nome: "Kit de Estudos",
      categoria: "equipamento",
      custo: 100,
      descricao: "Kit profissional: conjunto de ferramentas que concede Vantagem em todos os testes de estudos (também usado para preparar poções, venenos e itens mágicos)."
    },
    {
      nome: "Kit de Medicina",
      categoria: "equipamento",
      custo: 100,
      descricao: "Kit profissional: conjunto de ferramentas que concede Vantagem em todos os testes de medicina (também usado para criar unguentos)."
    },
    {
      nome: "Kit de Sobrevivência",
      categoria: "equipamento",
      custo: 50,
      descricao: "Kit profissional: conjunto de ferramentas que concede Vantagem em todos os testes de sobrevivência."
    },
    {
      nome: "Lanterna",
      categoria: "equipamento",
      custo: 25,
      descricao: "Esta lanterna a óleo permite iluminar ambientes escuros. Sem ela, qualquer teste que envolva a visão em ambientes escuros será feito com Desvantagem."
    },
    {
      nome: "Luneta",
      categoria: "equipamento",
      custo: 200,
      descricao: "Permite que você veja com perfeição qualquer elemento dentro do raio de 1 km."
    },
    {
      nome: "Mapa",
      categoria: "equipamento",
      custo: 30,
      descricao: "Permite se orientar em terrenos desconhecidos. Sem ele, todos os testes de Mente (Sobrevivência) para encontrar um lugar específico são feitos com Desvantagem."
    },
    {
      nome: "Mochila",
      categoria: "equipamento",
      custo: 30,
      descricao: "Permite que o personagem carregue até 10 outros itens (cada unidade de recurso conta como um item) sem ocupar suas mãos."
    },
    {
      nome: "Munição",
      categoria: "equipamento",
      custo: 5,
      descricao: "O recurso munição serve genericamente para qualquer arma de ataque à distância utilizada. Cada unidade permite que o jogador realize 10 ataques com a arma, quando então ela se esgota e precisa ser renovada."
    },
    {
      nome: "Óleo para Lanterna",
      categoria: "equipamento",
      custo: 10,
      descricao: "Material combustível utilizado em Lanternas."
    },
    {
      nome: "Pá",
      categoria: "equipamento",
      custo: 30,
      descricao: "Ferramenta utilizada para cavar buracos, valas e trincheiras."
    },
    {
      nome: "Panelas",
      categoria: "equipamento",
      custo: 30,
      descricao: "Ferramentas utilizadas para cozinhar."
    },
    {
      nome: "Pé-de-Cabra",
      categoria: "equipamento",
      custo: 25,
      descricao: "Permite arrombar e alavancar elementos fechados, concedendo Vantagem nos testes de Corpo (Subterfúgio)."
    },
    {
      nome: "Pedra de Amolar",
      categoria: "equipamento",
      custo: 10,
      descricao: "Ferramenta utilizada para amolar armas."
    },
    {
      nome: "Pergaminho",
      categoria: "equipamento",
      custo: 10,
      descricao: "Um rolo de pergaminho em branco."
    },
    {
      nome: "Picareta",
      categoria: "equipamento",
      custo: 30,
      descricao: "Ferramenta utilizada para quebrar pedras e superfícies duras."
    },
    {
      nome: "Saco de Dormir",
      categoria: "equipamento",
      custo: 30,
      descricao: "Permite dormir ao relento de forma confortável (auxilia contra efeitos do clima)."
    },
    {
      nome: "Sela e Arreios",
      categoria: "equipamento",
      custo: 100,
      descricao: "Serve para montar com conforto uma montaria. Sem eles, os testes de Corpo (Condução) são feitos em Desvantagem."
    },
    {
      nome: "Saco",
      categoria: "equipamento",
      custo: 5,
      descricao: "Permite carregar até 5 outros itens (cada unidade de recurso conta como um item)."
    },
    {
      nome: "Tocha",
      categoria: "equipamento",
      custo: 2,
      descricao: "Permite iluminar ambientes escuros. Sem ela, qualquer teste que envolva a visão em ambientes escuros será feito com Desvantagem."
    },
    {
      nome: "Tomo",
      categoria: "equipamento",
      custo: 100,
      descricao: "Livro em branco para registro de diversas informações."
    },

    // =========================================================================
    // VESTUÁRIO (16 itens — Tabela 10, Heróis & Hordas / Solo 10)
    // =========================================================================
    {
      nome: "Botas",
      categoria: "vestuario",
      custo: 20,
      descricao: "Peça de vestuário para os pés. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Calça",
      categoria: "vestuario",
      custo: 15,
      descricao: "Peça de vestuário básica. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Camisa",
      categoria: "vestuario",
      custo: 15,
      descricao: "Peça de vestuário básica. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Capa",
      categoria: "vestuario",
      custo: 15,
      descricao: "Peça de vestuário básica. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Capa com Capuz",
      categoria: "vestuario",
      custo: 20,
      descricao: "Capa com capuz. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Chapéu",
      categoria: "vestuario",
      custo: 20,
      descricao: "Peça de vestuário para a cabeça. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Luvas",
      categoria: "vestuario",
      custo: 15,
      descricao: "Peça de vestuário para as mãos. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Manto",
      categoria: "vestuario",
      custo: 20,
      descricao: "Manto de vestuário/viagem. Pode ser adquirido nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Casaca",
      categoria: "vestuario",
      custo: 30,
      descricao: "Peça de vestuário comprida. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Vestido",
      categoria: "vestuario",
      custo: 30,
      descricao: "Peça de vestuário. Pode ser adquirida nos modelos de Frio (Valor x 2), Qualidade (Valor x 2), Trabalho (Valor x 2) ou Luxuosas (Valor x 4)."
    },
    {
      nome: "Óculos",
      categoria: "vestuario",
      custo: 50,
      descricao: "Acessório óptico de vestuário."
    },
    {
      nome: "Roupas de Frio (Valor x 2)",
      categoria: "vestuario",
      custo: 0,
      descricao: "Modificador de vestuário (Valor x 2 sobre o preço base da peça): a peça auxilia em climas frios."
    },
    {
      nome: "Roupas de Qualidade (Valor x 2)",
      categoria: "vestuario",
      custo: 0,
      descricao: "Modificador de vestuário (Valor x 2 sobre o preço base da peça): a peça é adequada para eventos."
    },
    {
      nome: "Roupas Luxuosas (Valor x 4)",
      categoria: "vestuario",
      custo: 0,
      descricao: "Modificador de vestuário (Valor x 4 sobre o preço base da peça): a peça é adequada para eventos na presença de nobres."
    },
    {
      nome: "Roupas de Trabalho (Valor x 2)",
      categoria: "vestuario",
      custo: 0,
      descricao: "Modificador de vestuário (Valor x 2 sobre o preço base da peça): a peça é resistente e adequada para todo tipo de trabalho."
    },
    {
      nome: "Cobertor de Inverno",
      categoria: "vestuario",
      custo: 30,
      descricao: "A peça auxilia em climas frios."
    },

    // =========================================================================
    // ALIMENTAÇÃO (8 itens — Tabela 10, Heróis & Hordas / Solo 10)
    // =========================================================================
    {
      nome: "Ração para Viagem",
      categoria: "alimentacao",
      custo: 5,
      descricao: "Cada unidade permite alimentar um personagem por um dia ou retirar um marcador de Fome."
    },
    {
      nome: "Refeição Simples",
      categoria: "alimentacao",
      custo: 5,
      descricao: "Refeição básica. Cada unidade permite alimentar um personagem por um dia ou retirar um marcador de Fome."
    },
    {
      nome: "Refeição Padrão",
      categoria: "alimentacao",
      custo: 8,
      descricao: "Refeição comum. Cada unidade permite alimentar um personagem por um dia ou retirar um marcador de Fome."
    },
    {
      nome: "Refeição Suntuosa",
      categoria: "alimentacao",
      custo: 10,
      descricao: "Refeição farta e refinada. Cada unidade permite alimentar um personagem por um dia ou retirar um marcador de Fome."
    },
    {
      nome: "Água",
      categoria: "alimentacao",
      custo: 1,
      descricao: "Unidade de água potável (pode ser carregada em Cantil)."
    },
    {
      nome: "Cerveja ou Vinho",
      categoria: "alimentacao",
      custo: 3,
      descricao: "Bebida alcoólica. Sempre que consumir bebidas alcoólicas em quantidade de doses maior do que seu Atributo Corpo, faça um teste de Corpo (Sobrevivência); em caso de falha, seus testes serão feitos com Desvantagem até que você se cure da bebedeira."
    },
    {
      nome: "Aguardente ou outra bebida forte",
      categoria: "alimentacao",
      custo: 5,
      descricao: "Bebida alcoólica forte. Sempre que consumir bebidas alcoólicas em quantidade de doses maior do que seu Atributo Corpo, faça um teste de Corpo (Sobrevivência); em caso de falha, seus testes serão feitos com Desvantagem até que você se cure da bebedeira."
    },
    {
      nome: "Ração para Animais",
      categoria: "alimentacao",
      custo: 3,
      descricao: "Cada unidade permite alimentar um animal por um dia ou retirar um marcador de Fome."
    }
  ],

  SETORES: [
    {
      nome: "Cidade Nova",
      descricao: "A parte mais desenvolvida e cuja ocupação é normalmente maior na cidade. Lugar do comércio mais diversificado e maiores oportunidades de emprego."
    },
    {
      nome: "Cidade Velha",
      descricao: "Antigo centro da cidade, onde os prédios públicos e residências mais antigas se encontram."
    },
    {
      nome: "Centro Industrial",
      descricao: "Área de indústrias pesadas e grandes pátios industriais."
    },
    {
      nome: "Porto",
      descricao: "Área de embarcações, pátios de containers e imensos galpões logísticos."
    },
    {
      nome: "Ermo",
      descricao: "Grandes parques urbanos, sítios, campos ou fazendas próximas à cidade, onde poucas pessoas vivem e a tranquilidade normalmente reina."
    }
  ],

  UNIDADES_EXERCITO: [
    { key: "aldeao", nome: "Aldeão/Serviçal", poder: 2 },
    { key: "guarda", nome: "Guarda", poder: 3 },
    { key: "guardaTreinado", nome: "Guarda Treinado", poder: 4 },
    { key: "infantariaLeve", nome: "Infantaria Leve", poder: 3 },
    { key: "infantariaMedia", nome: "Infantaria Média", poder: 4 },
    { key: "infantariaPesada", nome: "Infantaria Pesada", poder: 5 },
    { key: "arqueria", nome: "Arqueria", poder: 4 },
    { key: "besteiros", nome: "Besteiros", poder: 4 },
    { key: "cavalariaLeve", nome: "Cavalaria Leve", poder: 4 },
    { key: "cavalariaMedia", nome: "Cavalaria Média", poder: 5 },
    { key: "cavalariaPesada", nome: "Cavalaria Pesada", poder: 6 },
    { key: "elefantes", nome: "Elefantes", poder: 10 },
    { key: "armaCercoPequena", nome: "Arma de Cerco Pequena", poder: 10 },
    { key: "armaCercoMedia", nome: "Arma de Cerco Média", poder: 15 },
    { key: "armaCercoGrande", nome: "Arma de Cerco Grande", poder: 20 }
  ],

  FORTIFICACOES_VEICULOS: [
    { key: "nenhuma", nome: "Nenhuma Fortificação/Veículo", poder: 0, guarnicao: 0, armasCerco: "Nenhuma" },
    { key: "cabana", nome: "Cabana (Fortificação)", poder: 10, guarnicao: 2, armasCerco: "Nenhuma" },
    { key: "casa", nome: "Casa (Fortificação)", poder: 20, guarnicao: 5, armasCerco: "Nenhuma" },
    { key: "mansao", nome: "Mansão (Fortificação)", poder: 50, guarnicao: 10, armasCerco: "2 Peças Pequenas" },
    { key: "torre", nome: "Torre (Fortificação)", poder: 100, guarnicao: 20, armasCerco: "2 Peças Médias" },
    { key: "fortim", nome: "Fortim (Fortificação)", poder: 200, guarnicao: 30, armasCerco: "2 Peças Grandes" },
    { key: "fortaleza", nome: "Fortaleza (Fortificação)", poder: 500, guarnicao: 50, armasCerco: "8 Peças Grandes" },
    { key: "biga", nome: "Biga (Veículo)", poder: 6, guarnicao: 2, armasCerco: "Nenhuma" },
    { key: "carrocaFortificada", nome: "Carroça Fortificada (Veículo)", poder: 8, guarnicao: 4, armasCerco: "1 Peça Pequena" },
    { key: "embarcacaoPequena", nome: "Embarcação Pequena (Veículo)", poder: 6, guarnicao: 2, armasCerco: "1 Peça Pequena" },
    { key: "embarcacaoMedia", nome: "Embarcação Média (Veículo)", poder: 10, guarnicao: 4, armasCerco: "1 Peça Média" },
    { key: "embarcacaoGrande", nome: "Embarcação Grande (Veículo)", poder: 20, guarnicao: 8, armasCerco: "2 Peças Médias" },
    { key: "embarcacaoImensa", nome: "Embarcação Imensa (Veículo)", poder: 50, guarnicao: 16, armasCerco: "4 Peças Médias" }
  ],

  EFEITOS_ARMADILHA: {
    dano: {
      label: "Dano",
      descricao: "Causa dano à Saúde do alvo igual ao valor de sua Mente + Bônus de Poder."
    },
    atraso: {
      label: "Atraso",
      descricao: "Causa um atraso no alvo por 1 + Bônus de Poder horas."
    },
    envenenado: {
      label: "Envenenado",
      descricao: "Envenena o alvo e causa dano à Saúde igual ao Bônus de Poder."
    },
    preso: {
      label: "Preso",
      descricao: "Prende o alvo. Precisará passar em um teste de Corpo (Subterfúgio), aplicando um Perigo igual ao Bônus de Poder (máximo 15)."
    },
    perigo: {
      label: "Perigo (Efeito Secundário)",
      descricao: "Efeito secundário incluído em uma armadilha. O Perigo para encontrar e desarmar sua armadilha será igual a 10 + Bônus de Poder (máximo 15)."
    }
  },

  ORACULO_TABELA: [
    {
      key: "simNao",
      label: "Sim / Não",
      baixo: "Não / Negativo",
      alto: "Sim / Positivo"
    },
    {
      key: "direcao",
      label: "Direção (Esquerda-Baixo / Direita-Cima)",
      baixo: "Para Esquerda / Para Baixo",
      alto: "Para Direita / Para Cima"
    },
    {
      key: "estado",
      label: "Estado (Fechado-Quebrado / Aberto-Funcionando)",
      baixo: "Fechado / Quebrado",
      alto: "Aberto / Funcionando"
    },
    {
      key: "todas",
      label: "Tabela Completa do Oráculo",
      baixo: "Não/Negativo | Para Esquerda/Para Baixo | Fechado/Quebrado",
      alto: "Sim/Positivo | Para Direita/Para Cima | Aberto/Funcionando"
    }
  ]
};
