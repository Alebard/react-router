import styled from "styled-components";

const newsData = [
    {
        newsTitle: 'News 1',
        newsText: 'News text 1'
    },
    {
        newsTitle: 'News 2',
        newsText: 'News text 2'
    },
    {
        newsTitle: 'News 3',
        newsText: 'News text 3'
    },
]

const NewsWrapper = styled.div`
        margin: 20px auto;
        padding: 5px;
        border: 1px solid black;
        text-align: center;
    `;
const NewsTitle = styled.div`
        text-decoration: underline;
    `;

const newsList = newsData.map((item) =>{



    return(
        <NewsWrapper key={item.newsTitle}>
            <NewsTitle>{item.newsTitle}</NewsTitle>
            <div>{item.newsText}</div>
        </NewsWrapper>
    )

})

export function News() {
    return (
        <div>
            {newsList}
        </div>
    )
}