FROM ubuntu:16.04

RUN apt-get update

RUN apt-get install -y language-pack-ja-base language-pack-ja
RUN update-locale LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja
RUN export LANG=ja_JP.UTF-8
RUN export LC_ALL=ja_JP.UTF-8
RUN export LC_CTYPE=ja_JP.UTF-8

RUN apt-get update

RUN apt-get install -y chromium-browser chromium-browser-l10n
RUN apt-get install -y fonts-takao fonts-ipafont fonts-ipaexfont

RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash
RUN apt-get install -y nodejs

RUN apt-get -qq update 
RUN apt-get -qq -y install bzip2

WORKDIR /src
ADD ./src/package.json /src
ADD ./src/package-lock.json /src
ADD ./src/backstop.json /src
ADD ./src/public /src/public
ADD ./src/serve.js /src

RUN ["npm", "cache", "clear", "--force"]

RUN ["npm", "install", "phantomjs-prebuilt"]

RUN ["npm", "install"]