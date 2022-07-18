import React from 'react';
import { View } from 'react-native';
import { Friend } from '../Friend';

interface ItemProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export function FriendList({data}: ItemProps){
  return (
    <View>
      {
        data.map(friend => (
          <Friend 
            key={String(friend.id)}
            data={friend}
          />
        ) )
      }
    </View>
  );
}