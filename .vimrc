set nocompatible	" be iMproved, required
filetype off		" required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" load more plugins
Plugin 'tpope/vim-fugitive'
Plugin 'scrooloose/nerdtree'
Plugin 'easymotion/vim-easymotion'
Plugin 'ctrlpvim/ctrlp.vim.git'
Plugin 'vim-airline/vim-airline.git'

" colorschemes
Plugin 'nanotech/jellybeans.vim.git'

" All plugin must be added before the following commands
call vundle#end()		" required
filetype plugin indent on	" required

" VIM config
set number
set numberwidth=5

set backspace=2			" Backspace deletes like most programs in insert mode
set tabstop=2				" Show existing tab with 2 spaces width
set shiftwidth=2		" When indenting with '>', use 2 spaces width
"set expandtab			" On pressing tab insert 2 spaces

set ruler
set showcmd
set incsearch
set laststatus=2		" Always display the status line
set autowrite				" Automatically :write before running commands

colorscheme jellybeans

" Make it obvious where 80 characters is
"set textwidth=80
"set colorcolumn=1

" Save File with Leader + s
nnoremap <leader>s :w<cr>
inoremap <leader>s <C-c>:w<cr>

" Quick window movement
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-h> <C-w>h
nnoremap <C-l> <C-w>l

" CtrlP - https://github.com/ctrlpvim/ctrlp.vim
let g:ctrlp_root_markers = ['package.json']
let g:ctrlp_user_command = ['.git', 'cd %s && git ls-files -co --exclude-standard']

" NERDTree
map <C-n> :NERDTreeToggle<CR> " Ctrl + n
" open a NERDTree automatically when vim starts up if no file were speicified
autocmd StdinReadPre * let s:std_in=1
autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
" close vim if the onl window left option is a NERDTree
" autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif
let NERDTreeShowHidden	= 1
let NERDTreeIgnore			= ['.git$[[dir]]', '.swp', 'node_modules', '\.png$', '\.jpg$']

" airline
let g:airline_powerline_fonts = 1