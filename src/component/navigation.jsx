import React, {Fragment} from 'react';
import { Box, Divider, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return(
        <Fragment>
            <Box p='20px'>
                <UnorderedList color='fontColorFirst' cursor='pointer'>
                    <SimpleGrid justifyContent='center'>
                        <Box fontWeight='bold'>
                            <ListItem><NavLink to='/' exact>Home</NavLink></ListItem>
                            <ListItem><NavLink to='/blog'>Blog</NavLink></ListItem>
                            <Divider my='20%' />
                            <ListItem><NavLink to='/admin'>Admin</NavLink></ListItem>
                        </Box>
                    </SimpleGrid>
                </UnorderedList>
            </Box>
        </Fragment>
    )
}

export default Navigation;