import React from 'react';

import FriendsData from '../../../public/friendsData.json'
import FriendCard from './FriendCard';

const Friends = () => {

   
    // console.log(FriendsData);
    
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                FriendsData.map(Friend => <FriendCard key={Friend.id} Friend={Friend}></FriendCard>)
            }
        </div>
    );
};

export default Friends;