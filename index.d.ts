
import { RicCode } from './ts/ric-code';
import { FunctionControl, PublicAPI } from './ts/ric-action';
import { Watch, WatchV2, AttendanceControl, Osm, Check } from './ts/ric-geo';
import { RicAuth } from './ts/ric-auth';
import { RicLogicV3 } from './ts/ric-logic-v3';
import { Tasks } from './ts/ric-tasks';
import { RicStore } from './ts/ric-store';
import { Bots } from './ts/ric-bots';

export interface GrpcRegistry {
  getClient(service: 'ric-code'): RicCode;
  getClient(service: 'ric-code.RicCode'): RicCode;

  getClient(service: 'ric-action'): FunctionControl;
  getClient(service: 'ric-action.FunctionControl'): FunctionControl;
  getClient(service: 'ric-action.PublicAPI'): PublicAPI;

  getClient(service: 'ric-geo'): Watch;
  getClient(service: 'ric-geo.Watch'): Watch;
  getClient(service: 'ric-geo.WatchV2'): WatchV2;
  getClient(service: 'ric-geo.AttendanceControl'): AttendanceControl;
  getClient(service: 'ric-geo.Osm'): Osm;
  getClient(service: 'ric-geo.Check'): Check;

  getClient(service: 'ric-auth'): RicAuth;
  getClient(service: 'ric-auth.RicAuth'): RicAuth;

  getClient(service: 'ric-logic-v3'): RicLogicV3;
  getClient(service: 'ric-logic-v3.RicLogicV3'): RicLogicV3;

  getClient(service: 'ric-tasks'): Tasks;
  getClient(service: 'ric-tasks.Tasks'): Tasks;

  getClient(service: 'ric-store'): RicStore;
  getClient(service: 'ric-store.RicStore'): RicStore;

  getClient(service: 'ric-bots'): Bots;
  getClient(service: 'ric-bots.Bots'): Bots;
}
