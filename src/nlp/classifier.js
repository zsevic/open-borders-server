import path from 'path';
import latinize from 'latinize';
import { NlpManager } from 'node-nlp';
import { trainingData } from './training-data';

function addTrainingData(manager) {
  trainingData.forEach((data) => {
    manager.addDocument('sr', latinize(data.text), data.category);
  });
}

(async () => {
  const modelFileName = path.join(__dirname, 'model.nlp');
  const manager = new NlpManager({ languages: ['sr'], forceNER: true, modelFileName });
  addTrainingData(manager);
  await manager.train();

  manager.save(modelFileName);
})();
