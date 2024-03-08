import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes, { element } from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // constructor() {
  //     super();
  //     this.state = {
  //         articles: [],sp
  //         loading: true,
  //         page: 1,
  //         totalResults : 0
  //     };
  // }

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f82887cc76c041428e32cafe69cd060e&page=${page}&pageSize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);

    let parsedData = await data.json();

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=f82887cc76c041428e32cafe69cd060e&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    // setLoading(false)
  };
  return (
    // <div className="container mx-auto sm:px-4 my-4 gx-3 flex ">
    //   {/* {loading && <Spinner />} */}

    //   <div className="flex">
    //     {articles.map((element) => {
    //       return (
    //         <div className="md:w-1/3 pr-4 pl-4 " key={element.url}>
    //           <Newsitem
    //             title={element.title ? element.title : ""}
    //             description={element.description ? element.description : ""}
    //             imgurl={element.urlToImage}
    //             newsurl={element.url}
    //             author={element.author}
    //             date={element.publishedAt}
    //           />
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <InfiniteScroll
    //     dataLength={articles.length}
    //     next={fetchMoreData}
    //     hasMore={articles.length !== totalResults}
    //     // loader={<Spinner />}
    //   ></InfiniteScroll>
    // </div>
    <>
    <Navbar/>
    <div className=" w-5/6 my-0 mx-auto p-12">
      <div className=" grid grid-cols-3 gap-[25px]">
        {articles.map((element) => {
          return (
            <div className=" rounded p-5" key={element.url}>
              <Newsitem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imgurl={element.urlToImage}
                newsurl={element.url}
                author={element.author}
                date={element.publishedAt}
              />
            </div>
          );
        })}
      </div>
      
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        // loader={<Spinner />}
      ></InfiniteScroll>
    </div>    <Footer/>
    </>
  );
}

News.defaultProps = {
 
  pageSize: 8
}
News.propTypes = {
 
  pageSize: PropTypes.number
 
}

export default News;

// import React, {useEffect, useState} from 'react'
// // import NewsItem from './Newsitems'
// // import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
// import Newsitems from './Newsitemsone';

// function News (props) {
//     const [articles, setArticles] = useState([])
//     const [loading, setLoading] = useState(true)
//     const [page, setPage] = useState(1)
//     const [totalResults, setTotalResults] = useState(0)

//     const capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     const updateNews = async ()=> {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
//         setLoading(true)
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(parsedData.articles)
//         setTotalResults(parsedData.totalResults)
//         setLoading(false)
//     }

//     useEffect(() => {
//         document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
//         updateNews();
//         // eslint-disable-next-line
//     }, [])

//     const fetchMoreData = async () => {
//         const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
//         setPage(page+1)
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         setArticles(articles.concat(parsedData.articles))
//         setTotalResults(parsedData.totalResults)
//       };

//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
//                 {loading && <Spinner />}
//                 <InfiniteScroll
//                     dataLength={articles.length}
//                     next={fetchMoreData}
//                     hasMore={articles.length !== totalResults}
//                     loader={<Spinner/>}
//                 >
//                     <div className="container">

//                     <div className="row">
//                         {articles.map((element) => {
//                             return <div className="col-md-4" key={element.url}>
//                                 <Newsitems title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                             </div>
//                         })}
//                     </div>
//                     </div>
//                 </InfiniteScroll>
//             </>
//         )

// }

// News.defaultProps = {
//     country: 'in',
//     pageSize: 8,
//     category: 'general',
// }

// News.propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     category: PropTypes.string,
// }

// export default News
