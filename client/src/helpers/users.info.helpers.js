
const usersInfoHelpers = (users, stats) => {
  if (users && stats) {
    const arr = users.map(user => {
      const userStats = stats.filter(el => el.user_id === user.id)
      const statsPageViews = userStats.reduce((acc, el) => {
        acc = acc + el.page_views
        return acc
      }, 0)
      const statsPageClicks = userStats.reduce((acc, el) => {
        acc = acc + el.clicks
        return acc
      }, 0)
      user = {...user, page_views : statsPageViews, clicks : statsPageClicks}
      return user
    })
    return arr
  }
}

export default usersInfoHelpers
