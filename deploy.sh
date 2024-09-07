#!/bin/bash

# PRODUCTION
git reset --hard
git pull origin master

docker compose up -d