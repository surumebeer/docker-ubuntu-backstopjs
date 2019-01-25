## what
Work [BackstopJS](https://github.com/garris/BackstopJS) on ubuntu in docker

## enviroment
Docker Engine - 18.09.1
Ubuntu - 16.04
Nodejs - 10.x

## docker command
```shell
$ docker-compose build
$ docker-compose up -d
// build server on http://localhost:3000

// register snapshots
$ docker container exec -it backstop-app npx backstop reference

// compare snapshots
$ docker container exec -it backstop-app npx backstop test

// open report.html by browser(mac)
$ open src/backstop_data/html_report/index.html
```

If you want to know how BackstopJS works, change and add properties and values in `./src/public/css/styles.css` between registering snapshots and comparing them.

## backstop command
```
// register snapshot
$ npx backstop reference

// compare snapshots
$ npx backstop test
```