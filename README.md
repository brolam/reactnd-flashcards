# Flashcards
O Flashcards é um projeto acadêmico desenvolvido no curso [Desenvolvedor React](https://br.udacity.com/course/react-nanodegree--nd019/) 
da [Udacity](https://br.udacity.com/). Esse projeto foi desenvolvido utilizando as metodologias de desenvolvimento BDD, TDD e a técnica de refatoração para gerar um código limpo e componentes reutilizáveis através do [React Native](https://facebook.github.io/react-native/).  
<p align="center">
  <img src="https://raw.githubusercontent.com/brolam/reactnd-flashcards/master/docs/screen-phone-and-tablet.png" />
</p>  

# Visão geral do projeto
Flashcards Móveis, é um aplicativo para dispositivos móveis Android e iOS responsive que permite que usuários estudem uma coleção de flashcards. Com o app, os usuários poderão criar diferentes categorias de flashcards chamadas de "Decks", adicionar flashcards a esses baralhos, e fazer os quizzes nestes baralhos. Também receber um lembrete diário para você não esquecer de realizar seus quizzes.

## Instalação e execução:
* Instalando todas as dependências `yarn install`
* Iniciando o servidor local `yarn start`
* Executando os casos de testes `yarn test` ou `yarn test:watch`
* Visualizando a cobertura dos testes `yarn test:coverage`

## Estutura do projeto
```bash
├── README.md - This file.
|── components # Organizar todos os componentes reutilizáveis do aplicativo;
├──__tests__ # Organizar todos os testes( BDD e TDD ) do aplicativo;
├── App.js # Componente principal do aplicativo;
├── actions # Organizar todas as ações do aplicativo;
├── reducers # Organizar todos os redutores do aplicativo;
├── storage # Gerenciar o armazenamento ( decks e etc.) permanente do aplicativo;
├── styles # Compartilhar styles padrão do aplicativo;
├── util # Compartilhar funcionalidades (helpers) no aplicativo;
├── jest.setup.js # Configurar o ambiente de testes.
```

## Resultado dos testes unitários e de aceitacão.
<p align="center">
  <img src="https://raw.githubusercontent.com/brolam/reactnd-flashcards/master/docs/coverage-test.png" />
</p>  

## Por que este projeto?
Este projeto lida com aspectos fundamentais de construção de uma aplicação nativa, incluindo listas infinitas, roteamento, layout responsivo e input de usuário. Ao construir o projeto, você saberá como utilizar React Native para construir aplicações iOS e Android.

## Requisistos específicos
- Utilize o create-react-native-app para construir seu projeto.
- Permita que usuários criem um baralho que poderá conter um número ilimitado de cartões.
- Permita que usuários adicionem um cartão a um específico baralho.
- A frente do cartão pode exibir uma pergunta ou questão.
- A traseira do cartão deve exibir a resposta.
- Os usuários devem estar aptos a se testarem em um baralho específico e receberem uma pontuação quando eles concluírem o baralho.
- Os usuários devem receber uma notificação para lembrá-los de estudar, caso eles não tenham feito isso no dia.