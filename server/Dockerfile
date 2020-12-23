# Dockerfile

FROM node:14.14.0
RUN mkdir -p /opt/delivery-app
WORKDIR /opt/delivery-app/app
RUN adduser --disabled-password app
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY / .
RUN chown -R app:app /opt/delivery-app
USER app
RUN npm install
EXPOSE 3000
CMD [ "npm", "run" ]
