import Orphanage from "../models/Orphanage";
import imageView from '../views/images_view';

export default {
  render(orphanage: Orphanage) {
    const {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
      created_at,
      updated_at,
    } = orphanage;

    return {
      id,
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images: imageView.renderMany(images),
      created_at,
      updated_at,
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
};
