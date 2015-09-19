#!/bin/bash
# usage: Vagrant-provision.sh

sudo apt-get update
echo "installing the essentials"
sudo apt-get install -y curl git mercurial make binutils bison gcc build-essential

if [ ! -d $HOME/.nvm ]; then
  echo "fetching and installing NVM"
  curl --silent -o- https://raw.githubusercontent.com/creationix/nvm/v0.26.1/install.sh | bash
fi

. ~/.nvm/nvm.sh

echo "installing node"
nvm install 0.12
nvm use 0.12
nvm alias default 0.12

CHDIR='cd /vagrant'
grep -q -F "$CHDIR" $HOME/.bashrc || echo "$CHDIR" >> .bashrc
