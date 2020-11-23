import mongoose, { Schema } from 'mongoose';

const CountrySchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  info: {
    type: String,
  },
  status: {
    type: String,
  },
});

export default mongoose.model('Country', CountrySchema);
