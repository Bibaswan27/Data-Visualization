import { View } from "react-native";
import { LineChart } from "react-native-gifted-charts"
const LineGraph = () => {
  const lineData = [
      {value: 0, dataPointText: '0'},
      {value: 20, dataPointText: '20'},
      {value: 18, dataPointText: '18'},
      {value: 40, dataPointText: '40'},
      {value: 36, dataPointText: '36'},
      {value: 60, dataPointText: '60'},
      {value: 54, dataPointText: '54'},
      {value: 85, dataPointText: '85'}
  ];
  return (
      <View style={{backgroundColor: '#fff'}}>
          <LineChart
              initialSpacing={0}
              data={lineData}
              spacing={30}
              textColor1="#27C9A9"
              textShiftY={-8}
              textShiftX={-10}
              textFontSize={13}
              thickness={4}
              hideYAxisText
              yAxisColor="#0BA5A4"
              showVerticalLines
              verticalLinesColor="transparent"
              xAxisColor="#0BA5A4"
              color="#27C9A9"
              curved
              dataPointsColor={'#27C9A9'}
              dataPointsRadius={5}
          />
      </View>
  );
};

export default LineGraph;