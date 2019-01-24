export enum API {
  AUTHENTICATION = 'authentication/api-token-auth/',

  NEWS_DETAILS = 'news/detail/',

  LATEST_NEWS = 'news/latest/',

  LATEST_NEWS_BASKETBALL = 'news/latest/basketball/',
  LATEST_NEWS_SOCCER = 'news/latest/soccer/',

  RELATED_NEWS_SOCCER_GAME = 'game/soccer/related_news/',
  RELATED_NEWS_BASKETBALL_GAME = 'game/basketball/related_news/',
  ALL_LEAGUES = 'sport/leagues/',
  LEAGUE_TABLE_INFO = 'sport/league/stats/',


  SOCCER_GAME_STATISTICS = '/sport/game/soccer/statistics/',

  RELATED_NEWS_PLAYER = 'sport/player/related_news/',

  RELATED_NEWS_SOCCER_TEAM = 'sport/team/soccer/related_news/',
  RELATED_NEWS_BASKETBALL_TEAM = 'sport/team/basketball/related_news/',
  TEAM_PLAYERS = 'sport/team/players/',
  TEAM_INFO = 'sport/team/info/',
  TEAM_PHOTO = 'sport/team/images/',
  PLAYER_PHOTO = 'sport/player/images',

  SOCCER_GAME_EVENTS = 'sport/game/soccer/events/',
  BASKETBALL_GAME_EVENTS = 'sport/game/basketball/events/',


}

export const PlayerInfoAPI = (sport: string, id: number) => `sport/player/${sport}/info/${id}/`;

export const PlayerNewsAPI = (id: number) => `${API.RELATED_NEWS_PLAYER}${id}/`;

export const PlayerPhotosAPI = (sport: string, id: number) => `${API.PLAYER_PHOTO}${sport}/${id}`;

export const TeamPlayersAPI = (sport: string, id: number) => `${API.TEAM_PLAYERS}${sport}/${id}`;

export const TeamInfoAPI = (sport: string, id: number) => `${API.TEAM_INFO}${sport}/${id}`;

export const TeamPhotosAPI = (sport: string, id: number) => `${API.TEAM_PHOTO}${sport}/${id}`;
