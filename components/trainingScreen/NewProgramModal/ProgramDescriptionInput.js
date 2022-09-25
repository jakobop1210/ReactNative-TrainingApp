import { StyleSheet, Modal, View, Text, TextInput} from 'react-native';
import NextButton from '../../buttons/NextButton';

export default function ProgramDescriptionInput({ showNextScreen }) {

    return (
        <>
            <View>
                <Text style={styles.inputLabel}>Program name </Text>
                <TextInput
                    style={styles.newProgramInput} 
                    placeholder="program name" 
                />
            </View>
            <View>
                <Text style={styles.inputLabel}>Program description</Text>
                <TextInput 
                    style={styles.newProgramInput} 
                    placeholder="short description" 
                />
            </View>
            <View>
                <Text style={styles.inputLabel}>Split length</Text>
                <TextInput 
                    style={styles.newProgramInput} 
                    placeholder="split length (days)"
                />
            </View>
            <View style={styles.nextButtonContainer}>
                <NextButton showNextScreen={showNextScreen} />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    inputLabel: {
        color: "#EEEEEE",
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10
    },
    newProgramInput: {
        width: 200,
        padding: 5,
        fontSize: 15,
        height: 35,
        backgroundColor: "#EEEEEE",
        borderRadius: 5,
    },
    nextButtonContainer: {
        position: "absolute",
        bottom: 10
    }
});