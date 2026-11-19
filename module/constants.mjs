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
    },
    magia: {
      key: "magia",
      label: "Magia",
      descricao: "Perícia arcana utilizada em testes de conjuração de magias (Atributo da Magia + Perícia Magia +2 + 1D10 >= 10 ou Perigo)."
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

  CATEGORIAS_MAGIA: {
    corpo: {
      label: "Magias de Corpo",
      color: "#8c3b3b",
      icon: "icons/svg/regen.svg",
      sort: 100
    },
    espirito: {
      label: "Magias de Espírito",
      color: "#3b6b8c",
      icon: "icons/svg/aura.svg",
      sort: 200
    },
    mente: {
      label: "Magias de Mente",
      color: "#5d4a8c",
      icon: "icons/svg/daze.svg",
      sort: 300
    }
  },

  // 62 magias oficiais do capítulo MAGIAS (Heróis & Hordas / Solo 10, págs. 96–103)
  MAGIAS_PADRAO: [
    {
      nome: "Afastar Entidade",
      atributo: "mente",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "Área",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Esta poderosa magia consegue repelir Diabos, Demônios, Fantasmas e Elementais de uma área durante (1 + Bônus de Poder) rodadas. Humanos e animais comuns não são afetados."
    },
    {
      nome: "Aprisionar Corpo",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 alvo",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Este feitiço permite que você aprisione um alvo corpóreo por (1 + Bônus de Poder) rodadas. Entidades poderosas conseguirão facilmente se livrar deste feitiço."
    },
    {
      nome: "Aprisionar Entidade",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 entidade / item",
      duracao: "Permanente (até libertação)",
      descricao: "Este feitiço aprisiona em um item Diabos, Demônios, Fantasmas e Elementais, impedindo que eles sejam controlados ou, no caso dos Fantasmas, que o corpo seja reanimado. Além disto, ele é capaz de aprisionar alguém sob efeito da Magia Projeção Astral. Entidades poderosas conseguirão facilmente se livrar deste feitiço."
    },
    {
      nome: "Aumentar/Reduzir",
      atributo: "corpo",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "1 alvo",
      duracao: "Cena / Variável",
      descricao: "Ao utilizar a magia Aumentar, o alvo dobra o seu tamanho, recebendo +2 no Atributo Corpo (para fins de força, resistência e Saúde). No entanto, ele fica mais lento, recebendo -1 no Atributo Corpo (para fins de destreza e agilidade) até o mínimo de Corpo 1. Já no uso da magia Reduzir, o alvo reduz pela metade o seu tamanho, recebendo +2 no Atributo Corpo (para fins de destreza e agilidade). No entanto, a personagem fica mais fraca, recebendo -1 no Atributo Corpo (para fins de força e resistência) até o mínimo de Corpo 1."
    },
    {
      nome: "Aura de Cura",
      atributo: "corpo",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "Até 3 metros",
      duracao: "Instantânea",
      descricao: "Você consegue emanar uma poderosa aura curativa a até 3 metros de onde está, curando (1 + Bônus de Poder) pontos de Saúde de todos os alvos escolhidos que estejam até esta distância."
    },
    {
      nome: "Cajado em Serpente",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "Toque (cajado)",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue transformar um cajado em uma serpente mágica, que o servirá cegamente por (1 + Bônus de Poder) minutos (utilize o Animal Médio do capítulo HORDAS, pág. 180)."
    },
    {
      nome: "Cegueira/Surdez",
      atributo: "espirito",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 alvo",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue deixar um alvo cego ou surdo de forma instantânea por (1 + Bônus de Poder) rodadas. Depois deste tempo, o sentido afetado voltará a funcionar normalmente."
    },
    {
      nome: "Coma",
      atributo: "espirito",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "1 alvo",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue influenciar a mente de seu alvo e deitá-lo em um torpor pesado e instantâneo por (1 + Bônus de Poder) rodadas. Seu corpo não reagirá a nenhum estímulo."
    },
    {
      nome: "Comandar Entidade",
      atributo: "espirito",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 entidade",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue dobrar a vontade de um Diabo, Demônio, Fantasma e Elemental por (1 + Bônus de Poder) minutos. Ele fará tudo que for ordenado, com exceção de causar sua própria destruição."
    },
    {
      nome: "Comandar Zumbis",
      atributo: "espirito",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "1 Zumbi Menor",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue dobrar a vontade de um Zumbi Menor por (1 + Bônus de Poder) minutos. Ele fará tudo que for ordenado, incluindo causar sua própria destruição."
    },
    {
      nome: "Compreender/Detectar Magia",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Área / Pessoas / Itens",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue sentir a presença de criaturas, efeitos e feitiços em pessoas, itens e áreas durante (1 + Bônus de Poder) rodadas. Caso você concentre este poder em um determinado efeito por 5 rodadas, saberá que tipo de feitiço ou efeito mágico foi conjurado."
    },
    {
      nome: "Contramagia",
      atributo: "mente",
      custo: "Custo da Magia lançada +1",
      custoVontade: 1,
      alcance: "1 magia",
      duracao: "Instantânea",
      descricao: "Você consegue desfazer uma magia que foi ou está sendo conjurada por um alvo. O custo em Vontade é igual ao custo da magia a ser anulada +1."
    },
    {
      nome: "Controlar Enxame",
      atributo: "espirito",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "1 enxame",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue dobrar a vontade de um enxame (veja suas estatísticas no capítulo HORDAS, pág. 180) por (1 + Bônus de Poder) minutos, podendo ditar ordens que serão cumpridas, mesmo que venha a matar todos os seres."
    },
    {
      nome: "Corpo de Energia",
      atributo: "corpo",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue cobrir seu corpo com pura energia arcana por (1 + Bônus de Poder) minutos. Isto concede +2 de dano em ataques corporais e Armadura 2."
    },
    {
      nome: "Corpo Etéreo",
      atributo: "corpo",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue deixar seu corpo insubstancial por (1 + Bônus de Poder) minutos. Isto permite que você voe e atravesse livremente objetos sólidos."
    },
    {
      nome: "Criar Runa/Pergaminho Arcano",
      atributo: "mente",
      custo: "Custo da Magia armazenada +2",
      custoVontade: 2,
      alcance: "Toque (item/pergaminho)",
      duracao: "Até ser ativada",
      descricao: "Você consegue gravar poderosas magias cunhadas em pequenas moedas de argila ou pedaços de madeira para poderem ser facilmente quebrados ou escrevê-las em pergaminhos que se desfazem ao serem lidos. Assim que isto é feito, a magia é liberada sem o gasto de nenhum ponto de Vontade."
    },
    {
      nome: "Criar/Destruir Golem",
      atributo: "mente",
      custo: "5/7/9 (4/6/8 para destruir)",
      custoVontade: 5,
      alcance: "1 estrutura humanoide / Golem",
      duracao: "Até ser destruído",
      descricao: "Você consegue animar uma estrutura Humanoide, que se erguerá como um Golem (utilize as estatísticas do capítulo HORDAS, pág. 180). O custo aumentará com o tipo do Golem criado (5 para Golem de Carne, 7 para Golem de Ferro e 9 para Golem de Pedra). Ele obedecerá a você fielmente até ser destruído. Este feitiço também pode ser usado de forma reversa, desfazendo a magia que criou um Golem ao custo de 4/6/8 pontos de Vontade (o custo aumenta com o tipo de Golem)."
    },
    {
      nome: "Criar/Destruir Zumbi",
      atributo: "mente",
      custo: "7/6 Vontade",
      custoVontade: 7,
      alcance: "1 corpo morto / Zumbi Menor",
      duracao: "Até ser destruído",
      descricao: "Você consegue reanimar um corpo morto ao custo de 7 pontos de Vontade, que se levantará como um Zumbi Menor (utilize as estatísticas do capítulo HORDAS, pág. 180). Ele obedecerá a você fielmente até ser destruído. Este feitiço também pode ser usado de forma reversa, desfazendo a magia que criou um Zumbi Menor ao custo de 6 pontos de Vontade."
    },
    {
      nome: "Criar/Purificar Alimento",
      atributo: "corpo",
      custo: "4/2 Vontade",
      custoVontade: 4,
      alcance: "Próximo",
      duracao: "Instantânea",
      descricao: "Você consegue criar uma quantidade de unidades de alimento igual a (1 + Bônus de Poder) ao custo de 4 pontos de Vontade. Da mesma forma, você consegue purificar (1 + Bônus de Poder) unidades de alimento ao custo de 2 pontos de Vontade."
    },
    {
      nome: "Curar Doença",
      atributo: "corpo",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 alvo",
      duracao: "Instantânea",
      descricao: "Você consegue imbuir um alvo com parte da sua essência vital e, com isto, eliminar uma doença natural ou mágica."
    },
    {
      nome: "Curar Ferimento",
      atributo: "corpo",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "1 alvo",
      duracao: "Instantânea",
      descricao: "Você consegue imbuir um alvo com parte da sua essência vital e, com isto, curar (1 + Bônus de Poder) pontos de Saúde dele."
    },
    {
      nome: "Debilitar Postura",
      atributo: "espirito",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 inimigo",
      duracao: "Até descanso de 8 horas",
      descricao: "Você consegue reduzir em um valor igual a Mente + Bônus de Poder o total de pontos de Postura de um inimigo. Esta redução não poderá ser curada até que o alvo descanse por 8 horas."
    },
    {
      nome: "Debilitar Saúde",
      atributo: "corpo",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "1 inimigo",
      duracao: "Até descanso de 8 horas",
      descricao: "Você consegue reduzir em um valor igual a Mente + Bônus de Poder o total de pontos de Saúde de um inimigo. Esta redução não poderá ser curada até que o alvo descanse por 8 horas."
    },
    {
      nome: "Debilitar Vontade",
      atributo: "espirito",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 inimigo",
      duracao: "Até descanso de 8 horas",
      descricao: "Você consegue reduzir em um valor igual a Mente + Bônus de Poder o total de pontos de Vontade de um inimigo. Esta redução não poderá ser curada até que o alvo descanse por 8 horas."
    },
    {
      nome: "Destroçar Barreiras",
      atributo: "mente",
      custo: "3/4/5 Vontade",
      custoVontade: 3,
      alcance: "1 porta/barreira",
      duracao: "Instantânea",
      descricao: "Com este feitiço você consegue destroçar uma porta de madeira (3), pedra (4) ou metal (5) — o custo aumentará com o tipo de material."
    },
    {
      nome: "Doença",
      atributo: "corpo",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "1 alvo",
      duracao: "(1 + Bônus de Poder) horas",
      descricao: "Você consegue imbuir um alvo com um mal sombrio, que fará que todos os testes realizados contra ele nas próximas (1 + Bônus de Poder) horas sejam feitos com Vantagem."
    },
    {
      nome: "Dominar Animais/Pessoas",
      atributo: "espirito",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "Pessoas ou animais",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue dobrar a vontade de pessoas ou animais por (1 + Bônus de Poder) minutos, podendo ditar ordens que serão cumpridas. Se sua ordem o colocar em risco, a magia acaba."
    },
    {
      nome: "Enlouquecer",
      atributo: "espirito",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "Alvos",
      duracao: "(1 + Bônus de Poder) horas",
      descricao: "Você causa em outros alvos uma poderosa loucura que os enfraquecerá. Isto faz com que todos os testes realizados contra eles nas próximas (1 + Bônus de Poder) horas sejam feitos com Vantagem."
    },
    {
      nome: "Escudo Arcano",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você cria um sólido escudo de energia mística em torno de si, que reduz 5 de dano por (1 + Bônus de Poder) rodadas."
    },
    {
      nome: "Explosão de Energia",
      atributo: "mente",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "À distância (Área)",
      duracao: "Instantânea",
      descricao: "Você gera uma explosão arcana centrada em si próprio ou em um ponto a sua escolha, fazendo um ataque à distância contra todos na área (incluindo aliados) e causando dano igual à Mente + Bônus de Poder a todos em seu interior."
    },
    {
      nome: "Ferir",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "À distância",
      duracao: "Instantânea",
      descricao: "Você consegue manipular energias arcanas e fazer um ataque à distância, causando dano igual à Mente + Bônus de Poder."
    },
    {
      nome: "Fortalecer Arma/Armadura",
      atributo: "corpo",
      custo: "2 Vontade (por +1)",
      custoVontade: 2,
      alcance: "Toque (arma ou armadura)",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue imbuir sua arma ou armadura com poder arcano, aumentando em +1 o dano ou a redução de dano, respectivamente, por (1 + Bônus de Poder) rodadas. Mesmo fortalecida, esta arma não é considerada mágica. É possível aumentar em valores maiores, bastando multiplicar o bônus pretendido pelo custo da magia (4 pontos de Vontade para +2, 6 pontos de Vontade para +3, etc)."
    },
    {
      nome: "Fortalecer Atributo",
      atributo: "corpo",
      custo: "3 Vontade (por +1)",
      custoVontade: 3,
      alcance: "Pessoal ou 1 alvo",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue aumentar um Atributo seu ou de um alvo em +1 por (1 + Bônus de Poder) rodadas. É possível aumentar em valores maiores, bastando multiplicar o bônus pretendido pelo custo da magia (6 pontos de Vontade para +2, 9 pontos de Vontade para +3, etc)."
    },
    {
      nome: "Ilusão",
      atributo: "mente",
      custo: "4/6 Vontade",
      custoVontade: 4,
      alcance: "Área",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue criar ilusões que enganam a visão dos que estiverem ao redor por (1 + Bônus de Poder) minutos. Caso a ilusão em questão seja algo absurdo (como um imenso Tarrasque acordando), o custo da Magia se eleva para 6 pontos de Vontade."
    },
    {
      nome: "Invisibilidade",
      atributo: "mente",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue manipular mentes fracas e fazer com que eles não consigam percebê-lo, ficando invisível por (1 + Bônus de Poder) rodadas."
    },
    {
      nome: "Invocar Animal",
      atributo: "espirito",
      custo: "4/5/6 Vontade",
      custoVontade: 4,
      alcance: "Próximo",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue convocar um animal pequeno (4), médio (5) ou grande (6) — o custo aumentará com o tamanho do animal —, que o servirá por (1 + Bônus de Poder) minutos (utilize as estatísticas do capítulo HORDAS, pág. 180). Se sua ordem o colocar em risco, a magia acaba."
    },
    {
      nome: "Invocar Elementos",
      atributo: "mente",
      custo: "6/10 Vontade",
      custoVontade: 6,
      alcance: "Área",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue invocar o poder dos elementos, fazendo chover, nevar, ventar ou criar uma poderosa névoa em toda a área por (1 + Bônus de Poder) minutos. Caso o elemento seja incomum para a região (como chuvas em um deserto), o custo da Magia se eleva para 10 pontos de Vontade."
    },
    {
      nome: "Invocar Entidade",
      atributo: "espirito",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "Próximo",
      duracao: "(1 + Bônus de Poder) minutos ou até ser destruído",
      descricao: "Você consegue invocar um Diabo, Demônio, Fantasma ou Elemental, que o servirá por (1 + Bônus de Poder) minutos (utilize as estatísticas do capítulo HORDAS, pág. 180) ou até ser destruído."
    },
    {
      nome: "Ler a Mente",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "1 alvo",
      duracao: "Instantânea",
      descricao: "Você consegue entrar na mente de um alvo e retirar informações que ele guarda. Utilizar este poder em criaturas de poder imenso pode estraçalhar sua mente tamanha complexidade de seus pensamentos."
    },
    {
      nome: "Línguas",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue compreender e falar qualquer idioma por (1 + Bônus de Poder) minutos. Até mesmo idiomas esquecidos são contemplados por esta magia."
    },
    {
      nome: "Luz/Escuridão",
      atributo: "mente",
      custo: "2 Vontade",
      custoVontade: 2,
      alcance: "Área",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue deixar uma área clara como o meio-dia ou escura como a meia-noite por (1 + Bônus de Poder) minutos."
    },
    {
      nome: "Medo",
      atributo: "espirito",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 alvo",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue imbuir seus inimigos com terror, fazendo com que o alvo desta magia fuja desesperadamente de você por (1 + Bônus de Poder) rodadas."
    },
    {
      nome: "Mensagem",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Até 100 + (10 x Bônus de Poder) km",
      duracao: "Instantânea",
      descricao: "Você consegue encaminhar uma mensagem pequena e receber uma resposta de um alvo que esteja a até 100 + (10 x Bônus de Poder) quilômetros de distância."
    },
    {
      nome: "Mudar a Aparência",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue manipular completamente sua aparência de forma a enganar mentes fracas por (1 + Bônus de Poder) rodadas."
    },
    {
      nome: "Múltiplas Imagens",
      atributo: "mente",
      custo: "3 Vontade",
      custoVontade: 3,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você cria diversas imagens falsas suas, que duram (1 + Bônus de Poder) rodadas. Todas as reações contra você têm 50% de chance de errar (role 1D10 após cada reação: um resultado 1-5 representa que uma imagem foi atacada)."
    },
    {
      nome: "Muralha de Energia",
      atributo: "mente",
      custo: "6/10 Vontade",
      custoVontade: 6,
      alcance: "3m altura x (10 + Bônus de Poder)m",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue criar uma muralha de elementos por (1 + Bônus de Poder) minutos. Caso o elemento seja incomum para a região (como água em um deserto), o custo da magia se eleva para 10 pontos de Vontade. A muralha possui 3 metros de altura e (10 + Bônus de Poder) metros de comprimento, podendo ser modelada pelo conjurador da forma que quiser. Além disto, ela poderá possuir uma das seguintes características: DEFENDER (esta muralha serve para proteger, possuindo Resistência a Dano 3 e 20 pontos de Saúde) ou ATACAR (esta muralha não impede sua travessia, mas causa Mente + Bônus de Poder de dano a todos que tentarem atravessá-la)."
    },
    {
      nome: "Passos nas Nuvens",
      atributo: "mente",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Seu corpo é envolto por um redemoinho de fumaça vermelha que o conduz voando a grandes velocidades em voos curtos que duram (1 + Bônus de Poder) rodadas."
    },
    {
      nome: "Projeção Astral",
      atributo: "espirito",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "Pessoal (Ilimitado em projeção)",
      duracao: "Enquanto meditar",
      descricao: "Deixando seu corpo completamente relaxado e em profunda meditação, você consegue projetar seu espírito do seu corpo. Esta projeção é intangível, invisível e consegue viajar a uma grande velocidade, alcançando qualquer lugar em segundos. Você consegue ainda ver e ouvir tudo o que presenciar. Nesta forma você consegue vagar livremente, mas a magia Ver a Verdade permitirá que você seja visto e a magia Aprisionar Entidade permitirá que o conjurador te aprisione."
    },
    {
      nome: "Rajada de Energia",
      atributo: "mente",
      custo: "6 Vontade",
      custoVontade: 6,
      alcance: "Linha até (10 + Bônus de Poder) metros",
      duracao: "Instantânea",
      descricao: "Similar à magia Ferir, mas você consegue manipular energias arcanas e fazer um ataque à distância na forma de uma rajada, causando dano igual à Mente + Bônus de Poder a todos os alvos que estejam enfileirados a até (10 + Bônus de Poder) metros."
    },
    {
      nome: "Ressurreição",
      atributo: "corpo",
      custo: "8 Vontade",
      custoVontade: 8,
      alcance: "1 corpo (morto há até 1 ano)",
      duracao: "Instantânea",
      descricao: "Você consegue reanimar o corpo de uma pessoa morta há até um ano. Trazer uma pessoa de volta à vida é uma experiência traumática, fazendo com que ela receba um marcador de Loucura M (caso esta regra esteja sendo utilizada) que não é recuperado. Desta forma, a cada vez que o Espírito é trazido de volta, a mente da pessoa se abala um pouco mais, até enlouquecê-la para sempre!"
    },
    {
      nome: "Santidade",
      atributo: "espirito",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "Aura pessoal",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Esta magia cria uma aura de paz por (1 + Bônus de Poder) minutos. Com isto, os Adversários com Postura menor ou igual à do conjurador não conseguirão atacá-lo."
    },
    {
      nome: "Sentidos Extraordinários",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue ampliar todos os seus sentidos por (1 + Bônus de Poder) rodadas. Com isto, você é capaz de enxergar no escuro e realizará todos os testes que envolvam sua percepção com Vantagem."
    },
    {
      nome: "Som Fantasmagórico",
      atributo: "mente",
      custo: "4/6 Vontade",
      custoVontade: 4,
      alcance: "Área",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você consegue criar ilusões que enganam a audição dos que estiverem ao redor por (1 + Bônus de Poder) minutos. Caso o som em questão seja algo absurdo, o custo da magia se eleva para 6 pontos de Vontade."
    },
    {
      nome: "Sonho/Pesadelo",
      atributo: "espirito",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "1 pessoa dormindo",
      duracao: "Durante o descanso",
      descricao: "Você consegue projetar imagens na mente de uma pessoa que esteja dormindo. Caso estas imagens sejam sonhos bons, a pessoa irá recuperar (1 + Bônus de Poder) pontos de Postura e Vontade com o descanso. Caso sejam pesadelos, ele irá perder (1 + Bônus de Poder) pontos de Postura e Vontade. Esta magia pode ser utilizada por conjuradores que estejam sob efeito de Projeção Astral."
    },
    {
      nome: "Sugar Espírito",
      atributo: "espirito",
      custo: "8 Vontade",
      custoVontade: 8,
      alcance: "1 alvo / recipiente transparente",
      duracao: "Permanente",
      descricao: "Esta magia aprisiona em um item transparente (como uma garrafa) o Espírito de um alvo, arrancando-o de seu corpo. Este Espírito pode ser utilizado posteriormente por meio da magia Comandar Entidade."
    },
    {
      nome: "Telecinésia",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "Objetos à vista",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Você consegue mover objetos com o poder da sua mente, levitando-os por (1 + Bônus de Poder) rodadas. Este poder não pode ser utilizado para atacar."
    },
    {
      nome: "Teleporte",
      atributo: "mente",
      custo: "6 +1 por alvo extra",
      custoVontade: 6,
      alcance: "Até (10 + Bônus de Poder) hexágonos",
      duracao: "Instantânea",
      descricao: "Esta poderosa magia permite a um conjurador teleportar a si mesmo e a outros alvos a até 10 + Bônus de Poder hexágonos de distância. Caso um dos alvos esteja sendo teleportado contra sua vontade, a dificuldade do teste será igual ao Perigo deste alvo."
    },
    {
      nome: "Transformação Animal",
      atributo: "espirito",
      custo: "4/5/6 Vontade",
      custoVontade: 4,
      alcance: "Pessoal",
      duracao: "(1 + Bônus de Poder) minutos",
      descricao: "Você molda seu corpo em um animal pequeno (4), médio (5) ou grande (6) — o custo aumentará com o tamanho do animal —, por (1 + Bônus de Poder) minutos."
    },
    {
      nome: "Velocidade/Lentidão",
      atributo: "corpo",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 alvo",
      duracao: "Cena / Variável",
      descricao: "Ao utilizar a magia Velocidade, o alvo dobra seu deslocamento, permitindo a ele que se coloque próximo o suficiente de um atacante à distância para efetuar um ataque corporal ou se distancie o suficiente para evitar ataques corporais sem gastar uma rodada para isto. Já no uso da magia Lentidão, o alvo tem seu deslocamento diminuído à metade, fazendo com que a mudança de combate corporal para combate à distância (ou vice-versa) gaste duas rodadas."
    },
    {
      nome: "Ver a Verdade",
      atributo: "mente",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "Pessoal (visão)",
      duracao: "Ativa",
      descricao: "Você consegue ver criaturas ou objetos que estejam ocultos por meio de invisibilidade e ilusões de todo o tipo, além de contornos de passagens secretas e objetos escondidos."
    },
    {
      nome: "Ver o Passado/Futuro",
      atributo: "mente",
      custo: "5 Vontade",
      custoVontade: 5,
      alcance: "Toque",
      duracao: "(1 + Bônus de Poder) dias",
      descricao: "Tocando um alvo, você consegue ver seu passado ou o futuro em um período igual a (1 + Bônus de Poder) dias. Estas visões sempre serão nebulosas, mas poderão responder dúvidas pertinentes através da consulta ao ORÁCULO (pág. 173)."
    },
    {
      nome: "Voo",
      atributo: "corpo",
      custo: "4 Vontade",
      custoVontade: 4,
      alcance: "1 alvo",
      duracao: "(1 + Bônus de Poder) rodadas",
      descricao: "Esta magia permite ao alvo voar livremente pela duração de (1 + Bônus de Poder) rodadas. Assim que o efeito acaba, o alvo começa a cair lentamente sobre o local onde terminou seu voo."
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
