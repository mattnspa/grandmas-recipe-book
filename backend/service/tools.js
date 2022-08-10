
/**
 * Return a paginated data object.
 * @param {[]} data List of recipes
 * @returns {{}} paginated json.
 */
 module.exports = {
  paginate: function(data,queryLimit,queryPage) {
    minLimit = 1
    maxLimit = 4
    const limit = parseInt(queryLimit) ? Math.min(Math.max(parseInt(queryLimit),minLimit),maxLimit) : maxLimit;
    minPage = 1
    maxPage = Math.ceil(data.length / limit)
    const page = parseInt(queryPage) ? Math.min(Math.max(parseInt(queryPage),minPage),maxPage) : minPage;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let paging = {};
    if (endIndex < data.length) {
      paging.nextPage = page + 1
    }
    if (startIndex > 1) {
      paging.previousPage = page - 1
    }
    paging = {
      ...paging,
      currentPage: page,
      lastPage: maxPage,
      startIndex: startIndex,
      endIndex: endIndex
    };
    return {
      paging: paging,
      data: data.slice(startIndex, endIndex)
    }; 
  },
  sleep: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}