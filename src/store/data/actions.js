import { createAsyncThunk } from '@reduxjs/toolkit';
import U from './utils';

const fetchData = createAsyncThunk(
  'data/fetchData',
  async (file, { rejectWithValue }) => {
    try {
      const response = await U.parseData(file);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export default {
  fetchData,
};
