FROM node:15

WORKDIR /app

# BuildTime (Image)
COPY package.json ./
RUN npm install

COPY . ./

# Not really needed, here for documentation
EXPOSE 3000

# RunTime (Container)
CMD ["npm", "start"]