import React, { useState } from 'react';
import { StyleSheet , View, Text, TextInput, ScrollView} from 'react-native';
import AddButton from '../../buttons/AddButton';
import RemoveButton from '../../buttons/RemoveButton';

export default function DynamicInput({ labelText, placeholderText }) {

    const [inputs, setInputs] = useState([
        {
            inputLabel: <Text style={styles.inputLabel}>{labelText} 1</Text>,
            textInput: <TextInput
                            style={styles.newInput} 
                            placeholder={placeholderText}
                            placeholderTextColor="#6B6E74"
                            maxLength={50}
                        />
        }
    ]);

    function addInput() {
        setInputs(inputs => [...inputs, inputs[0]]);
    }

    function removeInput() {
        if (inputs.length > 1) {
            let newInputs = [...inputs];
            newInputs.splice(-1, 1);
            setInputs(newInputs);
        }

    }

    return (
        <>
            <View style={styles.addRemoveCotainer}>
                <RemoveButton removeInput={removeInput}/>
                <AddButton addInput={addInput}/>
            </View>
            <ScrollView style={styles.ScrollView}>
                {inputs.map((element, index) => (
                    <View key={index} style={styles.inputContainer}>
                        {element.inputLabel}
                        {element.textInput}
                    </View>
                ))}  
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    addRemoveCotainer: {
        flexDirection: "row",
        marginTop: 20
    },
    inputContainer: {
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    inputLabel: {
        color: "#EEEEEE",
        fontSize: 18,
        marginRight: 10
    },
    newInput: {
        width: 150,
        padding: 5,
        fontSize: 15,
        color: "#EEEEEE",
        height: 40,
        borderColor: "#6B6E74",
        borderWidth: 1,
        borderRadius: 5,
    }
});