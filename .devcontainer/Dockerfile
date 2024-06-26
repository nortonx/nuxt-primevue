FROM node:18.20-slim

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Define application directory
RUN mkdir /opt/app && chown node:node /opt/app \
    && mkdir /opt/app/node_modules && chown node:node /opt/app/node_modules \
    && apt-get update && apt-get install -y vim bash \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
WORKDIR /opt/app

# Install dependencies in a non-default location to avoid clashing
USER node

COPY package.json ./
RUN yarn install
ENV PATH /opt/app/node_modules/.bin:$PATH

# Exposing Web and Debug ports for the application
ARG PORT=3080
ARG HOST=0.0.0.0
ENV PORT=$PORT
ENV HOST=$HOST
EXPOSE $PORT 9229 9230

COPY devcontainer-frontend-load-profile.sh /etc/profile.d/
