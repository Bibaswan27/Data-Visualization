import { PieChart } from "react-native-gifted-charts";

const Piechart = () => {
    const data = [
        {value: 50,  color: '#177AD5', text: '54%'}, 
        {value: 30, color: 'red', text: '54%'}, 
        {value: 26,  color: '#1e5', text: '54%'}];
    return <PieChart data={data} showText/>;
};

export default Piechart