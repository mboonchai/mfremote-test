FROM alpine:3.20.3
WORKDIR /app
ADD ./dist ./dist
ADD xserve-linux-amd64 xserve
RUN chmod +x ./xserve

CMD ["/app/xserve", "/app/dist/"]
EXPOSE 3000
