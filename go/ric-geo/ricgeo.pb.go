// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0-devel
// 	protoc        v3.7.0
// source: ric-geo/ricgeo.proto

package ricgeo

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type KindType int32

const (
	KindType_UNKNOWN  KindType = 0
	KindType_GEOFENCE KindType = 1
	KindType_FLOOR    KindType = 2
	KindType_ROOM     KindType = 3
)

// Enum value maps for KindType.
var (
	KindType_name = map[int32]string{
		0: "UNKNOWN",
		1: "GEOFENCE",
		2: "FLOOR",
		3: "ROOM",
	}
	KindType_value = map[string]int32{
		"UNKNOWN":  0,
		"GEOFENCE": 1,
		"FLOOR":    2,
		"ROOM":     3,
	}
)

func (x KindType) Enum() *KindType {
	p := new(KindType)
	*p = x
	return p
}

func (x KindType) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (KindType) Descriptor() protoreflect.EnumDescriptor {
	return file_ric_geo_ricgeo_proto_enumTypes[0].Descriptor()
}

func (KindType) Type() protoreflect.EnumType {
	return &file_ric_geo_ricgeo_proto_enumTypes[0]
}

func (x KindType) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use KindType.Descriptor instead.
func (KindType) EnumDescriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{0}
}

type GetObjectInfoRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ObjectId string `protobuf:"bytes,1,opt,name=object_id,json=objectId,proto3" json:"object_id,omitempty"`
}

func (x *GetObjectInfoRequest) Reset() {
	*x = GetObjectInfoRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetObjectInfoRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetObjectInfoRequest) ProtoMessage() {}

func (x *GetObjectInfoRequest) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetObjectInfoRequest.ProtoReflect.Descriptor instead.
func (*GetObjectInfoRequest) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{0}
}

func (x *GetObjectInfoRequest) GetObjectId() string {
	if x != nil {
		return x.ObjectId
	}
	return ""
}

type GeoInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id             string     `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	Kind           KindType   `protobuf:"varint,2,opt,name=kind,proto3,enum=ric.geo.KindType" json:"kind,omitempty"`
	IsIn           bool       `protobuf:"varint,3,opt,name=is_in,json=isIn,proto3" json:"is_in,omitempty"`
	LastPacketTime int64      `protobuf:"varint,4,opt,name=last_packet_time,json=lastPacketTime,proto3" json:"last_packet_time,omitempty"`
	LastEnterTime  int64      `protobuf:"varint,5,opt,name=last_enter_time,json=lastEnterTime,proto3" json:"last_enter_time,omitempty"`
	LastLeaveTime  int64      `protobuf:"varint,6,opt,name=last_leave_time,json=lastLeaveTime,proto3" json:"last_leave_time,omitempty"`
	Nested         []*GeoInfo `protobuf:"bytes,7,rep,name=nested,proto3" json:"nested,omitempty"`
}

func (x *GeoInfo) Reset() {
	*x = GeoInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GeoInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GeoInfo) ProtoMessage() {}

func (x *GeoInfo) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GeoInfo.ProtoReflect.Descriptor instead.
func (*GeoInfo) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{1}
}

func (x *GeoInfo) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *GeoInfo) GetKind() KindType {
	if x != nil {
		return x.Kind
	}
	return KindType_UNKNOWN
}

func (x *GeoInfo) GetIsIn() bool {
	if x != nil {
		return x.IsIn
	}
	return false
}

func (x *GeoInfo) GetLastPacketTime() int64 {
	if x != nil {
		return x.LastPacketTime
	}
	return 0
}

func (x *GeoInfo) GetLastEnterTime() int64 {
	if x != nil {
		return x.LastEnterTime
	}
	return 0
}

func (x *GeoInfo) GetLastLeaveTime() int64 {
	if x != nil {
		return x.LastLeaveTime
	}
	return 0
}

func (x *GeoInfo) GetNested() []*GeoInfo {
	if x != nil {
		return x.Nested
	}
	return nil
}

type GetObjectInfoResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Geofences []*GeoInfo `protobuf:"bytes,1,rep,name=geofences,proto3" json:"geofences,omitempty"`
}

func (x *GetObjectInfoResponse) Reset() {
	*x = GetObjectInfoResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_ric_geo_ricgeo_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetObjectInfoResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetObjectInfoResponse) ProtoMessage() {}

func (x *GetObjectInfoResponse) ProtoReflect() protoreflect.Message {
	mi := &file_ric_geo_ricgeo_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetObjectInfoResponse.ProtoReflect.Descriptor instead.
func (*GetObjectInfoResponse) Descriptor() ([]byte, []int) {
	return file_ric_geo_ricgeo_proto_rawDescGZIP(), []int{2}
}

func (x *GetObjectInfoResponse) GetGeofences() []*GeoInfo {
	if x != nil {
		return x.Geofences
	}
	return nil
}

var File_ric_geo_ricgeo_proto protoreflect.FileDescriptor

var file_ric_geo_ricgeo_proto_rawDesc = []byte{
	0x0a, 0x14, 0x72, 0x69, 0x63, 0x2d, 0x67, 0x65, 0x6f, 0x2f, 0x72, 0x69, 0x63, 0x67, 0x65, 0x6f,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x22,
	0x33, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x6f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6f, 0x62, 0x6a, 0x65,
	0x63, 0x74, 0x49, 0x64, 0x22, 0xf9, 0x01, 0x0a, 0x07, 0x47, 0x65, 0x6f, 0x49, 0x6e, 0x66, 0x6f,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x12, 0x25, 0x0a, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0e, 0x32, 0x11,
	0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x4b, 0x69, 0x6e, 0x64, 0x54, 0x79, 0x70,
	0x65, 0x52, 0x04, 0x6b, 0x69, 0x6e, 0x64, 0x12, 0x13, 0x0a, 0x05, 0x69, 0x73, 0x5f, 0x69, 0x6e,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x08, 0x52, 0x04, 0x69, 0x73, 0x49, 0x6e, 0x12, 0x28, 0x0a, 0x10,
	0x6c, 0x61, 0x73, 0x74, 0x5f, 0x70, 0x61, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x6c, 0x61, 0x73, 0x74, 0x50, 0x61, 0x63, 0x6b,
	0x65, 0x74, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x26, 0x0a, 0x0f, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x65,
	0x6e, 0x74, 0x65, 0x72, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x0d, 0x6c, 0x61, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x65, 0x72, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x26,
	0x0a, 0x0f, 0x6c, 0x61, 0x73, 0x74, 0x5f, 0x6c, 0x65, 0x61, 0x76, 0x65, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x6c, 0x61, 0x73, 0x74, 0x4c, 0x65, 0x61,
	0x76, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x28, 0x0a, 0x06, 0x6e, 0x65, 0x73, 0x74, 0x65, 0x64,
	0x18, 0x07, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f,
	0x2e, 0x47, 0x65, 0x6f, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x06, 0x6e, 0x65, 0x73, 0x74, 0x65, 0x64,
	0x22, 0x47, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66,
	0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x2e, 0x0a, 0x09, 0x67, 0x65, 0x6f,
	0x66, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x72,
	0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x47, 0x65, 0x6f, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x09,
	0x67, 0x65, 0x6f, 0x66, 0x65, 0x6e, 0x63, 0x65, 0x73, 0x2a, 0x3a, 0x0a, 0x08, 0x4b, 0x69, 0x6e,
	0x64, 0x54, 0x79, 0x70, 0x65, 0x12, 0x0b, 0x0a, 0x07, 0x55, 0x4e, 0x4b, 0x4e, 0x4f, 0x57, 0x4e,
	0x10, 0x00, 0x12, 0x0c, 0x0a, 0x08, 0x47, 0x45, 0x4f, 0x46, 0x45, 0x4e, 0x43, 0x45, 0x10, 0x01,
	0x12, 0x09, 0x0a, 0x05, 0x46, 0x4c, 0x4f, 0x4f, 0x52, 0x10, 0x02, 0x12, 0x08, 0x0a, 0x04, 0x52,
	0x4f, 0x4f, 0x4d, 0x10, 0x03, 0x32, 0x55, 0x0a, 0x03, 0x47, 0x65, 0x6f, 0x12, 0x4e, 0x0a, 0x0d,
	0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1d, 0x2e,
	0x72, 0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63,
	0x74, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x72,
	0x69, 0x63, 0x2e, 0x67, 0x65, 0x6f, 0x2e, 0x47, 0x65, 0x74, 0x4f, 0x62, 0x6a, 0x65, 0x63, 0x74,
	0x49, 0x6e, 0x66, 0x6f, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x42, 0x12, 0x5a, 0x10,
	0x2e, 0x2f, 0x72, 0x69, 0x63, 0x2d, 0x67, 0x65, 0x6f, 0x3b, 0x72, 0x69, 0x63, 0x67, 0x65, 0x6f,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_ric_geo_ricgeo_proto_rawDescOnce sync.Once
	file_ric_geo_ricgeo_proto_rawDescData = file_ric_geo_ricgeo_proto_rawDesc
)

func file_ric_geo_ricgeo_proto_rawDescGZIP() []byte {
	file_ric_geo_ricgeo_proto_rawDescOnce.Do(func() {
		file_ric_geo_ricgeo_proto_rawDescData = protoimpl.X.CompressGZIP(file_ric_geo_ricgeo_proto_rawDescData)
	})
	return file_ric_geo_ricgeo_proto_rawDescData
}

var file_ric_geo_ricgeo_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_ric_geo_ricgeo_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_ric_geo_ricgeo_proto_goTypes = []interface{}{
	(KindType)(0),                 // 0: ric.geo.KindType
	(*GetObjectInfoRequest)(nil),  // 1: ric.geo.GetObjectInfoRequest
	(*GeoInfo)(nil),               // 2: ric.geo.GeoInfo
	(*GetObjectInfoResponse)(nil), // 3: ric.geo.GetObjectInfoResponse
}
var file_ric_geo_ricgeo_proto_depIdxs = []int32{
	0, // 0: ric.geo.GeoInfo.kind:type_name -> ric.geo.KindType
	2, // 1: ric.geo.GeoInfo.nested:type_name -> ric.geo.GeoInfo
	2, // 2: ric.geo.GetObjectInfoResponse.geofences:type_name -> ric.geo.GeoInfo
	1, // 3: ric.geo.Geo.GetObjectInfo:input_type -> ric.geo.GetObjectInfoRequest
	3, // 4: ric.geo.Geo.GetObjectInfo:output_type -> ric.geo.GetObjectInfoResponse
	4, // [4:5] is the sub-list for method output_type
	3, // [3:4] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_ric_geo_ricgeo_proto_init() }
func file_ric_geo_ricgeo_proto_init() {
	if File_ric_geo_ricgeo_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_ric_geo_ricgeo_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetObjectInfoRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GeoInfo); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_ric_geo_ricgeo_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetObjectInfoResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_ric_geo_ricgeo_proto_rawDesc,
			NumEnums:      1,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_ric_geo_ricgeo_proto_goTypes,
		DependencyIndexes: file_ric_geo_ricgeo_proto_depIdxs,
		EnumInfos:         file_ric_geo_ricgeo_proto_enumTypes,
		MessageInfos:      file_ric_geo_ricgeo_proto_msgTypes,
	}.Build()
	File_ric_geo_ricgeo_proto = out.File
	file_ric_geo_ricgeo_proto_rawDesc = nil
	file_ric_geo_ricgeo_proto_goTypes = nil
	file_ric_geo_ricgeo_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// GeoClient is the client API for Geo service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type GeoClient interface {
	GetObjectInfo(ctx context.Context, in *GetObjectInfoRequest, opts ...grpc.CallOption) (*GetObjectInfoResponse, error)
}

type geoClient struct {
	cc grpc.ClientConnInterface
}

func NewGeoClient(cc grpc.ClientConnInterface) GeoClient {
	return &geoClient{cc}
}

func (c *geoClient) GetObjectInfo(ctx context.Context, in *GetObjectInfoRequest, opts ...grpc.CallOption) (*GetObjectInfoResponse, error) {
	out := new(GetObjectInfoResponse)
	err := c.cc.Invoke(ctx, "/ric.geo.Geo/GetObjectInfo", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GeoServer is the server API for Geo service.
type GeoServer interface {
	GetObjectInfo(context.Context, *GetObjectInfoRequest) (*GetObjectInfoResponse, error)
}

// UnimplementedGeoServer can be embedded to have forward compatible implementations.
type UnimplementedGeoServer struct {
}

func (*UnimplementedGeoServer) GetObjectInfo(context.Context, *GetObjectInfoRequest) (*GetObjectInfoResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetObjectInfo not implemented")
}

func RegisterGeoServer(s *grpc.Server, srv GeoServer) {
	s.RegisterService(&_Geo_serviceDesc, srv)
}

func _Geo_GetObjectInfo_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetObjectInfoRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GeoServer).GetObjectInfo(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/ric.geo.Geo/GetObjectInfo",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GeoServer).GetObjectInfo(ctx, req.(*GetObjectInfoRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Geo_serviceDesc = grpc.ServiceDesc{
	ServiceName: "ric.geo.Geo",
	HandlerType: (*GeoServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetObjectInfo",
			Handler:    _Geo_GetObjectInfo_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "ric-geo/ricgeo.proto",
}
