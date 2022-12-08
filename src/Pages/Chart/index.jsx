import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Carousel from "simple-carousel-react-native";
import { ContainerImg, Img, MainContainerImg, Description } from "./style";
import BasicInformationPacient from "../../Components/BasicInformationPacient";
import Routine from "../../Components/Routine";
import Sickness from "../../Components/Sickness";
import Check from "../../Components/Check";
import MedicalAlert from "../../Components/MedicalAlert";

export default function Chart() {
  const navigation = useNavigation();

  function setMinutes(minutes) {
    return minutes * 60000;
  }

  useEffect(() => {
    setTimeout(() => {
      return navigation.navigate("PacientList");
    }, setMinutes(20));
  }, []);

  const imagesData = [
    {
      image: "../../../assets/img/asfdg.jpg",
    },
  ];

  const medication = [
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJTEIQLWyDjlx-qI8YY9vxbXhVw00I_wg_sKLoC52tvC99ASIc",
      name: "DIMENIDRATO + PIRIDOXINA + GLICOSE + FRUTOSE SOL INJ",
      Dose: "0,5 ampola",
      Via: "EVi",
      frequencia: "6/6h SN",
      quant: "(30mg+50mg+1g+1g/10ml)",
      description:
        "Serve para Profilaxia e tratamento de náuseas e vômitos em geral",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTYpC1mCwGjSHrOa8c7Owcwk2D0XFCJtgzrrfVJZtVs6u6npsR0",
      name: "MORFINA (SULFATO) 10mg/ml SOL INJ",
      Dose: " 4mg",
      Via: "EVd",
      frequencia: " 4/4h SN",
      quant: "Dose de resgate de +2mg EV SN",
      description:
        "Usado para o alívio da dor que não responde a nenhum outro analgésico.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bax1CJxRPVrQEX9TQhcrErqLcXAUwgq-W9Nk2tPUAK0O8zn3",
      name: "SOLUÇÃO GLICOSADA 10% 1000 ML ",
      Dose: "50ml/h",
      Via: " EVi ",
      frequencia: "Conforme orientação médica",
      quant: "Uso em substituição a parenteral",
      description:
        "Indicada como fonte de água, calorias e diurese osmótica, em casos de desidratação, nas hipoglicemias.",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNhqcl0SxtDI2i89S5-EeqGMQsldLJjjOtmf_U2I2eNEFAeZMh",
      name: "MIDAZOLAM 1 mg/ml SOL INJ 125 ML",
      Dose: " 15ml/h",
      Via: "EVi",
      frequencia: "Conforme orientação médica",
      description:
        "Sedativo com efeito ansiolítico, anticonvulsivo e relaxante muscular.",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwQRWrUDrYrRdg0FrDM8eUEH9etS422rFvIwUafFuDsu12TnTJ",
      name: "FENTANIL 10 mcg/ml 125 ml SOL INJ",
      Dose: "15 ml/h",
      Via: "EV",
      frequencia: "Conforme orientação médica",
      description:
        "Efeitos analgésicos e sedativos e amplamente utilizado no tratamento de dor e anestesia severas.",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2g3Bn2_8uuq-5iYUyobulbRymSH7JxDUS3gkngcd0YLwYy10d",
      name: "OMEPRAZOL 40mg SOL INJ",
      Dose: "40 mg",
      Via: "EVd",
      frequencia: "1x/dia",
      description:
        "Indicado para tratar certas condições em que ocorra muita produção de ácido no estômago",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQHLOQKA5NTMU4rWx_z26bYkX2d6cWlpcsToVH1r8U0kG7KnaIq",
      name: "GLUCONATO DE CALCIO 10% (0,465mEq/ml) 10ml SOL INJ ",
      Dose: "20 ml",
      Via: "EVd",
      frequencia: "Conforme orientação médica",
      description:
        "É a forma de cálcio mais utilizada para o tratamento da hipercalemia.",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSudY6xZjg06Ds6zp63nM-wDVy07BBPx8Rlcxtgs6wai-7oOHPw",
      name: "NORADRENALINA 1 mg/ml BASE SOL INJ",
      Dose: "8ml",
      Via: "EVi",
      frequencia: "Conforme orientação médica",
      description:
        "A noradrenalina atua como neurotransmissor e como hormônio e é um precursor endógeno da adrenalina.",
      warn: "Cada ampola contém 8mg/4ml de hemitartarato de noradrenalina equivalente a 4mg/4ml de noradrenalina base. Diluir em 242ml de SG 5% IV COM",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Botas para profilaxias de TVP",
      Dose: "Conforme prescrição médica",
      Via: "Conforme prescrição médica",
      frequencia: "Contínuo",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZgI2h_1FJp8S6nuYS1D2OBwrAeqJtig5C0ZziC7YCmO_9OZQS",
      name: "CANFORA 0,6 % + MENTOL 0,3 % 100 ml LOCAO",
      Dose: "1 aplicação",
      Via: "UT",
      frequencia: "6/6h",
      description:
        "Destinado ao alívio da tosse, e do mal estar muscular que acompanham gripes e resfriados, além da congestão nasal.",
      use: "Aplicar nos lábios.",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTcCoBm2WBEcvw8E1xZclMBBn1kbBFFf3dJAnr6eRHseXe2ji-",
      name: "DIPIRONA 1g/2ml SOL INJ",
      Dose: "1000 mg",
      Via: "EVd",
      frequencia: "6/6h",
      description:
        "Analgésico e antitérmico, sendo indicado para o alívio da dor e febre (analgésico e antitérmico).",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSFqIfzzHexYiQwGeFvizBJNDGxYdWMQRn19OVfDlx425w2y7d0",
      name: "NP FORMULA CONVENCIONAL",
      Dose: "Conforme prescrição médica",
      Via: "Conforme prescrição médica",
      frequencia: "contínuo ",
      description:
        "Instalar às 21h. Gotejo conforme o rótulo. Usar sempre a capa. Fotoprotetora na bolsa.",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegdEalR0YrjdNHGbc0royHnqPVhTL08pZU4K9driTmo3rfMc8",
      name: "INSULINA HUMANA REGULAR",
      Dose: " vide complemento",
      Via: "Conforme Prescrição Médica",
      frequencia: "4/4h SN Conforme HGT. Até 180 nada.",
      description:
        "Insulina Humana é indicado para o tratamento de pacientes com diabetes mellitus que necessitam de insulina para a manutenção da homeostase de glicose.",
      data: "\n> 180 6 UI \n > 250 8UI \n > 350 10UI e avisar.",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerPacientData}>
            <View
              style={{
                width: "95%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={styles.containerBack}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PacientList")}
                  style={styles.backButton}
                >
                  <Text style={{ color: "#fff" }}>Voltar</Text>
                </TouchableOpacity>
              </View>
              <Check value="Checagem" route="Checking" />
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../Assets/img/avatar.jpeg")}
                style={styles.avatar}
              />
              <Text style={styles.pacientName}>Nome do Paciente</Text>
              <MedicalAlert />
            </View>
          </View>
          <View style={styles.tablePacientData}>
            <View>
              <Text style={styles.contentBasicInfo}>Informações básicas: </Text>
            </View>
            <BasicInformationPacient />
          </View>
          <Sickness />
          <View style={styles.contarinerDescriptionChart}>
            <View>
              <Text style={styles.contentBasicInfo}>Evolução:</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Routine />
            </View>
          </View>
          <View style={styles.containerMedicaments}>
            <View>
              <Text style={styles.contentBasicInfo}>
                Medicações do paciente:
              </Text>
            </View>
            <Carousel
              showBubbles={false}
              width={310}
              height={670}
              showScroll={false}
              backgroundColor="#fff"
            >
              {medication.map((med, i) => (
                <View
                  key={i}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Img
                    source={{ uri: med?.image }}
                    style={{ resizeMode: "contain" }}
                  />

                  <View style={{ marginVertical: 10, alignItems: "center" }}>
                    <Text style={styles.lineTitle}>
                      {med?.name.toLowerCase()}
                    </Text>
                    <Description style={styles.lineTitleResult}>
                      {med?.description ? "Descrição: " : ""} {med?.description}
                    </Description>
                    <Text>
                      {med?.quant ? "Quantidade" : ""} {med?.quant}
                    </Text>
                    <Text>
                      {med?.Dose ? "Dose:" : ""} {med?.Dose}
                    </Text>
                    <Text>
                      {med?.frequencia ? "Frequência:" : ""} {med?.frequencia}
                    </Text>
                    <Text>
                      {med?.use ? "Uso:" : ""} {med?.use}
                    </Text>
                    <Text>
                      {med?.warn ? "ATENÇÃO:" : ""} {med?.warn}
                    </Text>
                    <Text>
                      {med?.data}
                    </Text>
                  </View>
                </View>
              ))}
            </Carousel>
          </View>
          <MainContainerImg>
            <ContainerImg>
              <Image
                source={require("../../Assets/img/medicalTable.jpeg")}
                style={{ width: "100%", resizeMode: "contain", height: 500 }}
              />
            </ContainerImg>
          </MainContainerImg>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  medicalTable: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    backgroundColor: "#7ad3af",
  },
  containerPacientData: {},
  containerBack: {
    margin: 20,
    backgroundColor: "#2cac78",
    width: 80,
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 10,
  },
  pacientName: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  contentBasicInfo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  tablePacientData: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  lineTitle: {
    fontSize: 20,
  },
  lineTitleResult: {
    fontSize: 15,
  },
  contarinerDescriptionChart: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  containerMedicaments: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  imageItem: {
    width: "100%",
    height: "100%",
  },
});
