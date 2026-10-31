# Gerador de Cubos Mágicos

Um gerador de scrambles para cubos mágicos 2x2, 3x3, 4x4 e 5x5, desenvolvido com HTML, CSS e JavaScript.

O projeto permite gerar sequências aleatórias de movimentos para praticar a resolução de cubos mágicos, diretamente pelo navegador, sem necessidade de instalar programas ou bibliotecas adicionais.

## Funcionalidades

- Geração de scrambles para cubos 2x2, 3x3, 4x4 e 5x5.
- Quantidade de movimentos configurada para cada tamanho:
  - 2x2: 11 movimentos.
  - 3x3: 20 movimentos.
  - 4x4: 40 movimentos.
  - 5x5: 60 movimentos.
- Movimentos básicos: R, L, U, D, F e B.
- Movimentos de camadas internas para cubos 4x4 e 5x5: r, l, u, d, f e b.
- Movimentos anti-horários representados por apóstrofo (').
- Movimentos de 180° representados pela repetição do movimento (exemplo: R R).
- Opção para copiar a sequência gerada.
- Interface adaptável para computadores e dispositivos móveis.
- Exibição de uma observação sobre os movimentos de camadas internas ao selecionar cubos 4x4 ou 5x5.

## Notação dos movimentos

| Notação | Movimento |
|---|---|
| R | Direita |
| L | Esquerda |
| U | Superior |
| D | Inferior |
| F | Frontal |
| B | Traseira |
| r | Segunda camada da direita |
| l | Segunda camada da esquerda |
| u | Segunda camada superior |
| d | Segunda camada inferior |
| f | Segunda camada frontal |
| b | Segunda camada traseira |

## Tecnologias

- **HTML5:** estrutura da aplicação.
- **CSS3:** estilização e responsividade.
- **JavaScript:** lógica de geração dos scrambles.

## Como executar localmente

Não é necessário instalar dependências.

1. Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/gerador-cubos-magicos.git
```

2. Entre na pasta do projeto:

```bash
cd gerador-cubos-magicos
```

3. Abra o arquivo `index.html` no navegador.

## Acesso online

O projeto pode ser acessado diretamente pelo navegador através do GitHub Pages:

**[Acessar o Gerador de Cubos Mágicos](https://anamunis.github.io/embaralhador-cubos-magicos/)**

## Observações

Este projeto utiliza geração aleatória de movimentos e tem finalidade de treinamento e prática.

As sequências geradas não seguem necessariamente os algoritmos oficiais de embaralhamento da World Cube Association (WCA).

## Licença

Este projeto está disponível para fins de estudo e uso pessoal.

---

Desenvolvido como projeto pessoal para praticar programação e explorar o universo do speedcubing.
