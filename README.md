# TypeScript Node Base

Você pode usar este projeto como uma base bem limpa e flexível para iniciar seus projetos em Node.js usando TypeScript, e, assim, você contará com os seguintes recursos:

- Requer apenas Docker e Docker Compose instalados na sua máquina;
- Todo o ambiente roda dentro de um container do Docker;
- Você terá um script bash nomeado como `yarn` na raiz do projeto para executar a maioria dos comandos;
- ESLint, Babel e TypeScript já estão configurados e prontos para uso na maioria dos projetos;
- Para os testes, escolhemos o Jest e, portanto, também está previamente configurado.

#### Iniciando a aplicação

```bash
docker-compose up
```

#### Sobre o Docker Compose

Para executar sua aplicação em ambiente de desenvolvimento, recomendamos o uso do Docker Compose. Não temos um modelo padronizado sobre como sua aplicação deve ser executada em produção porque acreditamos que isso varia de projeto para projeto e você deve pensar na melhor abordagem para o seu caso em específico.

Não usamos o script `yarn` para executar nossa aplicação porque ela pode requerer configurações específicas que serão realizadas no Dockerfile, além de, em determinados casos, desejarmos que ela seja executada diretamente no usuário root do container.

#### Sobre o script Yarn

É importante observar que o script `yarn` foi adicionado ao projeto pensando no princípio de que você não deveria ter que instalar nenhuma dependência de desenvolvimento em sua máquina para poder iniciar e começar a trabalhar em um novo projeto (exceto pelo Docker e Docker Compose).

Existe um problema com o Docker que é o fato de os arquivos gerados dentro dele serem criados com permissões de root e a melhor alternativa que encontramos para solucionar este problema foi instanciar um novo container clonando o usuário e grupo da maquina hospedeira para só depois executar ações que criem e/ou modifiquem arquivos, e, após realizar a ação solicitada, o container será destruído.

###### Exemplos de boas práticas

```bash
./yarn run build
./yarn run test
./yarn install
./yarn add express
./yarn add typescript -D
```

###### Exemplos de uso incorreto

```bash
./yarn run dev
./yarn global add n
```
