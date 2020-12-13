import { queryCache, useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

let ENDPOINT;
let METHOD;
let HEADERS;
let dataBook, key, param;

async function FetchDataMutation(data){
    const dataMutation = data[0];
    
    // Check endpoint API
    if(data[1].endpoint === 'POST') {
        ENDPOINT = 'https://web-server-book-dicoding.appspot.com/add';
        METHOD = 'POST';
        CheckHeaders('POST');
    }
    else if(data[1].endpoint === 'UPDATE') {
        ENDPOINT = `https://web-server-book-dicoding.appspot.com/edit/${data[0].id}`; 
        METHOD = 'PUT';
        CheckHeaders('UPDATE');
    }
    else if(data[1].endpoint === 'DELETE') {
        ENDPOINT = `https://web-server-book-dicoding.appspot.com/delete/${data[0].id}`; 
        METHOD = 'DELETE';
        CheckHeaders('DELETE');
    }

    return fetch(ENDPOINT, {
        method : METHOD,
        headers : HEADERS,
        body : JSON.stringify(dataMutation)
    })
    .then(data => data.json())
    .then(res => {
        queryCache.refetchQueries();
        return res;
    })
}

function useMutationPost() {
    const historyPage = useHistory();

    return useMutation(FetchDataMutation, {
        onMutate : (newData) => {
            key = 'dataBook';
            
            if(newData[1].endpoint === 'POST') param = 'GET';
            else if(newData[1].endpoint === 'UPDATE') param = ['FIND', newData[0].id];
            else if(newData[1].endpoint === 'DELETE') {
                alert('DATA BERHASIL DIHAPUS');
                return historyPage.push('/admin');
            }
            
            dataBook = queryCache.getQueryData([key, param]);

            queryCache.setQueryData([key, param], old => {
                if (param === 'GET') return [...old, newData[0]];
                else if(param[0] === 'FIND') return newData[0];
            });                        
        }
    })
}

function CheckHeaders(method) {
    if(method === 'POST' || method === 'UPDATE') {
        HEADERS = {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Content-Type" : "application/json",
            "X-Auth-Token" : "12345" 
        }
    }else {
        HEADERS = {
            "X-Auth-Token" : "12345" 
        }
    }

    return HEADERS;
}

export default useMutationPost;