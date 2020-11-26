export interface Watch {
  WatchGeofence(request: WatchGeofenceRequest): Promise<EmptyResponse>;
  StopWatchGeofence(request: WatchGeofenceRequest): Promise<EmptyResponse>;
  WatchRoom(request: WatchRoomRequest): Promise<EmptyResponse>;
  StopWatchRoom(request: WatchRoomRequest): Promise<EmptyResponse>;
  WatchRoute(request: WatchRouteRequest): Promise<EmptyResponse>;
  StopWatchRoute(request: WatchRouteRequest): Promise<EmptyResponse>;
  UpdateGeo(request: UpdateGeoRequest): Promise<EmptyResponse>;
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
}

export interface EmptyResponse {

}

export interface WatchGeofenceRequest {
  objectId?: string;
  eventType?: any;
  geofencesIds?: string[];
  tags?: string[];
}

export interface WatchRoomRequest {
  objectId?: string;
  eventType?: any;
  fences?: Fence[];
  tags?: string[];
}

export interface Fence {
  geofenceId?: string;
  shapeId?: string;
  roomId?: string;
}

export interface WatchRouteRequest {
  objectId?: string;
  eventType?: any;
  routesIds?: string[];
  tags?: string[];
}

export interface UpdateGeoRequest {
  geofenceId?: string;
  shapeId?: string;
}

export interface GetObjectInfoRequest {
  objectId?: string;
}

export interface GetObjectInfoResponse {
  geofences?: ObjectGeofenceInfo[];
}

export interface ObjectGeofenceInfo {
  geofenceId?: string;
  isIn?: boolean;
  lastPacketTime?: number;
  lastEnterTime?: number;
  lastLeaveTime?: number;
}

export interface WatchV2 {
  Watch(request: WatchRequest): Promise<EmptyResponse>;
  Stop(request: StopRequest): Promise<EmptyResponse>;
  UpdateGeo(request: UpdateGeoRequest): Promise<EmptyResponse>;
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
}

export interface WatchRequest {
  objectId?: string;
  eventType?: any;
  fences?: Fence[];
  tags?: string[];
}

export interface StopRequest {
  objectId?: string;
  fences?: Fence[];
  tags?: string[];
}

export interface AttendanceControl {
  Control(request: ControlRequest): Promise<EmptyResponse>;
}

export interface ControlRequest {
  objectId?: string;
  time?: Time;
  circle?: Circle;
  tags?: string[];
}

export interface Time {
  start?: number;
  interval?: number;
}

export interface Circle {
  lat?: number;
  lon?: number;
  radius?: number;
}

export interface Osm {
  Geocode(request: GeocodeRequest): Promise<OsmResponse>;
  GeocodeReverse(request: GeocodeReverseRequest): Promise<OsmResponse>;
  GetRoute(request: GetRouteRequest): Promise<OsmResponse>;
}

export interface OsmResponse {
  data?: any;
}

export interface GeocodeRequest {
  query?: string;
  language?: string;
}

export interface Point {
  lat?: number;
  lon?: number;
}

export interface GeocodeReverseRequest {
  point?: Point;
  language?: string;
}

export interface GetRouteRequest {
  coordinates?: Point[];
  options?: any;
}

export interface Check {
  CheckIn(request: CheckInRequest): Promise<CheckInResponse>;
}

export interface IndoorCircle {
  x?: number;
  y?: number;
  z?: number;
  radius?: number;
}

export interface Zone {
  circle?: Circle;
  indoorCircle?: IndoorCircle;
}

export interface IndoorPoint {
  x?: number;
  y?: number;
  z?: number;
}

export interface Position {
  location?: Point;
  indoorLocation?: IndoorPoint;
}

export interface CheckInRequest {
  position?: Position;
  zone?: Zone;
}

export interface CheckInResponse {
  in?: boolean;
}