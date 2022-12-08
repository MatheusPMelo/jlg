import React from "react";
import {View} from 'react-native'
import Check from "../../Components/Check";
import CheckList from "../../Components/CheckList";
import MedicalAlert from "../../Components/MedicalAlert";

const Checking = () => {

    return(
        <View style={{backgroundColor: '#7ad3af', alignItems: 'center',paddingTop: 30, height: '100%'}}>
            <Check value="Voltar" route="Chart"/>
            <CheckList />
            <View style={{height: 30}}></View>
            <MedicalAlert />
        </View>
    )
}

export default Checking
