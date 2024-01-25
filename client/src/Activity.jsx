import ReactDom from 'react-dom';
import { Box, Link, Text } from '@chakra-ui/react';

function Activity({ activity, open, onClose }) {
   if (!open) {
      return null;
   }

   return ReactDom.createPortal(
      <>
         <Box
            className="overlay"
            backgroundColor="rgba(0, 0, 0, 0.9)"
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={1000}
         ></Box>
         <Box
            width="30%"
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            backgroundColor="#fff"
            padding="50px"
            zIndex={1000}
         >
            <Text
               fontFamily="DM Serif Display, serif"
               fontSize="1.5rem"
               fontWeight="600"
               color="#333"
               margin="20px 0"
            >
               {activity}
            </Text>
            <Box fontFamily="inherit" fontWeight="400" fontSize="12px">
               Remember that this only works when you actually do the activity.
               Completed?{' '}
               <Link
                  title="Activity completed"
                  cursor="pointer"
                  onClick={onClose}
                  textDecoration="underline"
               >
                  Click to close
               </Link>
            </Box>
         </Box>
      </>,
      document.getElementById('portal')
   );
}

export default Activity;
