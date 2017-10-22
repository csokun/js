#!/bin/bash
# Pre-requisites:
# ----------------------------------------------
# setup development environment (Ubuntu)
sudo su -
apt install -y git tmux vim
exit

# install powerline fonts
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts

# tmux config
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
wget https://github.com/csokun/js/blob/master/.tmux.conf
 
# vim config
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
wget https://github.com/csokun/js/blob/master/.vimrc

# install nvm - Node Version Manager 
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash
source ~/.bashrc

# docker
wget https://download.docker.com/linux/ubuntu/dists/zesty/pool/stable/amd64/docker-ce_17.09.0~ce-0~ubuntu_amd64.deb
sudo su -
dpkg -i docker-ce_17.09.0~ce-0~ubuntu_amd64.deb
usermod -aG docker $USER		# run docker without sudo
systemctl enable docker			# start docker on boot
exit


