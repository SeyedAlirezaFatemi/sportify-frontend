import { Sports } from './Sports';

export enum API {
  SIGN_IN = 'authentication/api-token-auth/',
  SIGN_UP = 'authentication/sign_up/',

  NEWS_DETAILS = 'news/detail/',

  LATEST_NEWS = 'news/latest/',
  LATEST_NEWS_BASKETBALL = 'news/latest/basketball/',
  LATEST_NEWS_SOCCER = 'news/latest/soccer/',

  ALL_LEAGUES = 'sport/leagues/',
  LEAGUE_TABLE_INFO = 'sport/league/stats/',

  GAME_VIDEOS = 'sport/game/videos/',
  GAME_STATISTICS = 'sport/game/statistics/',
  GAME_PHOTOS = 'sport/game/images/',
  GAME_NEWS = 'sport/game/related_news/',
  GAME_EVENTS = 'sport/game/events/',

  TEAM_PLAYERS = 'sport/team/players/',
  TEAM_INFO = 'sport/team/info/',
  TEAM_PHOTO = 'sport/team/images/',
  TEAM_VIDEO = 'sport/team/videos/',
  TEAM_RELATED_NEWS = 'sport/team/related_news/',

  PLAYER_INFO = 'sport/player/info/',
  PLAYER_PHOTOS = 'sport/player/images/',
  PLAYER_STATISTICS = 'sport/player/statistics/',
  PLAYER_VIDEOS = 'sport/player/videos/',
  PLAYER_RELATED_NEWS = 'sport/player/related_news/',

  TEAM_SCHEDULE = 'sport/team/schedule/',
  TEAM_IS_SUBSCRIBED = 'sport/team/subscribed/',
  TEAM_SUBSCRIBE = 'sport/team/subscribe/',

  CONFIRM_ACCOUNT = 'authentication/confirm_account/',

  COMMENT = 'news/comment/',
}

export const PlayerInfoAPI = (sport: string, id: number) => `${API.PLAYER_INFO}${sport}/${id}/`;

export const PlayerRelatedNewsAPI = (id: number) => `${API.PLAYER_RELATED_NEWS}${id}/`;

export const PlayerStatisticsAPI = (sport: string, id: number) => `${API.PLAYER_STATISTICS}${sport}/${id}/`;

export const PlayerPhotosAPI = (sport: string, id: number) => `${API.PLAYER_PHOTOS}${sport}/${id}/`;

export const PlayerVideosAPI = (id: number) => `${API.PLAYER_VIDEOS}${id}/`;

export const TeamPlayersAPI = (sport: string, id: number) => `${API.TEAM_PLAYERS}${sport}/${id}/`;

export const TeamInfoAPI = (sport: string, id: number) => `${API.TEAM_INFO}${sport}/${id}/`;

export const TeamPhotosAPI = (sport: string, id: number) => `${API.TEAM_PHOTO}${sport}/${id}/`;

export const YesterdayGamesAPI = (sport: Sports) => `sport/game/${sport}/yesterday/`;

export const TodayGamesAPI = (sport: Sports) => `sport/game/${sport}/today/`;

export const TomorrowGamesAPI = (sport: Sports) => `sport/game/${sport}/tomorrow/`;

export const TeamScheduleAPI = (sport: string, id: number) => `${API.TEAM_SCHEDULE}${sport}/${id}/`;

export const ConfirmAccountAPI = (id: number, code: string) => `${API.CONFIRM_ACCOUNT}${id}/${code}/`;

export const GameStatisticsAPI = (sport: string, id: number) => `${API.GAME_STATISTICS}${sport}/${id}/`;

export const GameEventsAPI = (sport: string, id: number) => `${API.GAME_EVENTS}${sport}/${id}/`;

export const GamePhotosAPI = (sport: string, id: number) => `${API.GAME_PHOTOS}${sport}/${id}/`;

export const GameNewsAPI = (sport: string, id: number) => `${API.GAME_NEWS}${sport}/${id}/`;

export const GameVideosAPI = (sport: string, id: number) => `${API.GAME_VIDEOS}${sport}/${id}/`;

export const TeamVideosAPI = (id: number, sport: string) => `${API.TEAM_VIDEO}${sport}/${id}/`;

export const TeamIsSubscribedAPI = (sport: string, id: number) => `${API.TEAM_IS_SUBSCRIBED}${sport}/${id}/`;

export const TeamRelatedNewsAPI = (sport: string, id: number) => `${API.TEAM_RELATED_NEWS}${sport}/${id}/`;

export const TeamSubscribeAPI = (sport: string) => `${API.TEAM_SUBSCRIBE}${sport}/`;
