import { queryCache, useMutation } from 'react-query';

async function FetchDataMutation(data){
    return fetch('https://web-server-book-dicoding.appspot.com/add', {
        method : 'post',
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Type" : "application/json",
            "X-Auth-Token" : "12345" 
        },
        body : JSON.stringify(data)
    })
    .then(data => data.json())
    .then(res => {
        return res;
    })
}

function useMutationPost() {
    return useMutation(FetchDataMutation, {
        onMutate : (newData) => {
            const dataBook = queryCache.getQueryData('dataBook');
            queryCache.setQueryData('dataBook', old => [...old, newData]);
            
            return () => queryCache.setQueryData('dataBook', dataBook)
        },
        onError : (err, newData, rollback) => rollback(),
        onSettled : () => queryCache.invalidateQueries('dataBook')
    })
}

export default useMutationPost;