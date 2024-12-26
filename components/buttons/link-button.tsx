import React from 'react';
import { Pressable, Text, type TextStyle } from 'react-native';
import { type Href, Link } from 'expo-router';

interface Props {
  text: string;
  href: Href;
  style: TextStyle;
  disabled?: boolean;
}

const LinkButton: React.FC<Props> = ({ text, href, style }) => {
  return (
    <Link href={href} asChild>
      <Pressable>
        <Text style={style}>{text}</Text>
      </Pressable>
    </Link>
  );
};

export default LinkButton;
