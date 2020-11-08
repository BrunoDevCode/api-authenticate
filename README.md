<h1 align='center'>Api Authenticate</h1>

## Descrição
<p align='justify'>O intuito do projeto é aprender como funciona a autenticação de users usando o jwt, aproveitei também para tentar usar o Typeorm,
tentei adicionar testes também mas junto com o ORM não estão funcionando.</p>

## Rotas

- Ambas rotas devolvem pelo body uma chave token que no verify contem o ID do user e expiração em 1 dia.
- [x] /clients/register: Deve receber pelo body { name, email, password }.
- [x] /clients/login: Deve receber pelo body { email, password }

## Dependencias e Libs
- [Express](http://expressjs.com/pt-br/)
- [Typeorm](https://typeorm.io/#/)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcryptjs)
- [Jest](https://jestjs.io/en/)

## Comando para iniciar o projeto
´´´
  // Iniciar o servidor com ts-node-dev
  yarn dev // Para iniciar o servidor.
  yarn test // Para iniciar os testes com jest.
´´´