import { useState } from 'react'

export const usePagination = (data=[], itemsPerPage) => {
    
    const [ currentPage, setcurrentPage ] = useState(1)
    const maxPage = Math.ceil(data.length / itemsPerPage)

    const begin = (currentPage - 1) * itemsPerPage; // (2 - 1) * 10
    const end = begin + itemsPerPage
    
    const currenCharacters = () => {
        return data.slice(begin, end)
    };

    const next = () => {
        setcurrentPage((currentPage) => Math.min(currentPage + 1, maxPage))
    }

    const prev = () => {
        setcurrentPage((currentPage) => Math.max(currentPage - 1, 1))
    }
    
    const jump = (page) => {
       const pageNumber = Math.max(1, page)
       setcurrentPage((currentPage) => Math.min(pageNumber, maxPage))
    }
    
    return { next, prev, currentPage, jump, currenCharacters, maxPage }
}


// function usePagination(data, itemsPerPage) {
//     4    const [currentPage, setCurrentPage] = useState(1);
//     5    const maxPage = Math.ceil(data.length / itemsPerPage);
//     6
//     7  function currentData() {
//     8    const begin = (currentPage - 1) * itemsPerPage;
//     9    const end = begin + itemsPerPage;
//     10   return data.slice(begin, end);
//     11  }
//     12
//     13  function next() {
//     14    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
//     15  }
//     16
//     17  function prev() {
//     18    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
//     19  }
//     20
//     21  function jump(page) {
//     22    const pageNumber = Math.max(1, page);
//     23    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
//     24  }
//     25
//     26  return { next, prev, jump, currentData, currentPage, maxPage };
//     27 }
//     28
//     29 export default usePagination;