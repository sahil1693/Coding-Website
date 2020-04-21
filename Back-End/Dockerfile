From ubuntu:latest

RUN apt-get update
RUN apt-get install -y gcc
RUN apt-get install -y g++
RUN apt-get install -y python3
COPY ./jdk-11.0.6_linux-x64_bin.deb .
RUN apt-get install -y ./jdk-11.0.6_linux-x64_bin.deb
RUN apt-get install -y default-jdk
