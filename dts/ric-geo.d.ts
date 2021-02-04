export interface Watch {
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
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

export interface Check {
  CheckIn(request: CheckInRequest): Promise<CheckInResponse>;
}

export interface IndoorCircle {
  x?: number;
  y?: number;
  z?: number;
  radius?: number;
}

export interface Circle {
  lat?: number;
  lon?: number;
  radius?: number;
}

export interface Point {
  lat?: number;
  lon?: number;
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