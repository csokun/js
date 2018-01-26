#!/bin/bash
# Pre-requisites:
# ----------------------------------------------
# setup development environment (Ubuntu)

# review packages version
echo "# visit: https://download.docker.com/linux/ubuntu/dists/zesty/pool/stable/amd64/
export DOCKER_VERSION=17.12.0
# visit: https://github.com/creationix/nvm#installation
export NODE_NVM_VERSION=0.33.8
" > /tmp/version
vi /tmp/version
source /tmp/version

# install standard packages
sudo su -
apt install -y git tmux vim chromium-browser calibre shutter
exit

# install powerline fonts
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts && ./install.sh && cd ..
rm -rf fonts

# tmux config
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
wget https://raw.githubusercontent.com/csokun/js/master/.tmux.conf
 
# vim config
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
wget https://raw.githubusercontent.com/csokun/js/master/.vimrc

# install nvm - Node Version Manager 
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v${NODE_NVM_VERSION}/install.sh | bash
source ~/.bashrc
# install node lts
nvm install --lts && nvm use --lts

# docker
DOCKER_PACKAGE=docker-ce_${DOCKER_VERSION}~ce-0~ubuntu_amd64.deb
wget https://download.docker.com/linux/ubuntu/dists/zesty/pool/stable/amd64/$DOCKER_PACKAGE
sudo su -
dpkg -i $DOCKER_PACKAGE
usermod -aG docker $USER		# run docker without sudo
systemctl enable docker			# start docker on boot
exit

# git credential - remember for 24hr
git config credential.helper
git config --global credential.helper "cache --timeout=86400"

# terminal theme
wget -O gogh https://git.io/vQgMr && chmod +x gogh && ./gogh

# cleanup
rm /tmp/version
