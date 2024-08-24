FROM node:18 AS builder

WORKDIR /builder

COPY package*.json ./

COPY ./prisma prisma

RUN npm ci

COPY . .

RUN npm run build


FROM node:18 AS runner

COPY ./prisma prisma

COPY --from=builder /builder/node_modules ./node_modules
COPY --from=builder /builder/package*.json ./
COPY --from=builder /builder/dist/ ./dist

EXPOSE 3001

CMD ["node", "dist/src/shared/infra/http/server.js"]
