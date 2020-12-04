import {queryCache, useQuery} from 'react-query';

function FetchData() {
    return fetch('https://web-server-book-dicoding.appspot.com/list')
                .then(data => data.json())
                .then(res => {
                    return res.books;
                })
}

function usePost(key) {
    return useQuery(key, FetchData, {
        refetchOnWindowFocus : false,
    })
}

export default usePost;