#!/usr/bin/env bash

printf "Building styles ...\n"
sass src/styles/index.sass:dist/main.css
printf "Building scripts ...\n"
tsc

printf "Done.\n"
