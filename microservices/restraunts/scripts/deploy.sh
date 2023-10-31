#!/bin/bash

VERSION='1.0.0-amd64'
docker buildx build -t eronbituchenik/restraunts:$VERSION  --platform linux/amd64 .
docker push eronbituchenik/restraunts:$VERSION