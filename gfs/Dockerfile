FROM node:14.17.0-alpine as build-step

WORKDIR /app
COPY . /app
RUN rm -rf /app/gfs-cms

RUN npm install

#RUN npm run build --prod

COPY . .

EXPOSE 4200

CMD /app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck


#FROM nginx:1.20.1
#COPY --from=build-step /app/dist/gfs-web-app /usr/share/nginx/html
#EXPOSE 4200:80
