import path from 'path';
import { NlpManager } from 'node-nlp';
import { addTrainingData } from './utils';

(async () => {
  const modelFileName = path.join(__dirname, 'model.nlp');
  const manager = new NlpManager({ languages: ['sr'], forceNER: true, modelFileName });
  addTrainingData(manager);
  await manager.train();

  manager.save(modelFileName);
})();
