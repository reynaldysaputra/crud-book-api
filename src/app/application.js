import React from 'react';
import { Box, ChakraProvider, Divider, Grid } from "@chakra-ui/react"
import { chakraTheme } from './settingChakra';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import Home from '../pages/home';
import Blog from '../pages/blog';
import Admin from '../pages/admin';
import Navigation from '../component/navigation';
import PageUpdateBook from '../pages/updateBook';

function App() {
    return(
        <ChakraProvider theme={chakraTheme}>
            <BrowserRouter>
                <Grid w='full' gridTemplateColumns={{md:'100%', lg:'15% 85%', xl:'15% 85%'}} mt='1%'>
                    <Box borderRight='2px solid #0C151D'>
                        <Navigation/>
                    </Box>
                    <Box pl='3%'>
                        {/* Route Link and Result Page  */}
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/blog' exact  component={Blog} />
                            <Route path='/admin' component={Admin} />
                            <Route path='/blog/123' component={PageUpdateBook} />
                        </Switch>
                    </Box>
                </Grid>
            </BrowserRouter>
        </ChakraProvider>
    )
}

export default App;