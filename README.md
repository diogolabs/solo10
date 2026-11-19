# Solo 10 - Licença Aberta 2.0 (Foundry VTT v13 & v14)

> **Atribuição Legal:** O sistema **SOLO 10** é uma criação original da **101 GAMES**, disponibilizado sob a licença **Creative Commons - Atribuição (CC BY)** (versão 2.0).

Implementação completa do sistema **Solo 10 (Licença Aberta 2.0)** para **Foundry VTT (v13 e v14)**, utilizando a arquitetura `ApplicationV2` e `TypeDataModel`.

---

## Funcionalidades Incluídas

- **Ficha de Personagem Clara/Minimalista e Responsiva (`ApplicationV2`):**
  - **Organizada em 4 Abas:**
    1. **Atributos, Perícias, Rolagens e Combate:** Pilares acoplados (`Corpo → Saúde`, `Espírito → Postura`, `Mente → Vontade`) com barras visuais e ajuste rápido `−`/`+`, Perícias (`+2`), ações rápidas de combate, Armas e calculadora de Danos Diversos.
    2. **Qualidades, Evolução e Oráculos:** Qualidades modulares, Armadilhas, controle de XP/Dias Vividos, atalhos do Oráculo e Ações de Setor, Metas Pessoais, Acontecimento/Campanha e Notas & Diário.
    3. **Equipamento e Recursos:** Armaduras & Escudos (com cálculo automático de **RD**), Equipamentos & Pertences, Recursos Financeiros/Renda por hora e Ofícios.
    4. **Magia:** Itens modulares do tipo **Magia** (Escola/Círculo, Atributo base, Custo, Alcance, Duração, Bônus de teste e botão **Conjurar** integrado às rolagens `1D10`) + **Grimório & Notas Arcanas**.
  - **Cálculo automático das reservas:**
    - `Saúde = 5 + Corpo` (+ bônus de Qualidades como *Vigoroso*)
    - `Postura = 5 + Espírito` (+ bônus de Qualidades como *Aristocrata*)
    - `Vontade = 5 + Mente` (+ bônus de Qualidades como *Perseverante*)
  - **Perícias como Itens Modulares (`+2`):** Livres de Atributo (o Atributo é definido na hora do teste). Vêm em um **Compêndio de Perícias** próprio do sistema e permitem criar novas perícias para qualquer cenário Solo 10.
  - **Qualidades como Itens Modulares:** Todas as 38 Qualidades oficiais disponíveis no **Compêndio de Qualidades** do sistema, com campos modulares de bônus (`+ Saúde`, `+ Postura`, `+ Vontade`, `+ RD`, `+ Bônus em Teste`, `Vantagem`) para fácil adaptação e criação de novas Qualidades.
  - **Compêndios de Armas, Armaduras, Equipamentos e Magias** integrados — incluindo **63 itens** no Compêndio de Equipamentos (**Equipamento**, **Vestuário** e **Alimentação**) e **62 magias** no Compêndio de Magias organizadas por Atributo (**Corpo**, **Espírito** e **Mente**) com **Teste de Conjuração** integrado (Atributo + Perícia Magia + 1D10 e controle de gasto de Vontade/Rituais).
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
