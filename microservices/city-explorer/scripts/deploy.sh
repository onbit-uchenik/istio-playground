#!/bin/bash

VERSION='1.0.0-amd64'
docker buildx build -t eronbituchenik/cityexplorer:$VERSION  --platform linux/amd64 .
docker push eronbituchenik/cityexplorer:$VERSION