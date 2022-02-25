import React from 'react'
import './NewsCard.css'

const NewsCard = ({newsItem}) => {
// console.log(newsItem);
const fulldate = new Date(newsItem.publishedAt);

var date = fulldate.toString().split(" ");
const hour = parseInt(date[4].substring(0, 2));
const time = hour>12?true:false;


    return (
        <div className='newscard'>
            <img alt={newsItem.title} src=
            {
                newsItem.urlToImage?newsItem.urlToImage:""
        }
            className='newsImage'
            />
            <div className='newsText'>
                <div className='newsTitle'>
                    <span className='title'>{newsItem.title}</span>
                    <span className='author'>
                       {" - "}
                        <span className='muted'>
                              by {newsItem.author?newsItem.author:"unknown"} 
                              {"  /Time-"}
                             {
                                 time? `${hour-12}:${date[4].substring(3, 5)} pm:` : `${hour}:${date[4].substring(3, 5)} am:`
                             } Date {date[2]} {date[1]} {date[3]}, {date[0]}
                        </span>
                       

                    </span>
                </div>

                <div className='lowerNewsText'>
                    <div className='description'>
                        {newsItem.description}</div>
                        <span className='readMore'> read more at  <a href={newsItem.url} target="__blank">
                            <b>{newsItem.source.name}</b>
                        </a></span>
                    
                </div>

            </div>
        </div>
    )

}

export default NewsCard
