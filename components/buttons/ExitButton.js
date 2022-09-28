import { StyleSheet, Text, Pressable, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

export default function ExitButton({ exitModal, goBack, screen }) {

    function exitModalAndGoBack() {
        //goBack();
        exitModal();
    }

    return (
        <Pressable 
            onPress={exitModalAndGoBack}
            style={({ pressed }) => [
            {
              opacity: pressed
                ? 0.4
                : 1
            },
            styles.button
          ]}>
            <Feather name="x" size={25} color="#6B6E74"/>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "absolute",
        height: 50,
        width: 50,
        top: 0,
        right: 0,
    },
    buttonText: {
        color: "#EEEEEE",
        fontSize: 18,
    }
});