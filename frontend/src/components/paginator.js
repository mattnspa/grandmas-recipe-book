import Pagination from 'react-bootstrap/Pagination';

export const Paginator = props => {
  const { currentPage, previousPage, nextPage, lastPage, pageChange} = props;

  const pagePriority = [
    currentPage,
    previousPage,
    nextPage,
    previousPage - 1,
    nextPage + 1,
    previousPage - 2,
    nextPage + 2,
    previousPage - 3,
    nextPage + 3,
  ];

  const arr = pagePriority.filter(page => {return (!isNaN(page) && page > 0 && page <= lastPage);})
  const uniquePageArr = [...new Set(arr)];
  const pageArr = uniquePageArr.slice(0,5)
  pageArr.sort();

  const handlePageRequest = (page) => {
    pageChange(`?page=${page}&limit=6`);
  }
  return (
    <Pagination>
      <Pagination.Prev disabled={!previousPage} onClick={() => {handlePageRequest(previousPage)}}/>
      
      {pageArr.map((page,index) => <Pagination.Item key={page} active={page === currentPage ? true : false}  onClick={() => {handlePageRequest(page)}}>
        {page}
        </Pagination.Item>
        )}

      <Pagination.Next  disabled={!nextPage} onClick={() => {handlePageRequest(nextPage)}} />
    </Pagination>
  );
}