# Stage 1: Install dependencies
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./
ARG ASPNET_API_HOST
ENV ASPNET_API_HOST=${ASPNET_API_HOST:-villainary-csharp}
RUN npm install --production

# Stage 2: Build the Next.js application
FROM node:18-alpine AS builder
WORKDIR /app/villainary-react

COPY --from=deps /app/node_modules ./node_modules
COPY . .

WORKDIR /app/villainary-react

# Disables general use data collection for Next.js.  Read more here: https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1
ARG ASPNET_API_HOST
ENV ASPNET_API_HOST=${ASPNET_API_HOST:-villainary-csharp}
RUN npm run build

# Stage 3: Create the final image
FROM node:18-alpine AS runner
WORKDIR /app/villainary-react

ENV NODE_ENV production
ENV ASPNET_API_HOST=${ASPNET_API_HOST:-villainary-csharp}
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/villainary-react/.next ./.next
COPY --from=builder /app/villainary-react/node_modules ./node_modules
COPY --from=builder /app/villainary-react/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000
CMD ["npm", "start"]
