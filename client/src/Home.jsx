import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';
import activities from './activity.json';
import AppNav from './AppNav';
import Activity from './Activity';

function Home() {
   const [activity, setActivity] = useState(' ');
   const [isOpen, setIsOpen] = useState(false);

   function randomActivity() {
      const randomIndex = Math.floor(
         Math.random() * activities.activities.length
      );
      const randomActivity = activities.activities[randomIndex];
      setActivity(randomActivity);
      setIsOpen(true);
   }

   return (
      <Box
         bg="linear-gradient(rgba(0, 0, 0, 0) 100%, #000), url('home-bg.jpg')"
         backgroundRepeat="no-repeat"
         backgroundSize="cover"
         height="100vh"
         display="flex"
         flexDirection="column"
         transition="all 0.3s ease-in"
      >
         <AppNav />
         <Box /*className="cta"*/ marginTop="100px">
            <Box /*className="cta-text" */>
               <Text>
                  Praise, this year?
                  <br />
                  No Gree for "brain-dulling" activities.
               </Text>
               <Text
                  fontSize="0.8rem"
                  fontWeight="300"
                  color="#fff"
                  marginTop="20px"
                  transition="all 0.3s ease-in"
               >
                  Don’t have any?{' '}
                  <span>
                     {' '}
                     <Link to="/activities">
                        {' '}
                        Set your preferred activities.
                     </Link>
                  </span>
               </Text>
               <Button
                  title="Pick an activity"
                  className="cta-button"
                  onClick={randomActivity}
                  marginTop="20px"
               >
                  Choose Activity
               </Button>
            </Box>
         </Box>
         <Activity
            activity={activity}
            open={isOpen}
            onClose={() => setIsOpen(false)}
         />
      </Box>
   );
}

export default Home;
