FROM node:20-alpine

WORKDIR /app

# On ne copie que les fichiers de dépendances pour optimiser le cache Docker
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# On expose l'hôte pour que Vite soit accessible depuis l'extérieur du container
CMD ["npm", "run", "dev", "--", "--host"]