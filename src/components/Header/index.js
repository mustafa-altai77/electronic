import React, {useState} from 'react';
import {Pressable, Text, Image, View} from 'react-native';
import {styles} from './styles';
import Input from '../input';

const Header = ({
  title,
  onBackPress,
  onLogout,
  showLogout,
  showSearch,
  showBack,
  onSearch,
  keyword,
}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const onSearchClick = () => {
    setShowSearchInput(showSearchInput => !showSearchInput);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (
          <Pressable hitSlop={20} onPress={onBackPress}>
            <Image
              style={styles.icon}
              source={require('../../assets/arrow.png')}
            />
          </Pressable>
        ) : showSearch ? (
          <Pressable hitSlop={20} onPress={onSearchClick}>
            <Image
              style={styles.icon}
              source={require('../../assets/search.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space}></View>
        )}
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (
          <Pressable hitSlop={20} onPress={onLogout}>
            <Image
              style={styles.icon}
              source={require('../../assets/switch.png')}
            />
          </Pressable>
        ) : (
          <View style={styles.space}></View>
        )}
      </View>
      {showSearchInput ? (
        <Input
          onChangeText={onSearch}
          value={keyword}
          placeholder="Type your keyword..."
        />
      ) : null}
    </View>
  );
};
export default React.memo(Header);
