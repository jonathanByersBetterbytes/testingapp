import {TRAINING_DATA} from 'https://storage.googleapis.com/jmstore/TensorFlowJS/EdX/TrainingData/real-estate-data.js'

const INPUTS = TRAINING_DATA.inputs

const OUTPUTS = TRAINING_DATA.output

tf.util.shuffleCombo(INPUTS, OUTPUTS)