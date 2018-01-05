FROM python:3.6.4-alpine3.7

# update OS system packages manager,
# install dependencies
RUN apk update && \
    apk add --no-cache postgresql-dev gcc musl-dev

# set working directory
ENV APP_DIR /app
RUN mkdir ${APP_DIR}
WORKDIR ${APP_DIR}

# add src app
ADD ./backend/. ${APP_DIR}

# install requirements
RUN pip install -r requirements.txt

# run server
CMD ["./entrypoint.sh"]