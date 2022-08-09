import Pagination from 'react-bootstrap/Pagination';

export const Paginator = props => {
  // console.log(handleClick)
  console.log(props)
  const { currentPage, previousPage, nextPage, lastPage, handleClick} = props;
  return (
    <Pagination>
      {/* If previous page defined, show previous page button*/}
      {previousPage && <Pagination.Prev onClick={() => {handleClick(previousPage)}}/>}
      {/* If current page not first page, show first page button*/}
      {(currentPage !== 1) && <Pagination.Item onClick={() => {handleClick(1)}} >{1}</Pagination.Item>}
      {/* If previous page and previous previous page not first page and currently not on first page, show ellipsis*/}
      {(previousPage !== 1) && (previousPage - 1 !== 1) && (currentPage !== 1) && <Pagination.Ellipsis onClick={() => {handleClick(previousPage - 1)}} />}
      {/* If previous page not first page and previous page is defined, show current page - 1 */}
      {(previousPage !== 1) && previousPage && <Pagination.Item onClick={() => {handleClick(previousPage)}} >{previousPage}</Pagination.Item>}
      
      <Pagination.Item active>{currentPage}</Pagination.Item>
      
      {/* If next page not last page and next page is defined, show current page + 1 */}
      {(nextPage !== lastPage) && nextPage && <Pagination.Item onClick={() => {handleClick(nextPage)}} >{nextPage}</Pagination.Item>}
      {/* If next page and next next page not last page and currently not on last page, show ellipsis*/}
      {(nextPage !== lastPage) && (nextPage + 1 !== lastPage) &&  (currentPage !== lastPage) && <Pagination.Ellipsis onClick={() => {handleClick(nextPage + 1)}} />}
      {/* If current page not last page, show last page button*/}
      {(currentPage !== lastPage) && <Pagination.Item onClick={() => {handleClick(lastPage)}}>{lastPage}</Pagination.Item>}
      {/* If next page defined, show next page button*/}
      {nextPage && <Pagination.Next onClick={() => {handleClick(nextPage)}} />}
    </Pagination>
  );
}