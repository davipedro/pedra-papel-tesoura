# Pedra-Papel-Tesoura

Jogo web de Pedra, Papel e Tesoura contra o computador.

## Versão publicada

Disponível em: https://davipedro.github.io/pedra-papel-tesoura/

## Objetivo

Ser o primeiro a conquistar três vitórias escolhendo o gesto que vence a jogada do computador.

## Como jogar

1. Clique em **Começar jogo**.
2. Escolha Pedra, Papel ou Tesoura.
3. Acompanhe o resultado da rodada e o placar.
4. Vence a partida quem alcançar três vitórias primeiro.
5. Se as cinco rodadas terminarem empatadas, a partida termina em empate.

## Regras

- Pedra vence Tesoura.
- Tesoura vence Papel.
- Papel vence Pedra.
- Gestos iguais resultam em empate.
- Vence a partida quem alcançar três vitórias primeiro.

## Como executar localmente

Não é necessário instalar dependências. Como o projeto usa módulos JavaScript
nativos, execute-o por um servidor local na raiz do projeto:

```bash
python -m http.server 8000
```

Depois, acesse `http://localhost:8000` no navegador.

## Tecnologias

- HTML5
- CSS3
- JavaScript puro (ES6+)

## Estrutura

```text
index.html       Estrutura das telas
css/style.css    Identidade visual e responsividade
js/main.js       Entrada e fluxo da aplicação
js/game-rules.js Regras puras do jogo
js/game-state.js Estado e reset da partida
js/ui.js         Atualização da interface
```

## Informações da entrega

```json
{
  "nome": "Pedra-Papel-Tesoura",
  "descricao": "Jogo de Pedra, Papel e Tesoura contra o computador, com placar, rodadas e resultado final.",
  "autores": "Davi Pedro da Silva",
  "turma": "14A"
}
```

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE`.
