const User = require('../models/User');

async function updateUserWatchList({
  showId,
  show,
  shows,
  userId,
  watchlistAdd,
  watchlistPull,
}) {
  if (shows && watchlistAdd && userId) {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { [watchlistAdd]: { $each: shows } },
      },
      { new: true }
    );
    return updatedUser;
  } else if (show && showId && watchlistAdd && watchlistPull && userId) {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $addToSet: { [watchlistAdd]: show },
        $pull: { [watchlistPull]: { id: showId } },
      },
      { new: true }
    );
    return updatedUser;
  }
}

module.exports = { updateUserWatchList };
