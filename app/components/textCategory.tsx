import { StyleSheet, Text } from "react-native";

export default function CategoryText (props:any) {
    return (
        <Text style={style.text}>{props.category}</Text>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 15,
        fontWeight: 700,
        color: '#FFF',
    }
});