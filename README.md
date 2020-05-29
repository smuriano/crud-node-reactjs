# Cadastro de Produto com Node.js e React.js

Exemplo de cadastro de produto com Node.js e MongoDB no backend e React.js no frontend, sendo executados em container Docker através do Docker-Compose.

## Database com MongoDB
* Utiliza a imagem Docker oficial do MongoDB para publicação do banco de dados
* É necessário criar uma pasta local `/data/db` para armazenar os arquivos físicos do banco de dados

## Backend com Node.js
* Utiliza o pacote `express@4.17.1` para criar as API Restfull
* Utiliza o pacote `body-parse@0.1.0` para comunicação via Json
* Utiliza o pacote `mongoose@5.9.16` para conexão com o banco de dados MongoDB
* Utiliza o pacote `chalk@4.0.0` para colorir as mensagens no console da aplicação
* Utiliza a imagem Docker oficial do Node.js para publicação das API's
    
## Frontend com React.js
* Aplicação criada através do `npx create-react-app <myapp>`
* Utiliza o pacote `react-router-dom@^5.2.0` para fazer o roteamento das páginas da aplicação
* Utiliza o pacote `axios@0.19.2` para comunicação com API do backend
* Utiliza o pacote `bootstrap@4.5.0` para o design do layout

## Executar a aplicação
* É necessario a instalação do [Docker](https://www.docker.com/products/docker-desktop).

### Docker-Compose
1. Executar `docker-compose up --force-recreate` através do terminar ou Docker Quickstart Terminal (para Windows 10 Home).
2. Navegar para `http://localhost` ou `http://<container ip>`