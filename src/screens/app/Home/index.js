import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {View, ScrollView, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import {categories} from '../../../data/categories';
import {products} from '../../../data/products';
import CategoryBox from '../../../components/CategoryBox';
import ProductHomeItem from '../../../components/ProductHomeItem';
const Home = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [keyword, setKeyword] = useState();
  console.log('keyword', keyword);

  useEffect(() => {
    if (selectedCategory && !keyword) {
      const updateProducts = products.filter(
        product => product?.category === selectedCategory,
      );
      setFilteredProduct(updateProducts);
    } else if (selectedCategory && keyword) {
      const updateProducts = products.filter(
        product =>
          product?.category === selectedCategory &&
          product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProduct(updateProducts);
    } else if (!selectedCategory && keyword) {
      const updateProducts = products.filter(product =>
        product?.title?.toLowerCase().includes(keyword?.toLowerCase()),
      );
      setFilteredProduct(updateProducts);
    } else if (!keyword && !selectedCategory) {
      setFilteredProduct(products);
    }
  }, [selectedCategory, keyword]);
  const reanderCategoryItem = ({item, index}) => {
    return (
      <CategoryBox
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
        isFirst={index === 0}
        title={item?.title}
        image={item?.image}
      />
    );
  };
  const reanderProductsItem = ({item}) => {
    const onProductPress = product => {
      navigation.navigate('ProductDetails', {product});
    };
    return <ProductHomeItem {...item} onPress={() => onProductPress(item)} />;
  };
  return (
    <SafeAreaView>
      <Header
        onSearch={setKeyword}
        keyword={keyword}
        showSearch
        title={'Find All You Need'}
      />

      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        horizontal
        data={categories}
        renderItem={reanderCategoryItem}
        keyExtractor={item => String(item.id)}
      />
      <FlatList
        style={styles.productsList}
        numColumns={2}
        data={filteredProduct}
        renderItem={reanderProductsItem}
        keyExtractor={(item, index) => String(index)}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </SafeAreaView>
  );
};
export default React.memo(Home);
