#FROM portal-base
FROM node:9
RUN apt-get update
RUN apt-get install -y curl make g++ libzmq3-dev bzip2 dos2unix

COPY ./ /auth-server/

WORKDIR /auth-server
RUN npm install --only=production
RUN chmod +x /auth-server/run.sh
RUN dos2unix /auth-server/run.sh
ENV NODE_ENV=prod

ENTRYPOINT [ "/auth-server/run.sh" ]
