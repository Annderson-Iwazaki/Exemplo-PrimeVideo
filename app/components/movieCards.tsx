import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function MovieCards (props: any) {
    return (
        <Link href={`/screens/${props.id}`}>
            <TouchableOpacity>
                <Image source={props.movieImageURL} alt={props.name} style={style.image}/>
            </TouchableOpacity>
        </Link>
    );
}
const style = StyleSheet.create({
    image: {
        marginRight: 20,
    }
});