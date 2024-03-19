import { useState } from "react";
import {LineChart,} from "react-native-chart-kit";
import {View,Text,Button,TextInput,Dimensions} from "react-native"
const App = () => {
  const [physics, setPhysics] = useState(0);
  const [chemistry, setChemistry] = useState(0);
  const [maths, setMaths] = useState(0);
  const [english, setEnglish] = useState(0);
  const [showChart, setShowChart] = useState(false);
  const subjectMarks = {
    Physics: physics,
    Chemistry: chemistry,
    Maths: maths,
    English: english,
  };
  const handleSubmit = () => {
    setShowChart(true);
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
        Enter marks of the following subjects:
      </Text>
      <View style={{flexDirection: 'row'}}>
   <View style={{ marginVertical: 10 ,margin: 30}}>
   <Text style={{ marginRight: 10 }}>Physics:</Text>
        <TextInput
          keyboardType="numeric"
            onChangeText={text => {
            if (text === "") {
              setPhysics(0);
            } else {
              setPhysics(parseInt(text));
            }
          }}
          value={physics.toString()}
          style={{ borderWidth: 1, padding: 10 }}
        />
      </View>
      <View style={{ marginVertical: 10, margin: 30}}>
      <Text style={{ marginRight: 10 }}>Chemistry:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => {
            if (text === "") {
              setChemistry(0);
            } else {
              setChemistry(parseInt(text));
            }
          }}
          value={chemistry.toString()}
          style={{ borderWidth: 1, padding: 10 }}
        />
      </View>
      </View>
      <View style={{flexDirection: 'row'}}>
      <View style={{ marginVertical: 10, margin: 30 }}>
      <Text style={{ marginRight: 10 }}>Maths:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => {
            if (text === "") {
              setMaths(0);
            } else {
              setMaths(parseInt(text));
            }
          }}
          value={maths.toString()}
          style={{ borderWidth: 1, padding: 10 }}
        />
      </View>
      <View style={{ marginVertical: 10, margin: 30 }}>
      <Text style={{ marginRight: 10 }}>English:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => {
            if (text === "") {
              setEnglish(0);
            } else {
              setEnglish(parseInt(text));
            }
          }}
          value={english.toString()}
          style={{ borderWidth: 1, padding: 10 }}
        />
      </View>
      </View>
      <Button title="Show Chart" onPress={handleSubmit} />
      {showChart && (
        <LineChart
          data={{
            labels: Object.keys(subjectMarks),
            datasets: [
              {
                data: Object.values(subjectMarks),
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={220}
          yAxisInterval={1}
        chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
      )}
</View>
  );
};

export default App;
