
import { RicCode } from './dts/ric-code';
import { FunctionControl, PublicAPI } from './dts/ric-action';
import { Watch, WatchV2, AttendanceControl, Osm, Check } from './dts/ric-geo';
import { RicAuth } from './dts/ric-auth';
import { RicLogicV3 } from './dts/ric-logic-v3';
import { Tasks } from './dts/ric-tasks';
import { RicStore } from './dts/ric-store';
import { Bots } from './dts/ric-bots';

interface GrpcRegistry {
  /* clients */  
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


  /* servers */ 
  addServer(service: 'ric-code', impl: RicCode);
  addServer(service: 'ric-code.RicCode', impl: RicCode);

  addServer(service: 'ric-action', impl: FunctionControl);
  addServer(service: 'ric-action.FunctionControl', impl: FunctionControl);
  addServer(service: 'ric-action.PublicAPI', impl: PublicAPI);

  addServer(service: 'ric-geo', impl: Watch);
  addServer(service: 'ric-geo.Watch', impl: Watch);
  addServer(service: 'ric-geo.WatchV2', impl: WatchV2);
  addServer(service: 'ric-geo.AttendanceControl', impl: AttendanceControl);
  addServer(service: 'ric-geo.Osm', impl: Osm);
  addServer(service: 'ric-geo.Check', impl: Check);

  addServer(service: 'ric-auth', impl: RicAuth);
  addServer(service: 'ric-auth.RicAuth', impl: RicAuth);

  addServer(service: 'ric-logic-v3', impl: RicLogicV3);
  addServer(service: 'ric-logic-v3.RicLogicV3', impl: RicLogicV3);

  addServer(service: 'ric-tasks', impl: Tasks);
  addServer(service: 'ric-tasks.Tasks', impl: Tasks);

  addServer(service: 'ric-store', impl: RicStore);
  addServer(service: 'ric-store.RicStore', impl: RicStore);

  addServer(service: 'ric-bots', impl: Bots);
  addServer(service: 'ric-bots.Bots', impl: Bots);
}

declare const index: { registry: GrpcRegistry };
export default index;
export type { GrpcRegistry };
