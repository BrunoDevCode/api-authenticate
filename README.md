<h1 align='center'>Api Authenticate</h1>

## Descrição

<p align='justify'>O intuito do projeto é aprender como funciona a autenticação de users usando o jwt, usei o MongoDB com sua cloud e também adicionei o typegoose para melhorar as tipagens dos Models.</p>

## Rotas

* Ambas rotas devolvem pelo body uma chave token que no verify contem o _id do user e expiração em 1 dia.
* [x] /clients/register: Deve receber pelo body { name, email, password }.
* [x] /clients/login: Deve receber pelo body { email, password }.
* [] token middleware: Conferir o vencimento do token e se contem o id do user.
* [] /clients/forgot: Manda em email para o user com um token de 120 minutos.

## Dependencias e Libs :book:

* [Express](http://expressjs.com/pt-br/)
* [Mongoose](https://mongoosejs.com/)
* [Typegoose](https://typegoose.github.io/typegoose/)
* [JWT](https://www.npmjs.com/package/jsonwebtoken)
* [Bcrypt](https://www.npmjs.com/package/bcryptjs)
* [Jest](https://jestjs.io/en/)

## Como rodar o projeto :arrow_forward:

No terminal, clone o projeto:

```
  git clone https://github.com/BrunoDevCode/api-authenticate
```

Entre na pasta do projeto:

```
  cd api-authenticate ou nome-do-projeto
```

Instale as dependencias:

```
  yarn install
```

Execute a aplicação no modo desenvolvedor:

```
  // Modo desenvolvedor com ts-node-dev
  yarn dev

  // yarn test com JestJS
  yarn test
```

É possivel acessar a api pelo http://localhost:3000

## Issues Corrigidas

<p>
Nos tests com JEST houve um warning:
You are trying to 'import' a file after the Jest environment has been torn down.

Que foi corrigido adicionando no jest.config.js:

```
  testMatch: [ "**/tests/*.+(ts|tsx|js)" ];
```

</p>

<p>
  Os problemas TS2532 e TS2531 foram corrigidos adicionando "!" nos controllers.
  Example.:



```
    Error:
    const _id = findUser._id as number;

    Sucessful:
    const _id = finduser!._id as number;
  ```

</p>
