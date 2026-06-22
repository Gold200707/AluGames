# 🎯 AluGames

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=%23323330)
![Alura Challenge](https://img.shields.io/badge/Alura-Challenge-%23167BF7?style=for-the-badge)

> 💡 **Nota de Escopo:** Este repositório **NÃO** é um sistema de produção comercial completo. Este projeto é estritamente um teste de estudo prático, desenvolvido com o objetivo de validar e consolidar conceitos cruciais de manipulação do DOM (Document Object Model) e a lógica de funções utilizando JavaScript Puro (Vanilla JS).

---

## 📖 Sobre o Projeto

O **AluGames** é uma página web estática que simula uma interface de uma loja de aluguer de jogos de tabuleiro (*boardgames*). A aplicação apresenta um catálogo com títulos populares como *Monopoly*, *Ticket to Ride* e *Takenoko*.

A mecânica principal permite que o utilizador altere o estado de disponibilidade de cada jogo em tempo real. Ao interagir com o botão da interface, o sistema processa a ação, modificando dinamicamente a identidade visual do item e alternando o fluxo de texto para refletir se o jogo está disponível para aluguer ou se deve ser devolvido.

---

## ✨ Conceitos Praticados

O desenvolvimento deste projeto focou-se na escrita de código limpo e na aplicação de boas práticas de JavaScript nativo, exercitando os seguintes tópicos:

* **Seleção Dinâmica de Elementos:** Utilização de métodos como `document.getElementById` e `querySelector` para capturar elementos específicos na árvore do DOM a partir de identificadores dinâmicos.
* **Manipulação de Classes CSS via API `classList`:** Controlo de estado do ecossistema visual através dos métodos `.contains()`, `.add()` e `.remove()`, ativando e desativando filtros visuais e comportamentos estilizados.
* **Escuta de Eventos Inline:** Implementação do atributo `onclick` nas tags HTML para interagir diretamente com o motor do JavaScript, injetando parâmetros de identificação (`id`) únicos por produto.
* **Lógica Condicional e Manipulação de Conteúdo:** Aplicação de estruturas de decisão (`if/else`) para avaliar o estado atual do elemento e modificar a propriedade `.textContent` dos botões em tempo real.
* **CSS Moderno e Pseudo-elementos:** Uso de Flexbox para alinhamento, gradientes lineares complexos para o fundo da aplicação e o uso de `::after` absoluto para criar uma camada de sobreposição de sombreamento (*overlay*) em jogos já alugados.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessível do catálogo e dos contentores.
* **CSS3:** Arquitetura de estilos dividida de forma organizada:
* `_reset.css`: Ficheiro responsável pela normalização das margens, preenchimentos e propriedades de caixa dos navegadores.
* `main.css`: Concentração das regras de layout, responsividade via *Media Queries* e estilizações visuais personalizadas.
* **JavaScript (ES6):** Implementação da lógica funcional e reatividade nativa da página (Vanilla JS).
* ![Alura](https://img.shields.io/badge/Forma%C3%A7%C3%A3o-Alura-167bf7?style=for-the-badge)

---

## 🚀 Como Executar

Por ser uma aplicação puramente *front-end* e estática, não há necessidade de instalar servidores, bases de dados ou gestores de pacotes.

1. Faça o clone ou descarregue o código deste repositório para a sua máquina local.
2. Navegue até à pasta raiz do projeto.
3. Abra o ficheiro `index.html` diretamente em qualquer navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.).

---

## 🎓 Contexto de Aprendizado

Este projeto foi construído como um desafio prático proposto pela **[Alura](https://www.alura.com.br)** em suas formações de Front-End. O objetivo principal foi aplicar na prática conceitos teóricos de desenvolvimento web, simulando problemas reais de interatividade de interface que um desenvolvedor enfrenta no dia a dia.

> 💡 **Nota de Escopo:** Este repositório **NÃO** é um sistema de produção comercial completo. Este projeto é estritamente um teste de estudo prático desenvolvido como parte da formação da **[Alura](https://www.alura.com.br)**, focado em consolidar conceitos cruciais de manipulação do DOM (Document Object Model) e lógica de funções com JavaScript Puro (Vanilla JS).
