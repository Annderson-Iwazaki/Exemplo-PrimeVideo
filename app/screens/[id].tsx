import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function MovieId () {
    const { id } = useLocalSearchParams();

    return (
        <View style={style.container}>
            <Text>{id}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#990099'
    }
});