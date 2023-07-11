FROM node:16.19.0-alpine3.16 AS base
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

FROM base AS development
WORKDIR /app
COPY . /app

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=development
EXPOSE 3000
# Install dependencies in /app
COPY package.json package-lock.json ./
RUN apk add --no-cache --virtual g++ make py3-pip
RUN npm i --frozen-lockfile
# Fix errors 
# sh: eslint: not found
RUN npm add -g eslint next
CMD [ "npm", "run", "dev" ]


# Build target dependencies #
#############################
FROM base AS dependencies
# Install prod dependencies
ENV NODE_ENV=production

WORKDIR /app
# Copy package.json and pnpm-lock.yaml before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY package.json package-lock.json ./
# Fix Node gyp ERR! find Python
RUN apk add --no-cache --virtual g++ make py3-pip
# We install npm.
RUN npm i


# Build target builder #
########################
FROM base AS builder
ENV NODE_ENV=production
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .


RUN npm run build

# Build target production #
###########################
FROM base AS production
WORKDIR /app
ENV HOST=0.0.0.0
ENV NODE_ENV=production
COPY --chown=node --from=builder /app/.env ./.env
COPY --chown=node --from=builder /app/next.config.js ./
COPY --chown=node --from=builder /app/public ./public
COPY --chown=node --from=builder /app/.next ./.next
COPY --chown=node --from=builder /app/package-lock.json /app/package.json ./
COPY --chown=node --from=dependencies /app/node_modules ./node_modules
USER node
# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD [ "npm", "run","start" ]


# Destroy containers, if the server failed
# HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
#     CMD curl --fail http://localhost:8080 || exit 1
