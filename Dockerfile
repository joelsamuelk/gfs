FROM node:14.17.0-alpine as build-step

WORKDIR /Users/joel/IdeaProjects/gfs
RUN mkdir -p /app

COPY package.json .
COPY package-lock.json .

RUN npm install

#RUN npm run build --prod

COPY . .

EXPOSE 4200

CMD /Users/joel/IdeaProjects/gfs/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck


#FROM nginx:1.20.1
#COPY --from=build-step /app/dist/gfs-web-app /usr/share/nginx/html
#EXPOSE 4200:80
