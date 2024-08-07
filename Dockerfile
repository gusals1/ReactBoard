

FROM node:14

COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install
WORKDIR /myfolder/

COPY . /myfolder/
RUN yarn build

CMD yarn start