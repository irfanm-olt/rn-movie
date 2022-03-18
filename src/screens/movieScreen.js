import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
const {width} = Dimensions.get("window");
const column = 3;
const margin = 10;
const SIZE = (width - (margin * column * 2)) / column;

const data1 = require(`../api/CONTENTLISTINGPAGE-PAGE1.json`);
const data2 = require('../api/CONTENTLISTINGPAGE-PAGE2.json');
const data3 = require('../api/CONTENTLISTINGPAGE-PAGE3.json');

class MovieScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contents: [],
            pages: 1,
            data: data1,
        }
    }

    /**
     * Load Movies
     */
    loadMovies = () => {
        const { pages, data, contents } = this.state;
        const { page: { 'content-items': {content} } } = data1;
        this.setState({contents: content});
    };

    // load next
    fetchResult = () => {
        const { pages, data, contents } = this.state;
       if(pages === 1) {
            this.setState({data: data2});
            const { page: { 'content-items': {content} } } = data2;
            this.setState({contents: contents.concat(content), pages: 2});
       }
       if(pages === 2) {
            this.setState({data: data3});
            const { page: { 'content-items': {content} } } = data3;
            this.setState({contents: contents.concat(content), pages: 3});
        }
    }

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

    componentDidMount() {
        this.loadMovies();
    }


    render() {
        const {contents} = this.state;
        return(
            <SafeAreaView style={styles.container}>
                <StatusBar
                    animated={true}
                    backgroundColor="#000"
                />
                <View style={styles.container}>
                    <FlatList
                        numColumns={3} // number of columns
                        data={contents}
                        onEndReached={this.fetchResult}
                        onEndReachedThreshold={0.7}
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

export default MovieScreen;