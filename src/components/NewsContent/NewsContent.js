import { Button, Container } from '@mui/material'
import React from 'react'
import './NewsContent.css';
import NewsCard from '../NewsCard/NewsCard'

const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore }) => {
    return <Container maxWidth = "md">
        
        <div className='content'>
            

       {
           newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>
           ))
       }

       {
           loadmore<=newsResults && (
               <>
                <hr/>
        <button className='loadMore' onClick={()=>setLoadmore(loadmore + 10)}>
            Load More
        </button>
               </>
           )
       }

       
        
        </div>
    </Container>
    
}

export default NewsContent;
