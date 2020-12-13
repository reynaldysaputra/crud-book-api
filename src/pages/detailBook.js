import React, { Fragment } from 'react';
import usePost from '../hook/usePost';
import {Heading, Button} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';

function DetailBook({match, lastLocation}) {
    const {data:dataBook, isLoading, isSuccess} = usePost(['dataBook', ['FIND', parseInt(match.params.id)]]);
    const historyPage = useHistory();

    if(isLoading) return null;

    return(
        <Fragment>
            <Heading color='white' fontSize='xl'>ID Buku       : {dataBook.id}</Heading>
            <Heading color='white' fontSize='xl'>Nama Buku : {dataBook.title}</Heading>
            <Heading color='white' fontSize='xl'>Author          : {dataBook.author}</Heading>

            <Button mt='2%' onClick={() => {
                if(lastLocation.pathname === '/blog') historyPage.goBack();
                else historyPage.push('/admin');
            }}>Back</Button>
        </Fragment>
    )
}

export default withLastLocation(DetailBook);