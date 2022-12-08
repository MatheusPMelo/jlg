import React from "react";
import { Container, ValueButton } from "./styles";
import {TouchableOpacity, Alert} from 'react-native'

const MedicalAlert = () => {

    const handleAlert = () => {
        Alert.alert(
            "ATENÇÃO",
            "Deseja colocar os médicos e enfermeiros com atenção máxima a este paciênte?",
            [
              {
                text: "Não",
                onPress: () => console.log("não"),
              },
              { text: "Sim", onPress: () => console.log("Sim") }
            ]
          );
    }

  return (
    <Container>
      <TouchableOpacity onPress={handleAlert}>
        <ValueButton>ATENÇÃO</ValueButton>
      </TouchableOpacity>
    </Container>
  );
};

export default MedicalAlert;
