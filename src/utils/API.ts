export enum API {
  LATEST_NEWS = 'news/latest/',
  LATEST_NEWS_BASKETBALL = 'news/latest/basketball/',
  LATEST_NEWS_SOCCER = 'news/latest/soccer/',
  RELATED_NEWS_SOCCER_GAME = 'game/soccer/related_news/',
  RELATED_NEWS_BASKETBALL_GAME = 'game/basketball/related_news/',
  RELATED_NEWS_SOCCER_TEAM = 'team/soccer/related_news/',
  RELATED_NEWS_BASKETBALL_TEAM = 'team/basketball/related_news/',
  NEWS_DETAILS = 'news/detail/',
  ALL_LEAGUES = 'sport/leagues/',
  LEAGUE_TABLE_INFO = 'sport/league/stats/',

}

export const PlayerInfoAPI = (sport: string, id: number) => `sport/player/${sport}/info/${id}/`;
