import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const {width} = Dimensions.get("window");
const column = 3;
const margin = 10;
const SIZE = (width - (margin * column * 2)) / column;

const data = require(`../api/CONTENTLISTINGPAGE-PAGE1.json`);
let dataSource = [];

class SearchMovieScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            searchResult: [],
            searchInput: '',
            autoFocus:true,
        }
    }

    componentDidMount() {
        this.loadMovies();
    }

    /**
     * Load Movies
     */
    loadMovies = () => {
        const { contents } = this.state;
        const { page: { 'content-items': {content} } } = data;
        this.setState({contents: content})
    };


    PosterFilter(posterimage) {
        switch(posterimage) {
            case 'poster1.jpg':
                return require('../assets/slices/poster1.jpg');
                break;
            case 'poster2.jpg':
                return require('../assets/slices/poster2.jpg');
                break;
            case 'poster3.jpg':
                return require('../assets/slices/poster3.jpg');
                break;
            case 'poster4.jpg':
                return require('../assets/slices/poster4.jpg')
                break;
            case 'poster5.jpg':
                return require('../assets/slices/poster5.jpg');
                break;
            case 'poster6.jpg':
                return require('../assets/slices/poster6.jpg');
                break;
            case 'poster7.jpg':
                return require('../assets/slices/poster7.jpg');
                break;
            case 'poster8.jpg':
                return require('../assets/slices/poster8.jpg');
                break;
            case 'poster9.jpg':
                return require('../assets/slices/poster9.jpg');
                break;
            default:
              return require('../assets/slices/placeholder_for_missing_posters.png');
          
        }
    }

    SearchFilterFunction(text) {
        const { searchInput, searchResult, contents } = this.state;
	    if(!text || text===''){
	       dataSource = [];
	     }else{
	       dataSource = contents;
	     }
	      //passing the inserted text in textinput
	    const newData = dataSource.filter(function(item) {
          //applying filter for the inserted text in search bar
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
	    });
	    this.setState({
	      searchResult: newData,
	      searchInput: text,
	    });
	}

    render() {
        const { contents, searchResult } = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#000"
                />
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter movie name"
                        placeholderTextColor="#fff"
                        onChangeText={text => this.SearchFilterFunction(text)}
                        value={this.state.searchInput}
                        
                    />
                    <FlatList
                        numColumns={3} // number of columns
                        data={searchResult}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={(movies) => {
                            return (
                                <View style={styles.listItem}>
                                    <Image
                                        source={this.PosterFilter(movies.item["poster-image"])}
                                        resizeMode='contain'
                                        style={styles.thumb}
                                    />
                                    <Text 
                                        style={{color: '#fff'}}>{movies.item.name}
                                    </Text>
                                </View>
                            );
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#000",
    },
    listItem: {
        margin: 10, 
        width: SIZE
    },
    thumb: {
        width: '100%',
        height: 189,
        resizeMode: 'contain',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#fff',
        color: '#fff',
    },
});

export default SearchMovieScreen;