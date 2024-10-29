import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView, Button, Alert, SafeAreaView} from 'react-native';
import RSPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/FontAwesome6';
import React, { useState } from 'react';

export default function App() {
    const [score, setScore] = useState(0);
    const selectedAnswer = [];

    const Questions = ({img, qns, ans, setSelectedAnswer}) => {
        const [answer, setAnswer] = useState("");

        return (
            <View>
                {/*<Text>{JSON.stringify(selectedAnswer)}</Text>*/}

                <Image source={img} style={styles.img} />
                <Text>{qns}</Text>
                <RSPickerSelect
                    onValueChange={(val)=>{
                        let currentAns = `${qns}${val}`
                        let qnsAns = `${qns}${ans}`

                        if(currentAns === qnsAns) {
                            setAnswer(currentAns)
                            // setSelectedAnswer([currentAns])
                            if(!selectedAnswer.includes(currentAns)) {
                                selectedAnswer.push(currentAns)
                            }else{
                            }
                        }else{

                            for (let i = 0; i < selectedAnswer.length; i++) {
                                if (selectedAnswer[i] === currentAns) {
                                    selectedAnswer.splice(i, 1)
                                }}
                        }
                        // console.log(answer)
                    }}
                    items={AnsOptions}
                />
                {/*<Text>{JSON.stringify(answer)}</Text>*/}
            </View>
        );
    }

    const AnsOptions = [
        {label: '1965 Mustang', value: '1965_mustang'},
        {label: 'Alfa Romeo Stradale', value: 'alfa_romeo_stradale'},
        {label: 'BMW M3 GTR', value: 'bmw_m3_gtr'},
        {label: 'Bugatti EB110', value: 'bugatti_eb110'},
        {label: 'Lamborghini Miura', value: 'lamborghini_miura'},
        {label: 'Nissan Skyline R34', value: 'nissan_skyline_r34'},
        {label: 'Porsche 911 Carrera (1972)', value: 'porsche_911_carrera'},
        {label: 'Shelby Cobra 427', value: 'shelby_cobra_427'},
        {label: 'Toyota Mk4', value: 'toyota_mk4'},
        {label: 'VolksWagen Beetle', value: 'volkswagen_beetle'}
    ]

    return (
    <SafeAreaView>
        <View style={styles.fullView}>
            <Text style={styles.title}><Icon name={'car'} size={40} /> Car Quiz</Text>

            <ScrollView style={styles.scrollView}>
                {/*<Text style={styles.title}><Icon name={'car'} size={40} /> Car Quiz</Text>*/}

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/AT-50.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'toyota_mk4'}
                        // setSelectedAnswer={setSelectedAnswer}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/BMWM3GTR.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'bmw_m3_gtr'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/1965Mustang.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'1965_mustang'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/EB110.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'bugatti_eb110'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/Lamborghini-Miura.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'lamborghini_miura'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/Nissan_Skyline_-_2F2F.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'nissan_skyline_r34'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/porsche_911-carrera_1972.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'porsche_911_carrera'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/Shelby-Cobra-427.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'shelby_cobra_427'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/VWBeetle.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'volkswagen_beetle'}
                    />
                </View>

                <View style={styles.quizContainer}>
                    <Questions
                        img={require('./assets/imgs/alfa-romeo-stradale.jpg')}
                        qns={'What is the name of this car?'}
                        ans={'alfa_romeo_stradale'}
                    />
                </View>

                <StatusBar style="auto" />
            </ScrollView>
        </View>

        <View style={styles.btn}>
            <Button
                onPress={() =>  {
                    // TotalScores();
                    Alert.alert('You have ' + selectedAnswer.length + ' correct answers') }}
                title={'Submit Answer'}
                color={'grey'}
            />
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        // flex: 1,
        backgroundColor: 'lightblue',
        marginLeft: 10,
        marginRight: 10,
        // marginBottom: 10,
        height: 740
    },

    img: {
        resizeMode: 'contain',
        width: 389,
        height: 255,
    },

    btn: {
        // position: 'absolute',
        // bottom: 0,
        // flex: 1
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'lightblue'
    },

    title: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    quizContainer: {
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#fff'
    },

    fullView: {
        flexDirection: 'column',
        height: '93%',
        backgroundColor: 'lightblue'
    }
});

