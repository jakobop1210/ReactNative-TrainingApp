import { useState } from 'react';
import { StyleSheet, Modal, View, Text, TextInput} from 'react-native';

export default function ProgramDescriptionInput({ changeName, changeFocus, changeLength }) {

    return (
        <>
            <View>
                <Text style={styles.inputLabel}>Program name </Text>
                <TextInput
                    style={styles.newProgramInput} 
                    onChangeText={changeName}
                    placeholder="program name" 
                    placeholderTextColor="#6B6E74"
                    maxLength={30}
                />
            </View>
            <View>
                <Text style={styles.inputLabel}>Focuspoint</Text>
                <TextInput 
                    style={styles.newProgramInput} 
                    onChangeText={changeFocus}
                    placeholder="short description" 
                    placeholderTextColor="#6B6E74"
                    maxLength={30}
                />
            </View>
            <View>
                <Text style={styles.inputLabel}>Split length</Text>
                <TextInput 
                    style={styles.newProgramInput} 
                    onChangeText={changeLength}
                    placeholder="split length" 
                    placeholderTextColor="#6B6E74"
                    maxLength={30}
                />
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
        color: "#EEEEEE",
        height: 40,
        borderColor: "#6B6E74",
        borderWidth: 1,
        borderRadius: 5,
    }
});