import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState  } from "react";
const PAGE_SIZES = [15, 25, 50, 100,162,250,300,450,650];

function BlogList() {
  const [currentPaginationData,setPages]=useState(blogs.posts.slice(0, 15))
  const [pageSize,setPageSize]=useState(15);
  const [currentPage,setCurrentPage]=useState(1);
  const [startPost,setStartPost]=useState(0);
  const [endPost,setEndPost]=useState(15);
  const [pageCount,setPageCount]=useState(pageCountFunction(15));
  ///declare function to count the pages count based on page size
  function pageCountFunction(pages){
    let floor=Math.floor(blogs.posts.length/pages)
    if(Math.abs(floor-blogs.posts.length/pages)>0){
      return floor+1;
    }else{
      return floor;
    }
    
  }
  
  ///update the rows count per page
  const updateRowsPerPage = (e) => {
    
    setPageSize(parseInt(e));
    setPageCount(pageCountFunction(parseInt(e)));
    setEndPost(0);   
    setPages(blogs.posts.slice(0,parseInt(e)));
    setCurrentPage(1)
  };

  ///update the page when pressign arrows
  const updatePage = (e) => {
    
   if(e<1){e=1}
   if(e>pageCount){e=pageCount}
   
   setCurrentPage(e);
   setStartPost((parseInt(e)-1)*pageSize)
   setEndPost((parseInt(e)-1)*(pageSize)+pageSize)
   setPages(blogs.posts.slice((parseInt(e)-1)*pageSize,(parseInt(e)-1)*(pageSize)+pageSize))
   
  };

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={blogs.posts.length}
        pageSize={pageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) =>{
        return  (
    
          
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}

          />
    
        )})}
      </ul>
    </div>
  );
}

export default BlogList;
