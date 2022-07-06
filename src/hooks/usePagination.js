
export const DOTS = "...";

function usePagination(paginationData) {
  /*
    Rewrite the logic here to map out the pagination to be displayed

    !!!!!! ATTENTION !!!!!!
    this hook help us to hook onto the lifecycle to get the current page,page size ,total page count values when the user click the
    right and left arrows
    
  */



 function pageCountFunction(pages){
  let floor=Math.floor(paginationData.totalCount/pages)
  if(Math.abs(floor-paginationData.totalCount/pages)>0){
    return floor+1;
  }else{
    return floor;
  }
  
}
const currentPage=paginationData.currentPage;
const size =paginationData.pageSize
const pages=pageCountFunction(size)

 

   if( pages==1){
    return [1]
   }else if(pages==2){
    return [1,2]
   }else if(pages==3){
    return [1,2,3]
   }else if((currentPage==1||currentPage==2 ||currentPage==3)  && pages > 3){
    return [1,2,3,DOTS,pages]
   }else if((currentPage==pages||currentPage==pages-1 ||currentPage==pages-2)  && pages >3){
    return [1,DOTS,pages-2,pages-1,pages]
   }else {
    return [1,DOTS ,currentPage-1,currentPage,currentPage+1,DOTS,pages]
   }
   
 
}

export default usePagination;
