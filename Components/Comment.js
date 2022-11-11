import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({ message, mark, type }) => {
  const color = mark ? 'red' : 'black';
  return <Text style={{ color: color }}>{message}</Text>;
};

export default Comment;
