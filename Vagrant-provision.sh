#!/bin/bash
# usage: Vagrant-provision.sh

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash

. ~/.nvm/nvm.sh


nvm install 0.12
nvm use 0.12
nvm alias default 0.12
