import React, { Fragment } from 'react';
import { Box, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import {TitleBook} from '../components/book';
import usePost from '../hook/usePost';
import { useForm } from 'react-hook-form';
import useMutationBook from '../hook/useMutationBook';
import { useHistory } from 'react-router-dom';

function PageUpdateBook({match}) {
    const {data:dataBook, isLoading, isSuccess} = usePost(['dataBook', ['FIND', parseInt(match.params.id)]]);
    const [mutate, {isLoading:loadingMutation}] = useMutationBook();
    const { register, handleSubmit } = useForm();
    const pageHistory = useHistory();

    const handleDataUpdate = (data) => {
        mutate(
            [
                {
                   id : dataBook.id,
                   title : data.title,
                   author : data.author 
                },{
                    endpoint : 'UPDATE'
                }
            ]
        )
    };

    const handleDataDelete = (data) => {
        if(window.confirm('Apakah anda yakin ingin menghapus data ini ?')) {
            mutate(
                [
                    {
                        id : dataBook.id
                    },
                    {
                        endpoint : 'DELETE'
                    }
                ]
            )
        }
    }

    if(isLoading) return null;

    return(
        <Fragment>
            {dataBook === undefined ? pageHistory.push('/admin') :
                <>
                    <Box pt='20px'>
                        <TitleBook heading={dataBook.title} />
                        <Text my='2%' fontSize='1xl' color='fontColorFirst' fontWeight='bold' cursor='pointer' onClick={() => pageHistory.push(`/blog/${dataBook.id}`)}>View Post</Text>
                    </Box>

                    <FormControl id="first-name" isRequired mt='2%'>
                        <FormLabel color='white' opacity='.8'>Title</FormLabel>
                        <Input layerStyle='inputStyle' name='title' defaultValue={dataBook.title} ref={register} />

                        <FormLabel color='white' opacity='.8' mt='2%' htmlFor='author'>Author</FormLabel>
                        <Input layerStyle='inputStyle' id='author' name='author' defaultValue={dataBook.author} ref={register} /><br/>

                        <Button 
                            mt='3%' 
                            bg='#161E20' 
                            color='white' 
                            opacity='.8' 
                            _hover={{background : '#28373F'}}
                            onClick={handleSubmit(handleDataUpdate)}>
                            Update Book
                        </Button> <br/>
                        <Button 
                            mt={['3%','3%','1%','1%']} 
                            bg='#161E20' 
                            color='white' 
                            opacity='.8' 
                            _hover={{background : '#28373F'}}
                            onClick={handleSubmit(handleDataDelete)}>
                            Delete Book
                        </Button>
                    </FormControl>
                </>
            }
        </Fragment>
    )
}

export default PageUpdateBook;