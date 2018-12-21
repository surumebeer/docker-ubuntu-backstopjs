## what
Work [backstopjs](https://github.com/garris/BackstopJS) on ubuntu in docker

## docker command
```shell
$ docker-compose build
$ docker-compose up -d

// register snapshot
$ docker container exec -it backstop-app npx backstop reference

// compare snapshots
$ docker container exec -it backstop-app npx backstop test

// open report.html by browser(mac)
$ open src/backstop_data/html_report/index.html
```

## backstop command
```
// register snapshot
$ npx backstop reference

// compare snapshots
$ npx backstop test
```