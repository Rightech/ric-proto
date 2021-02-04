// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: ric-geo/ricgeo.proto

#include "ric-geo/ricgeo.pb.h"
#include "ric-geo/ricgeo.grpc.pb.h"

#include <functional>
#include <grpcpp/impl/codegen/async_stream.h>
#include <grpcpp/impl/codegen/async_unary_call.h>
#include <grpcpp/impl/codegen/channel_interface.h>
#include <grpcpp/impl/codegen/client_unary_call.h>
#include <grpcpp/impl/codegen/client_callback.h>
#include <grpcpp/impl/codegen/method_handler_impl.h>
#include <grpcpp/impl/codegen/rpc_service_method.h>
#include <grpcpp/impl/codegen/server_callback.h>
#include <grpcpp/impl/codegen/service_type.h>
#include <grpcpp/impl/codegen/sync_stream.h>
namespace ric {
namespace geo {

static const char* Watch_method_names[] = {
  "/ric.geo.Watch/GetObjectInfo",
};

std::unique_ptr< Watch::Stub> Watch::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Watch::Stub> stub(new Watch::Stub(channel));
  return stub;
}

Watch::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_GetObjectInfo_(Watch_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Watch::Stub::GetObjectInfo(::grpc::ClientContext* context, const ::ric::geo::GetObjectInfoRequest& request, ::ric::geo::GetObjectInfoResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_GetObjectInfo_, context, request, response);
}

void Watch::Stub::experimental_async::GetObjectInfo(::grpc::ClientContext* context, const ::ric::geo::GetObjectInfoRequest* request, ::ric::geo::GetObjectInfoResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetObjectInfo_, context, request, response, std::move(f));
}

void Watch::Stub::experimental_async::GetObjectInfo(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::geo::GetObjectInfoResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_GetObjectInfo_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::geo::GetObjectInfoResponse>* Watch::Stub::AsyncGetObjectInfoRaw(::grpc::ClientContext* context, const ::ric::geo::GetObjectInfoRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::geo::GetObjectInfoResponse>::Create(channel_.get(), cq, rpcmethod_GetObjectInfo_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::geo::GetObjectInfoResponse>* Watch::Stub::PrepareAsyncGetObjectInfoRaw(::grpc::ClientContext* context, const ::ric::geo::GetObjectInfoRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::geo::GetObjectInfoResponse>::Create(channel_.get(), cq, rpcmethod_GetObjectInfo_, context, request, false);
}

Watch::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Watch_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Watch::Service, ::ric::geo::GetObjectInfoRequest, ::ric::geo::GetObjectInfoResponse>(
          std::mem_fn(&Watch::Service::GetObjectInfo), this)));
}

Watch::Service::~Service() {
}

::grpc::Status Watch::Service::GetObjectInfo(::grpc::ServerContext* context, const ::ric::geo::GetObjectInfoRequest* request, ::ric::geo::GetObjectInfoResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


static const char* Check_method_names[] = {
  "/ric.geo.Check/CheckIn",
};

std::unique_ptr< Check::Stub> Check::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< Check::Stub> stub(new Check::Stub(channel));
  return stub;
}

Check::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_CheckIn_(Check_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status Check::Stub::CheckIn(::grpc::ClientContext* context, const ::ric::geo::CheckInRequest& request, ::ric::geo::CheckInResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_CheckIn_, context, request, response);
}

void Check::Stub::experimental_async::CheckIn(::grpc::ClientContext* context, const ::ric::geo::CheckInRequest* request, ::ric::geo::CheckInResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CheckIn_, context, request, response, std::move(f));
}

void Check::Stub::experimental_async::CheckIn(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::geo::CheckInResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_CheckIn_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::geo::CheckInResponse>* Check::Stub::AsyncCheckInRaw(::grpc::ClientContext* context, const ::ric::geo::CheckInRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::geo::CheckInResponse>::Create(channel_.get(), cq, rpcmethod_CheckIn_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::geo::CheckInResponse>* Check::Stub::PrepareAsyncCheckInRaw(::grpc::ClientContext* context, const ::ric::geo::CheckInRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::geo::CheckInResponse>::Create(channel_.get(), cq, rpcmethod_CheckIn_, context, request, false);
}

Check::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      Check_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< Check::Service, ::ric::geo::CheckInRequest, ::ric::geo::CheckInResponse>(
          std::mem_fn(&Check::Service::CheckIn), this)));
}

Check::Service::~Service() {
}

::grpc::Status Check::Service::CheckIn(::grpc::ServerContext* context, const ::ric::geo::CheckInRequest* request, ::ric::geo::CheckInResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace ric
}  // namespace geo

