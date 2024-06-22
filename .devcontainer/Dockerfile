FROM node:lts-alpine3.20

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# Define application directory
RUN mkdir /opt/app && chown node:node /opt/app
WORKDIR /opt/app

# Install dependencies in a non-default location to avoid clashing
USER node

COPY package.json ./
RUN yarn install
ENV PATH /opt/app/node_modules/.bin:$PATH

# Exposing Web and Debug ports for the application
ARG PORT=3080
ARG HOST=0
ENV PORT $PORT
ENV HOST=$HOST
EXPOSE $PORT 9229 9230

COPY devcontainer-frontend-load-profile.sh /etc/profile.d/

# ARG USERNAME=developer
# ARG USER_UID=1000
# ARG USER_GID=$USER_UID

# RUN groupadd --gid "$USER_GID" "$USERNAME" \
#   && useradd -s /bin/bash --uid "$USER_UID" --gid "$USER_GID" -m "$USERNAME"

# USER $USERNAME

# Run the application
WORKDIR /opt/app
CMD ["npm", "run", "dev"]

