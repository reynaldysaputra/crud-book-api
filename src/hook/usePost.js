import {queryCache, useQuery} from 'react-query';

function FetchData(key, param) {
    return fetch('https://web-server-book-dicoding.appspot.com/list')
                .then(data => data.json())
                .then(res => {
                    if(param === 'GET') return res.books;
                    else if(param[0] === 'FIND') return res.books.find(item => item.id === param[1]);
                })
}

function usePost([key, param]) {
    return useQuery([key, param], FetchData, {
        refetchOnWindowFocus : false,
    })
}

export default usePost;