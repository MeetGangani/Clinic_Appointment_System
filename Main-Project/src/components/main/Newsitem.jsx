import React from 'react'
function Newsitem(props){
        let { title, description ,imgurl , newsurl,author,date} = props
        return (
            <div className='my-3'>
                <div className=" flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" >
                    <img src={!imgurl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzQyiesjovetiwqwjWzss8ZX_baOSHBOiAgZsevkiBw&s":imgurl} className="w-full rounded rounded-t" alt="..." />
                    <div className="flex-auto p-6">
                        <h5 className="mb-3">{title}...</h5>
                        <p className="mb-0">{description}...</p>
                        <p className="mb-0"><small className="text-body-secondary">By "{author?author:"Unknown"}" on "{new Date(date).toGMTString()}"</small></p>
                        <a  rel="noreferrer" href={newsurl} target='_blank' className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-xs  bg-blue-600 text-white hover:bg-blue-600">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default Newsitem


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
