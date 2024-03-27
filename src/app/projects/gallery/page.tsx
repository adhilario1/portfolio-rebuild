import React, { useState } from 'react'

import { CreatePostsInput, posts } from '@/API';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Footer from '@/components/Footer';
import { fetchPostsList } from '@/utils/GalleryCookieClient';
import Modal from '@/components/Modal';

import './gallery.css'
import '@/css/App.css'

async function Gallery() {
  
  const {data_list, errors} = await fetchPostsList();
  const posts: posts[] = data_list;

  function filterData() {

  }
  
 {/*
              <select className='dropdown filter' /*value={filter} onChange={handleFilterChange}>
              <option value={""}>All</option>
              <option value={"3d-modelling"}>3D Modeling</option>
              <option value={"Graphic Design"}>Graphic Design</option>
              <option value={"vid-prod"}>Video Production</option>
              <option value={"web-dev"}>Web Dev</option>
            </select>
                      
            <select className='dropdown sort' /*value={sortKey} onChange={handleSortChange}>
              <option value={"none"}>---</option>
              <option value={"year"}>Year</option>
              <option value={"title"}>Title</option>
              <option value={"type"}>Format</option>
              <option value={"discipline"}>Discipline</option>
            </select>
            */}
  return (
    <>
      <Header />
      <Body>
        <div className='content'>
          <div className='gallery'>
            <div className='subheader'>
              <div className='gallery-title'>
                <h1>Gallery.</h1>
                <h2></h2>
              </div>
              <div className='spacer' />
              
            </div>
          </div>

          <div className='viewport-container'>
            {(!posts || posts.length === 0 || errors) && (
            <div>
              <p>No Posts, please add one</p>
            </div>
            )}
            <ul>
              {posts.map((post) => {
                return (
                  <li key={post.id}>
                    <Modal className='Modal' post={post} />
                  </li>
                )
              })}
            </ul>
          </div>
          
        </ div>
      </ Body>
      <Footer />
    </>
  )
}

export default Gallery


