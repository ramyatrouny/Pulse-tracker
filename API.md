# pulse-tracker (1.0.0)
monitoring the heartbeat signals of client applications


## GET /metrics
(internal) Get current process metrics


### Responses
#### Status: 200
Prometheus metrics in text-based format
- contentType: text/plain
- body: {}


## POST /{group}/{id}



### Body Params
- meta: object
- id: string
- group: string


### Responses
#### Status: 200
Client registered or updated successfully
- contentType: application/json
- body: {}
#### Status: 400
Bad request
- contentType: application/json
- body: {}


## DELETE /{group}/{id}



### Body Params
- id: string
- group: string


### Responses
#### Status: 200
Client unregistered successfully
- contentType: application/json
- body: {}
#### Status: 404
Client not found
- contentType: application/json
- body: {}


## GET /



### Responses
#### Status: 200
Summary of all client groups
- contentType: application/json
- body: {}


## GET /{group}



### Body Params
- group: string


### Responses
#### Status: 200
Details of clients in the specified group
- contentType: application/json
- body: {}
#### Status: 404
Group not found
- contentType: application/json
- body: {}