import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
      flex:1,
      backgroundColor: "#FFAAFF",
    },
    text: {
        color: "#FF55FF",
        fontSize: 50,
        fontStyle: "italic",
        fontWeight: "bold"
    },
    head: {
      height: 100,
      margin: 5,
      backgroundColor: "#FFCCFF",
      fontSize: 30,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      },
    image: {
        height: 200,
        width:300,
        borderColor: "#FF88FF",
        borderRadius:10,
        borderWidth:5
      },
      image_container: {
        flex:1,
        margin:20,
        alignItems:"center",
        borderColor: "#FF99FF",
        borderRadius:10
      },
      button_container: {
          flex:1,
          justifyContent: "flex-end",
          alignItems: "flex-end"
      },
      button: {
        height: 80,
        width: 380,
        borderWidth:5,
        borderRadius:10,
        borderColor: "#FF99FF",
        backgroundColor: "#FF22FF",
        alignItems:'center',
        justifyContent:'center',
      },
      button_text: {
          fontSize: 36,
      },
      descr_container:{
          alignItems:'center',
          justifyContent:'center',
      },
      descr: {
          fontSize: 20,
          textAlign: "center"
      },
      menu_item: {
          marginBottom:15,
          fontSize:25,
          fontWeight:'bold',
      },
      counter: {
          marginTop:120,
          color: "#550055",
      },
      links: {
          fontSize: 30,
          textDecorationLine: "underline",
          color: "#6600BB",
          fontWeight: "500",
          margin: 10,
      }
  });