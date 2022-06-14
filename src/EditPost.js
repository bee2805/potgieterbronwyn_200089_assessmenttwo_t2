import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const EditPost = () => {


  return (
    <div className='modal'>
      <form>
        <h1>Made a Mistake? Edit that shit!</h1>
        <p>Close Modal</p>
        <textarea id='updateText' placeholder='Edit Post Message'/>
        <button type='submit'>Edit this post</button>
      </form>
    </div>
  )
}

export default EditPost
