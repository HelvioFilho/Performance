import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Friend } from '../Friend';

interface ItemProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export function FriendList({data}: ItemProps){
  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
    return likes + friend.likes;
  },  0);
}, [data]);

  return (
    <View>
      <Text>
        Total de likes: {totalLikes}
      </Text>
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