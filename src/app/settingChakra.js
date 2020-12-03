import {color, extendTheme} from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
    sm : '640px',
    md : '768px',
    lg : '1024px',
    xl : '1280px'
});

const myColor = {
    navbarColor : '#2C2E3F',
    fontColorFirst : '#538AAC',
    pinkColor : '#FE7865'
}

const myTheme = {
    colors : {
        ...myColor
    },

    breakpoints,
    
    styles : {
        global : () => ({
            'html, body' : {
                background : '#1D272D'
            }
        })
    },

    layerStyles : {
        effectBox : {
            transition : '.5s',
            _hover : {
                boxShadow : 'lg'
            }
        },
        effectLineBottom : {
            _hover : {
                textDecoration : 'underline'
            }
        },
        inputStyle : {
            w:['80%','80%','30%','30%'],
            bg:'#161E20',
            border:'none',
            color:'white',
            opacity:'.8' 
        }
    }
}

export const chakraTheme = extendTheme({
    ...myTheme
});

