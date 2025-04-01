import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PrimeVideoLogo from '@/assets/images/prime_video.png';
import AmazonLogo from '@/assets/images/amazon_logo.png'
import CategoryText from "../components/textCategory";
import MovieTheWhellOfTime from '@/assets/images/movies/the_wheel_of_time.png'
import { MOVIESWATCHING } from '@/app/utils/moviesWatching';
import { MOVIESCRIME } from '@/app/utils/moviesCrimes';
import { MOVIESWATCH } from '@/app/utils/moviesWatch';
import MovieCards from "../components/movieCards";

export default function Home() {
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Image source={PrimeVideoLogo}/>
                <Image style={style.amazonImg} source={AmazonLogo}/>
            </View>
            <View style={style.category}>
                <TouchableOpacity>
                    <CategoryText category="Home"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CategoryText category="TV Show"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CategoryText category="Sports"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CategoryText category="Live TV"/>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={style.movieButton}>
                    <Image source={MovieTheWhellOfTime}/>
                </TouchableOpacity>
                <Text style={style.text}>Continue Watching</Text>
                <FlatList 
                    data={MOVIESWATCHING}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({item}) => (
                        <MovieCards
                            movieImageURL={item.moviesURL}
                            name={item.name}
                        />
                    )}
                    horizontal
                    contentContainerStyle={style.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={style.text}>Crime Movies</Text>
                <FlatList 
                    data={MOVIESCRIME}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({item}) => (
                        <MovieCards
                            movieImageURL={item.moviesURL}
                            name={item.name}
                        />
                    )}
                    horizontal
                    contentContainerStyle={style.contentList}
                    showsHorizontalScrollIndicator={false}
                />

                <Text style={style.text}>Watch in your language</Text>
                <FlatList 
                    data={MOVIESWATCH}
                    keyExtractor={(item:any) => item.id}
                    renderItem={({item}) => (
                        <MovieCards
                            movieImageURL={item.moviesURL}
                            name={item.name}
                        />
                    )}
                    horizontal
                    contentContainerStyle={style.contentList}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232F3E',
        alignItems: 'flex-start'
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    amazonImg: {
        marginTop: -30,
        marginLeft: 30,
    },
    category: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginTop: 30,
        marginBottom: 20,
    },
    movieButton: {
        width: '100%',
        alignItems: 'center',
    },
    text : {
        color: '#FFF',
        fontWeight: 700,
        marginTop: 20,
        fontSize: 20
    },
    contentList: {
        paddingLeft: 18,
        paddingRight: 30,
    }
});