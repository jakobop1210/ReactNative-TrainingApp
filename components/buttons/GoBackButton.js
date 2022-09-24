import { StyleSheet, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function goBackButton({ showButton }) {
    const navigation = useNavigation();
    console.log(showButton);

    return (
        <Pressable 
            onPress={() => navigation.goBack()}
            style={({ pressed, showButton }) => [
                {
                  opacity: pressed
                    ? 0.5
                    : 1,
                  display: {showButton}
                    ? "flex"
                    : "none"
                },
                styles.button
            ]}>
            <Ionicons name="arrow-back" color="#6B6E74" size={40} />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        left: 15,
        height: 50,
        width: 60,  
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 20,
        fontWeight: "600"
    }
});