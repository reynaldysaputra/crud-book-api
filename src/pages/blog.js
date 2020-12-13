import React, { Fragment } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import {Book} from '../components/book';
import usePost from '../hook/usePost';
import Loading from '../components/loading';

function Blog() {
    const {data:DataBook, isLoading} = usePost(['dataBook', 'GET']);

    return(
        <Fragment>
            {isLoading ? 
                <Loading/>  : 
                <SimpleGrid columns={[1,1,2,2]} gap={5} px={[3,3,10,10]}>
                    {DataBook.map((item) => (
                        <Book 
                            key={item.id}
                            heading={item.title}
                            text={item.author}
                            id={item.id}
                        />
                    ))}
                </SimpleGrid>
            }
        </Fragment>
    )
}

export default Blog;