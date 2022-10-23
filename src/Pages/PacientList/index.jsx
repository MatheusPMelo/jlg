import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import { Container, PacientItem, Btn, Usr, Avatar } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function PacientList() {
  const navigation = useNavigation();

  const pacientList = [
    {
      id: 1,
      name: "Paciente",
      avatar: "../../Assets/img/avatar.jpeg",
      grave: false,
    },
    {
      id: 2,
      name: "Paciente",
      avatar: "../../Assets/img/avatar.jpeg",
      grave: false,
    },
    {
      id: 3,
      name: "Paciente",
      avatar: "../../Assets/img/avatar.jpeg",
      grave: true,
    },
  ];

  return (
    <SafeAreaView>
      <Usr>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Avatar source={require("../../Assets/img/avatar.jpeg")} />
          <Text style={{ color: "#fff", fontSize: 20 }}>Enfermeira</Text>
        </View>
        <Btn 
          style={{backgroundColor: '#2cac78'}}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={{ color: "#fff" }}>Sair</Text>
        </Btn>
      </Usr>
      <Container>
          <View>
            <FlatList
              data={pacientList}
              renderItem={({ item }) => (
                <PacientItem>
                  <View>
                    <Text>{item.name}</Text>
                    {item.grave ? <Text style={{color: '#f00', opacity: .6}}>Grave</Text> : ''}
                  </View>
                  <Btn onPress={() => navigation.navigate('Chart')}>
                    <Text style={{ color: "#fff" }}>Ver paciente</Text>
                  </Btn>
                </PacientItem>
              )}
            />
          </View>
      </Container>
    </SafeAreaView>
  );
}
