import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { NgForOf } from '@angular/common';

@Injectable()
export class PostService {

  constructor() { }
  
  salvar(post: Post){
    const posts = this.buscarTodos();
    posts.push(post);
    window.localStorage.setItem('posts', JSON.stringify(posts));
    //localstorage pertence ao window
    //console.log(post);
  }

  buscarTodos(): Post[]{
    return JSON.parse(window.localStorage.getItem('posts')) || []; 
    //se o primeiro lado (antes do ou) for falso/null/undefined, retorna um array vazio
  }

  retornarPost(){
    const posts = this.buscarTodos();
    return posts[1];
  }

  retornarPostSecundario() : Post[]{
    const posts = this.buscarTodos();
    return posts;
    
  }

}


