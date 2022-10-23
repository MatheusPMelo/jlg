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
import { Img } from "./style"

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

  const medication = [
    {
      name: "Dipirona",
      image: "https://th.bing.com/th/id/OIP.FB7R6O7r2v7MAU7g9EqPTwHaHa?pid=ImgDet&rs=1",
      description: "2 comprimidos a cada 2 horas",
    },
    {
      name: "lacto Purga",
      image: "https://th.bing.com/th/id/OIP.9lHoedfwHCB3cDv1TFFiFwHaHa?pid=ImgDet&rs=1",
      description: "2 comprimidos a cada 2 horas",
    },
    {
      name: "Paracetamol",
      image: "https://th.bing.com/th/id/R.c02ec1e0f534e886354b52c1cd11ffb4?rik=y6ov1UGik5%2f2YA&pid=ImgRaw&r=0",
      description: "2 comprimidos a cada 2 horas",
    },
    {
      name: "Roaccutan",
      image: "https://th.bing.com/th/id/R.b840ae1a50893981dfb84b78c639686e?rik=nAFE2j82zwZOxw&pid=ImgRaw&r=0",
      description: "2 comprimidos a cada 2 horas",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerPacientData}>
            <View style={styles.containerBack}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PacientList")}
                style={styles.backButton}
              >
                <Text style={{ color: "#fff" }}>Voltar</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
              }}
            >
              <Image
                source={require("../../Assets/img/avatar.jpeg")}
                style={styles.avatar}
              />
              <Text style={styles.pacientName}>Paciente</Text>
            </View>
          </View>
          <View style={styles.tablePacientData}>
            <View>
              <Text style={styles.contentBasicInfo}>Informações básicas: </Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.lineTitle}>Tipo Sanguíneo:</Text>
              <Text style={styles.lineTitleResult}>A+</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.lineTitle}>Altura:</Text>
              <Text style={styles.lineTitleResult}>150cm</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.lineTitle}>Peso:</Text>
              <Text style={styles.lineTitleResult}>90kg</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.lineTitle}>Gênero:</Text>
              <Text style={styles.lineTitleResult}>M</Text>
            </View>
          </View>
          <View style={styles.contarinerDescriptionChart}>
            <View>
              <Text style={styles.contentBasicInfo}>Descrição:</Text>
            </View>
            <View
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.lineTitleResult}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
                exercitationem possimus molestiae, vitae delectus debitis.
                Reiciendis quaerat officiis molestiae, maiores ad repellat
                similique! Ducimus praesentium totam excepturi quibusdam modi
                distinctio Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Neque exercitationem possimus molestiae, vitae delectus
                debitis. Reiciendis quaerat officiis molestiae, maiores ad
                repellat similique! Ducimus praesentium totam excepturi
                quibusdam modi distinctio Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Neque exercitationem possimus
                molestiae, vitae delectus debitis. Reiciendis quaerat officiis
                molestiae, maiores ad repellat
              </Text>
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
              height={400}
              showScroll={false}
              backgroundColor="#fff"
            >
              {medication.map((med, i) => (
                <View
                  key={i}
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Img 
                    source={{uri: med?.image}}
                  />
                  <View
                    style={{
                      marginVertical: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={[{ fontSize: 20 }, styles.lineTitle]}>
                      {med?.name}
                    </Text>
                    <Text style={[{ fontSize: 10 }, styles.lineTitleResult]}>
                      {med?.description}
                    </Text>
                  </View>
                </View>
              ))}
            </Carousel>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  pacientName: {
    fontSize: 20,
    color: "#fff",
  },
  contentBasicInfo: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
  },
  tablePacientData: {
    margin: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
  },
  lineTitle: {
    fontWeight: "bold",
    marginRight: 10,
  },
  lineTitleResult: {
    fontSize: 20,
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
    height: '100%',
  },
});
