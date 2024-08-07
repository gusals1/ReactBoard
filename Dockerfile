

FROM node:14

COPY ./package.json /my-app/
COPY ./yarn.lock /my-app/
WORKDIR /my-app/
RUN yarn install

COPY . /my-app/
RUN yarn build

CMD yarn start