import 'reflect-metadata';
import express from 'express';
import { getRepository } from 'typeorm';

import './database/connection';

import Orphanage from './models/Orphanage';

const app = express();
app.use(express.json());

app.post('/orphanages', async (request, response) => {
  console.log(request.body);

  const { 
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage);
});

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🚀️ Server running on port 3333');
});