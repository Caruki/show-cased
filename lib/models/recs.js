const User = require('../models/User');

export async function getRecsByGenres(userId) {
  const user = await User.findById(userId);
  if (!user) {
    return 'User not found';
  } else if (!user.towatch || !user.watched) {
    return null;
  } else {
    const toWatchList = user.towatch.map((show) => {
      return show.genres;
    });
    const watchedList = user.watched.map((show) => {
      return show.genres;
    });

    return { towatch: toWatchList, watched: watchedList };
  }
}
