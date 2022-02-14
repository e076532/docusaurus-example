TPP uses spdlog as the logging mechanism to stdout. This allows us to specify the formatting of the message as well as provide a mechanism for log levels. The log level is set using the spdlog env variable "SPDLOG_LEVEL". Right now the log levels cant be changed dynamically so it will require redeploying the docker or local bin with an updated env variable.

|Log Levels|
|----      |
|# SPDLOG_LEVEL_TRACE 0 (trace)<br /># SPDLOG_LEVEL_DEBUG 1 (debug)<br /> # SPDLOG_LEVEL_INFO 2 (info)<br /> # SPDLOG_LEVEL_WARN 3 (warn)<br /> # SPDLOG_LEVEL_ERROR 4 (error)<br /> # SPDLOG_LEVEL_CRITICAL 5 (critical)<br /> # SPDLOG_LEVEL_OFF 6 (off)<br /> <br />export SPDLOG_LEVEL=info|

The log level should be set to "info" in production systems as anything lower than this will impact performance. The "trace" and "debug" levels as they are named should only be used to debug a deployment.




