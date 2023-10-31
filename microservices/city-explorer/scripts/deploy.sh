#!/bin/bash

VERSION='1.0.0'
docker buildx build -t eronbituchenik/cityexplorer:$VERSION  --platform linux/arm64,linux/amd64 .
docker push eronbituchenik/cityexplorer:$VERSION