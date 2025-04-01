import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MovieCards (props: any) {
    return (
        <TouchableOpacity>
            <Image source={props.movieImageURL} alt={props.name} style={style.image}/>
        </TouchableOpacity>
    );
}
const style = StyleSheet.create({
    image: {
        marginRight: 20,
    }
});