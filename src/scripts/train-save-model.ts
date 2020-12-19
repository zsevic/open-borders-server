import { application } from '../app';
import { NlpModule } from 'modules/nlp/nlp.module';
import { NlpService } from 'modules/nlp/nlp.service';

(async () => {
  const app = await application.get();

  const nlpService = app.select(NlpModule).get(NlpService, { strict: true });

  await nlpService.trainAndSaveModel();
  await app.close();
  process.exit(0);
})();
