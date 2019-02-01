import { Sports } from './Sports';

export enum API {
  SIGN_IN = 'authentication/api-token-auth/',
  SIGN_UP = 'authentication/sign_up/',

  NEWS_DETAILS = 'news/detail/',

  LATEST_NEWS = 'news/latest/',
  LATEST_NEWS_BASKETBALL = 'news/latest/basketball/',
  LATEST_NEWS_SOCCER = 'news/latest/soccer/',

  RELATED_NEWS_SOCCER_GAME = 'sport/game/soccer/related_news/',
  RELATED_NEWS_BASKETBALL_GAME = 'sport/game/basketball/related_news/',

  RELATED_NEWS_SOCCER_TEAM = 'sport/team/soccer/related_news/',
  RELATED_NEWS_BASKETBALL_TEAM = 'sport/team/basketball/related_news/',

  RELATED_NEWS_PLAYER = 'sport/player/related_news/',

  ALL_LEAGUES = 'sport/leagues/',
  LEAGUE_TABLE_INFO = 'sport/league/stats/',

  SOCCER_GAME_STATISTICS = '/sport/game/soccer/statistics/',

  TEAM_PLAYERS = 'sport/team/players/',
  TEAM_INFO = 'sport/team/info/',
  TEAM_PHOTO = 'sport/team/images/',

  PLAYER_INFO = 'sport/player/info/',
  PLAYER_PHOTOS = 'sport/player/images/',
  PLAYER_STATISTICS = 'sport/player/statistics/',
  TEAM_SCHEDULE = 'sport/team/schedule/',

  SOCCER_GAME_EVENTS = 'sport/game/soccer/events/',
  BASKETBALL_GAME_EVENTS = 'sport/game/basketball/events/',

  CONFIRM_ACCOUNT = 'authentication/confirm_account/',
  TEAM_SUBSCRIBED = 'sport/team/subscribed/'

}

export const PlayerInfoAPI = (sport: string, id: number) => `${API.PLAYER_INFO}${sport}/${id}/`;

export const PlayerNewsAPI = (id: number) => `${API.RELATED_NEWS_PLAYER}${id}/`;

export const PlayerStatisticsAPI = (sport: string, id: number) => `${API.PLAYER_STATISTICS}${sport}/${id}/`;

export const PlayerPhotosAPI = (sport: string, id: number) => `${API.PLAYER_PHOTOS}${sport}/${id}/`;

export const TeamPlayersAPI = (sport: string, id: number) => `${API.TEAM_PLAYERS}${sport}/${id}/`;

export const TeamInfoAPI = (sport: string, id: number) => `${API.TEAM_INFO}${sport}/${id}/`;

export const TeamPhotosAPI = (sport: string, id: number) => `${API.TEAM_PHOTO}${sport}/${id}/`;

export const YesterdayGamesAPI = (sport: Sports) => `sport/game/${sport}/yesterday/`;

export const TodayGamesAPI = (sport: Sports) => `sport/game/${sport}/today/`;

export const TomorrowGamesAPI = (sport: Sports) => `sport/game/${sport}/tomorrow/`;

export const TeamScheduleAPI = (sport: string, id: number) => `${API.TEAM_SCHEDULE}${sport}/${id}/`;

export const ConfirmedAccount = (id: number, code: string) => `${API.CONFIRM_ACCOUNT}${id}/${code}/`;

export const TeamSubscribed = (id: number, sport: string) => `${API.TEAM_SUBSCRIBED}${sport}/${id}/`;
