import React, { Fragment } from 'react';
import { Box, Divider, Heading, ListItem, UnorderedList, VStack, FormControl, Input, FormLabel, Button, SimpleGrid } from '@chakra-ui/react';
import {useHistory} from 'react-router-dom';
import usePost from '../hook/usePost';
import useMutationPost from '../hook/useMutationPost';
import {useForm} from 'react-hook-form';
import Loading from '../component/loading';
import UniqueNumber from 'unique-number';

function Admin() {
    const pageHistory = useHistory();
    const {data:DataBook, isLoading:loadingData} = usePost('dataBook');
    const [mutate, {isLoading:loadingMutation}] = useMutationPost();
    const { register, handleSubmit, watch, errors } = useForm();
    let uniqueNumber = new UniqueNumber(true);
    
    const handlePage = (e) => {
        const id = e.target.dataset.id;
        pageHistory.push(`/blog/${id}`);
    }
    
    const handleData = (data) => {
        mutate({
            id : uniqueNumber.generate(),
            title : data.title,
            author : data.author
        })
    };

    if(loadingData) return null;

    return(
        <Fragment>
            <Box p='20px'>
                    
                <SimpleGrid columns={2}> 
                    <Box pb={['10%','10%','3%','3%']}>
                        <UnorderedList color='fontColorFirst' fontWeight='bold' spacing={1} cursor='pointer'>
                            {DataBook.map((item) => (   
                                <ListItem layerStyle='effectLineBottom' key={item.id} data-id={item.id} onClick={handlePage}>{item.title}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                    {loadingMutation && <Loading/>}
                </SimpleGrid>

                <VStack justify='flex-start'><Divider boxSize='100%'/></VStack>

                <Box pb='3%'>
                    <Heading color='white' fontSize='2xl' my={['5%','5%',null,null]}>Create new book</Heading>

                    <FormControl id="first-name" isRequired mt='2%'>
                        <FormLabel color='white' opacity='.8'>Title</FormLabel>
                        <Input layerStyle='inputStyle' ref={register} name='title' />

                        <FormLabel color='white' opacity='.8' mt='2%' htmlFor='author'>Author</FormLabel>
                        <Input layerStyle='inputStyle' id='author' ref={register} name='author' /> <br/>

                        <Button mt={['8%','8%','3%','3%']} bg='#161E20' color='white' opacity='.8' _hover={{background : '#28373F'}} onClick={handleSubmit(handleData)}>Create Book</Button>
                    </FormControl>
                </Box>
            </Box>
        </Fragment>
    )
}

export default Admin;