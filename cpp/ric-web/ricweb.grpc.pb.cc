// Generated by the gRPC C++ plugin.
// If you make any local change, they will be lost.
// source: ric-web/ricweb.proto

#include "ric-web/ricweb.pb.h"
#include "ric-web/ricweb.grpc.pb.h"

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
namespace web {

static const char* RicWeb_method_names[] = {
  "/ric.web.RicWeb/DispatchDefaultAction",
};

std::unique_ptr< RicWeb::Stub> RicWeb::NewStub(const std::shared_ptr< ::grpc::ChannelInterface>& channel, const ::grpc::StubOptions& options) {
  (void)options;
  std::unique_ptr< RicWeb::Stub> stub(new RicWeb::Stub(channel));
  return stub;
}

RicWeb::Stub::Stub(const std::shared_ptr< ::grpc::ChannelInterface>& channel)
  : channel_(channel), rpcmethod_DispatchDefaultAction_(RicWeb_method_names[0], ::grpc::internal::RpcMethod::NORMAL_RPC, channel)
  {}

::grpc::Status RicWeb::Stub::DispatchDefaultAction(::grpc::ClientContext* context, const ::ric::web::DispatchDefaultActionRequest& request, ::ric::web::DispatchDefaultActionResponse* response) {
  return ::grpc::internal::BlockingUnaryCall(channel_.get(), rpcmethod_DispatchDefaultAction_, context, request, response);
}

void RicWeb::Stub::experimental_async::DispatchDefaultAction(::grpc::ClientContext* context, const ::ric::web::DispatchDefaultActionRequest* request, ::ric::web::DispatchDefaultActionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DispatchDefaultAction_, context, request, response, std::move(f));
}

void RicWeb::Stub::experimental_async::DispatchDefaultAction(::grpc::ClientContext* context, const ::grpc::ByteBuffer* request, ::ric::web::DispatchDefaultActionResponse* response, std::function<void(::grpc::Status)> f) {
  return ::grpc::internal::CallbackUnaryCall(stub_->channel_.get(), stub_->rpcmethod_DispatchDefaultAction_, context, request, response, std::move(f));
}

::grpc::ClientAsyncResponseReader< ::ric::web::DispatchDefaultActionResponse>* RicWeb::Stub::AsyncDispatchDefaultActionRaw(::grpc::ClientContext* context, const ::ric::web::DispatchDefaultActionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::web::DispatchDefaultActionResponse>::Create(channel_.get(), cq, rpcmethod_DispatchDefaultAction_, context, request, true);
}

::grpc::ClientAsyncResponseReader< ::ric::web::DispatchDefaultActionResponse>* RicWeb::Stub::PrepareAsyncDispatchDefaultActionRaw(::grpc::ClientContext* context, const ::ric::web::DispatchDefaultActionRequest& request, ::grpc::CompletionQueue* cq) {
  return ::grpc::internal::ClientAsyncResponseReaderFactory< ::ric::web::DispatchDefaultActionResponse>::Create(channel_.get(), cq, rpcmethod_DispatchDefaultAction_, context, request, false);
}

RicWeb::Service::Service() {
  AddMethod(new ::grpc::internal::RpcServiceMethod(
      RicWeb_method_names[0],
      ::grpc::internal::RpcMethod::NORMAL_RPC,
      new ::grpc::internal::RpcMethodHandler< RicWeb::Service, ::ric::web::DispatchDefaultActionRequest, ::ric::web::DispatchDefaultActionResponse>(
          std::mem_fn(&RicWeb::Service::DispatchDefaultAction), this)));
}

RicWeb::Service::~Service() {
}

::grpc::Status RicWeb::Service::DispatchDefaultAction(::grpc::ServerContext* context, const ::ric::web::DispatchDefaultActionRequest* request, ::ric::web::DispatchDefaultActionResponse* response) {
  (void) context;
  (void) request;
  (void) response;
  return ::grpc::Status(::grpc::StatusCode::UNIMPLEMENTED, "");
}


}  // namespace ric
}  // namespace web

