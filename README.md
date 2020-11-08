<h1 align='center'>Api Authenticate</h1>

## Descrição

<p align='justify'>O intuito do projeto é aprender como funciona a autenticação de users usando o jwt, aproveitei também para tentar usar o Typeorm,
tentei adicionar testes também mas junto com o ORM não estão funcionando.</p>

## Rotas

* Ambas rotas devolvem pelo body uma chave token que no verify contem o ID do user e expiração em 1 dia.
- [x] /clients/register: Deve receber pelo body { name, email, password }. :heavy_check_mark:
- [x] /clients/login: Deve receber pelo body { email, password }. :heavy_check_mark:

## Dependencias e Libs :book:

- [Express](http://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/#/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs)
- [Jest](https://jestjs.io/en/)

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

:warning: Os testes no momento não estão funcionando. Motivo: Adoraria descobrir