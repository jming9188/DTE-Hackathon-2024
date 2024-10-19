#include <drogon/drogon.h>
#include <drogon/HttpAppFramework.h>
#include <drogon/MultiPart.h>
#include <pqxx/pqxx>
#include <iostream>
#include <vector>


using namespace drogon;
using namespace std;
using namespace pqxx;


void addCorsHeaders(const HttpResponsePtr &response) {
    response->addHeader("Access-Control-Allow-Origin", "*");
    response->addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response->addHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
}

int main() {
    app().registerHandler(
        "/{path}",
        [](const HttpRequestPtr &req, std::function<void(const HttpResponsePtr &)> &&callback) {
            if (req->method() == HttpMethod::Options) {
                auto resp = HttpResponse::newHttpResponse();
                addCorsHeaders(resp);
                callback(resp);
                return;
            }
            callback(HttpResponse::newNotFoundResponse());
        },
        {Get, Post, Options} 
        );

    app().registerHandler("/healthCheck", [](const HttpRequestPtr &req, std::function<void(const HttpResponsePtr &)> &&callback) {
        auto resp = HttpResponse::newHttpResponse();
        addCorsHeaders(resp);
        resp->setBody("Server is running");
        callback(resp);
    });

    
    app().setLogLevel(trantor::Logger::kTrace);
    LOG_INFO << "Starting server on port 3000";
    app().addListener("0.0.0.0", 3000).run();
}
