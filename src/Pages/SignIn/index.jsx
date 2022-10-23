import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { MaskedTextInput } from "react-native-mask-text";
import { ContainerHeader } from "./style";

export default function SignIn() {
  const navigation = useNavigation();

  const [coren, setCoren] = useState("");

  const corenCode = "140.204"

  const handleSingIn = () => {
    if (coren === corenCode) {
      return navigation.navigate("PacientList");
    } 
    else if(coren == "") {
      alert("Digite seu número de Coren");
      return;
    }
    else if(coren.length < 7){
      alert("Quantidade de caracteres inválida")
      return;
    }
    else{
      alert("Número de coren não registrado");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ContainerHeader
        style={[{ flex: 1, alignItems: "center" }, styles.containerAccess]}
        animation={"slideInRight"}
      >
        <>
          <View style={styles.containerBack}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Initial")}
              style={styles.backButton}
            >
              <Text style={{ color: "#fff" }}>Voltar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Acessar</Text>
          </View>
          <View style={{ justifyContent: "center", marginRight: 10 }}>
            <Image
              style={styles.imageCross}
              source={require("../../Assets/img/hospital.png")}
            />
          </View>
        </>
      </ContainerHeader>
      <Animatable.View
        animation="fadeInUp"
        easing="ease-in-out"
        delay={400}
        style={styles.containerLoginInput}
      >
        <Text style={styles.labelTitle}>Coloque seu Número do Coren</Text>
        <View style={{ alignItems: "center" }}>
          <MaskedTextInput
            mask="999.999"
            keyboardType="numeric"
            style={styles.inputCoren}
            placeholder="Número do Coren"
            onChangeText={setCoren}
            value={coren}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity onPress={handleSingIn} style={styles.accessButton}>
            <Text style={{ color: "#fff", fontSize: 20 }}>Fazer login</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerTitle: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
    color: "#fff",
  },
  containerLoginInput: {
    flex: 2,
    backgroundColor: "#fff",
  },
  labelTitle: {
    textAlign: "center",
    marginVertical: 50,
    fontSize: 20,
    opacity: 0.4,
  },
  backButton: {
    backgroundColor: "#2cac78",
    padding: 10,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  imageCross: {
    width: 100,
    height: 100,
  },
  inputCoren: {
    backgroundColor: "#e3e3e3",
    padding: 20,
    width: 280,
    borderRadius: 50,
    fontSize: 20,
  },
  accessButton: {
    backgroundColor: "#000",
    marginTop: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2cac78",
    padding: 15,
    borderRadius: 50,
  },
});
