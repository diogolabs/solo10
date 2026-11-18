# Solo 10 - Licença Aberta 2.0 (Foundry VTT v13 & v14)

> **Atribuição Legal:** O sistema **SOLO 10** é uma criação original da **101 GAMES**, disponibilizado sob a licença **Creative Commons - Atribuição (CC BY)** (versão 2.0).

Implementação completa do sistema **Solo 10 (Licença Aberta 2.0)** para **Foundry VTT (v13 e v14)**, utilizando a arquitetura `ApplicationV2` e `TypeDataModel`.

---

## Funcionalidades Incluídas

- **Ficha de Personagem Completa (`ApplicationV2`):**
  - **Atributos (`Corpo`, `Espírito`, `Mente`)** com cálculo automático das reservas:
    - `Saúde = 5 + Corpo` (+4 se possuir *Vigoroso*)
    - `Postura = 5 + Espírito` (+4 se possuir *Aristocrata*)
    - `Vontade = 5 + Mente` (+4 se possuir *Perseverante*)
  - **Perícias (+2):** Todas as perícias da Licença Aberta 2.0, podendo ser roladas em conjunto com qualquer um dos 3 Atributos.
  - **Catálogo das 38 Qualidades:** Todas as 38 Qualidades oficiais integradas com automação de bônus passivos, sugestões de Vantagem e rolagens para Qualidades ativas (*Abastado*, *Armadilheiro*, *Ataque em Arco*, *Ataque Selvagem*, *Camaleão*, *Curandeiro*, *Desarme*, *Falsificador*).
  - **Combate, Armas, Armaduras, Danos Diversos e Ofícios:**
    - Tabelas oficiais de Armas e Armaduras/Escudos integradas.
    - Cálculo automático de **Resistência a Dano (RD)**.
    - Calculadora de Danos Diversos (*Queda*, *Fogo e Ácido*, *Veneno*) e testes de *Ofícios*.
  - **Ações de Setor, Evolução (XP), Acontecimento Importante, Metas e Campanha.**
- **Ficha de Adversário:**
  - Bloco de estatísticas fiel ao documento oficial (`Saúde`, `Postura`, `Vontade`, `Perigo`, `Ataque (Reação)` e `Outras Características`), com disparo de reação para o Chat e botão para o jogador rolar Defesa.
- **Sistema de Rolagens (`1D10`):**
  - Fórmula `Atributo + Perícia (+2) + 1D10 >= 10 ou Perigo (máx. 15)`.
  - Suporte a **Vantagem (`2D10` maior)**, **Desvantagem (`2D10` menor)** e anulação mútua.
  - Cálculo automático de **Bônus de Poder** (dano em ataques, impacto na Postura em interações sociais e bônus acumulados em testes mentais).
  - Botão direto no Chat para **Gastar 1 Ponto de Vontade para Rerolar o D10**.
- **Oráculo & Ferramentas Solo 10:**
  - **Interação com o Cenário (`1D10`):** Perguntas Sim/Não, Direção, Estado ou propostas opostas personalizadas (`1-5` vs `6-0`).
  - **Elemento de Medida (`1D10`):** Medidor de intensidade/quantidade.
  - **Interação com Personagens:** Rolagem de `Espírito (Manipulação)` contra o Perigo do alvo com redução automática de Postura.
  - **Explorador de Setores, Eventos, Encontros e Acontecimentos Importantes (1 a 5 locais).**
  - **Calculadora de Combate em Massa:** Cálculo completo do Poder do Exército (Unidades, Personagens, Veículos e Fortificações com desconto automático de Guarnição/Tripulação Mínima, Paliçada +50%, Terreno Vantajoso x1,5 e Moral Elevada x1,5).

---

## Instalação no Foundry VTT

Você pode instalar o sistema no Foundry VTT (v13 ou v14) usando a URL do Manifesto:

```text
https://raw.githubusercontent.com/diogolabs/solo10/main/system.json
```

---

## Documentação da Licença Aberta 2.0

O texto integral formatado da Licença Aberta 2.0 encontra-se em:
- [PDFs e Docs/Solo 10 - Licença Aberta 2.0.md](PDFs%20e%20Docs/Solo%2010%20-%20Licen%C3%A7a%20Aberta%202.0.md)
