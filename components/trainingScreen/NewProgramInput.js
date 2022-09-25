import { StyleSheet, Modal, View, Text, TextInput} from 'react-native';
import ExitButton from '../buttons/ExitButton';
import NextButton from '../buttons/NextButton';

export default function NewProgramInput({ showModal, exitModal }) {

    return (
        <Modal 
            visible={showModal} 
            animationType="fade"
            transparent={true}
        >
            <View style={styles.centeredNewProgramContainer}>
                <View style={styles.newProgramContainer}>
                    <ExitButton exitModal={exitModal} />
                    <View>
                        <Text style={styles.newProgramHeader}>New program</Text>
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Program name </Text>
                        <TextInput
                            style={styles.newProgramInput} 
                            placeholder="program name" 
                        />
                    </View>
                    <View>
                        <Text style={styles.inputLabel}>Short description</Text>
                        <TextInput 
                            style={styles.newProgramInput} 
                            placeholder="program description" 
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
                        <NextButton />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredNewProgramContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    newProgramContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: 400,
        width: 300,
        backgroundColor: "#393E46",
        padding: 10,
        paddingBottom: 60,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 5
    },
    newProgramHeader: {
        color: "#FFD369",
        fontSize: 25
    },
    inputLabel: {
        color: "#EEEEEE",
        fontSize: 18,
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