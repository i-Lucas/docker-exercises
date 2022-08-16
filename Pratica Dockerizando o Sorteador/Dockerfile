# puxa a imagem do repositório do docker hub
FROM node

# seta a pasta atual de trabalho dentro do container
WORKDIR /usr/src

# copiar os arquivos do projeto para a pasta atual de trabalho
COPY . .

# expõe a porta de acesso
EXPOSE 5000

# instalar as dependências do projeto
RUN npm i && npm run build && npx prisma generate

# executar o projeto
CMD ["npm", "start"]