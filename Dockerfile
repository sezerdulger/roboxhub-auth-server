#FROM portal-base
FROM node:9
RUN apt-get update
RUN apt-get install -y curl make g++ libzmq3-dev bzip2

COPY ./ /var/ion-portal/

WORKDIR /var/ion-portal
RUN npm install
RUN npm run build --base-path=/
RUN chmod +x /var/ion-portal/run.sh

ENTRYPOINT [ "/var/ion-portal/run.sh" ]
