import React from "react";
function Newsitem(props) {
  let { title, description, imgurl, newsurl, author, date } = props;
  return (
    // <div className='my-3'>
    //     <div className=" flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" >
    //         <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzQyiesjovetiwqwjWzss8ZX_baOSHBOiAgZsevkiBw&s":imgurl} className="w-full rounded rounded-t" alt="..." />
    //         <div className="flex-auto p-6">
    //             <h5 className="mb-3">{title}...</h5>
    //             <p className="mb-0">{description}...</p>
    //             <p className="mb-0"><small className="text-body-secondary">By "{author?author:"Unknown"}" on "{new Date(date).toGMTString()}"</small></p>
    //             <a  rel="noreferrer" href={newsurl} target='_blank' className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-xs  bg-blue-600 text-white hover:bg-blue-600">Read More</a>
    //         </div>
    //     </div>
    // </div>

    <div className=" border  rounded-lg shadow h-[550px] ">
      <div className=" ">
        <img
          src={
            !imgurl
              ? "https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"
              : imgurl
          }
          className=" w-full h-[300px]"
          alt="..."
        />

        <div className=" p-3">
          <div className=" line-clamp-2 mb-2 ">
            <h5 className="text-xl font-bold">{title}</h5>
          </div>
          <div className=" line-clamp-4">
            <p className=" text-lg">{description}</p>
          </div>
          <div className=" mt-4 ">
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* <div className=" p-5">
        <h2 className=" text-2xl font-semibold">{title}</h2>
        <p className=" ">{description}</p>
        {/* <p className="mb-0">
          <small className="text-body-secondary">
            By "{author ? author : "Unknown"}" on "
            {new Date(date).toGMTString()}"
          </small>
        </p> */}
      {/* <a
          rel="noreferrer"
          href={newsurl}
          target="_blank"
          className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-xs bg-[#4C3B4D] text-white"
        >
          Read More
        </a>  */}
      {/* </div> */}
    </div>

    // <div className="my-3">
    //     <div className="card">
    //         <div style={{
    //             display: 'flex',
    //             justifyContent: 'flex-end',
    //             position: 'absolute',
    //             right: '0'
    //         }
    //         }>
    //             <span className="badge rounded-pill bg-danger"> {source} </span>
    //         </div>
    //         <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
    //         <div className="card-body">
    //             <h5 className="card-title">{title}  </h5>
    //             <p className="card-text">{description}</p>
    //             <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
    //             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
    //         </div>
    //     </div>
    // </div>
  );
}

export default Newsitem;

// import React from 'react'

// function Newsitems(props) {
//         let { title, description, imageUrl, newsUrl, author, date, source } = props;
//         return (
//             <div className="my-3">
//                 <div className="card">
//                     <div style={{
//                         display: 'flex',
//                         justifyContent: 'flex-end',
//                         position: 'absolute',
//                         right: '0'
//                     }
//                     }>
//                         <span className="badge rounded-pill bg-danger"> {source} </span>
//                     </div>
//                     <img src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title}  </h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
//                         <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//                     </div>
//                 </div>
//             </div>
//         )

// }

// export default Newsitems;
