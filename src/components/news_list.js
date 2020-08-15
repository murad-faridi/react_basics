import React from 'react'
import NewsListItem from './news_list_item'

const News = (props) => {
    const news = props.news.map( (item) => {
        return <NewsListItem item={item} key={item.id} />
    })
    return(
        <div>
            {news}
        </div>
    )
}

export default News