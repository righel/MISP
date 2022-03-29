<?php

declare(strict_types=1);

/**
 * MetricsTool class handles pushing metrics to InfluxDB
 * metrics are pushed using the InfluxDB client library and the
 * line protocol: https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol/
 */
class MetricsTool
{

    /** @var InfluxDB2\Client */
    private $client;

    private $writeApi;

    public function __construct()
    {
        $this->client = new InfluxDB2\Client([
            'url' => Configure::read('Metrics.InfluxDB.url'),
            'token' => Configure::read('Metrics.InfluxDB.token'),
            'bucket' => Configure::read('Metrics.InfluxDB.bucket'),
            'org' => Configure::read('Metrics.InfluxDB.org'),
            'precision' => InfluxDB2\Model\WritePrecision::MS,
            'timeout' => Configure::read('Metrics.InfluxDB.timeout')
        ]);

        $this->writeApi = $this->client->createWriteApi();
    }

    /**
     * Write Controller usage metrics
     * 
     * @param float $microtimeStart
     * @param float $microtimeEnd
     * @param string $controller
     * @param boolean $isRest
     * @param string $action
     * @param integer $statusCode HTTP
     * 
     * @return void
     */
    public function writeController(
        float $microtimeStart,
        float $microtimeEnd,
        string $controller,
        bool $isRest,
        string $action,
        int $statusCode
    ): void {
        if ($controller === null || $action === null) {
            return;
        }

        $this->writeApi->write(sprintf(
            'controller,url=/%s/%s,api=%d,status=%s value=%d %s',
            $controller,
            $isRest,
            $action,
            $statusCode,
            $this->getDuration($microtimeStart, $microtimeEnd),
            round(microtime(true) * 1000)
        ));
    }

    /**
     * Write DB usage metrics
     *
     * @param array $caller
     * @param string $query
     * @param integer $affected
     * @param integer $numRows
     * @param integer $took
     * 
     * @return void
     */
    public function writeSql(
        array $caller,
        string $query,
        int $affected,
        int $numRows,
        int $took
    ): void {

        $callerTag = sprintf('%s:%s', get_class($caller['object']), $caller['function']);

        $this->writeApi->write(
            sprintf(
                'sql,caller=%s query="%s",affected=%d,numRows=%d,value=%d %s',
                $callerTag,
                str_replace('"', '_', $query),
                $affected,
                $numRows,
                $took ?? 0, // this relies in debug set to true in the MISP instance
                round(microtime(true) * 1000)
            )
        );
    }

    /**
     * Write Audit Log entry
     *
     * @param string $model
     * @param string $action
     * @param string|null $ip
     * @param integer|null $modelId
     * @param integer|null $eventId
     * 
     * @return void
     */
    public function writeAuditLog(
        string $model,
        string $action,
        ?string $ip = null,
        ?int $modelId = null,
        ?int $eventId = null
    ): void {

        $this->writeApi->write(
            sprintf(
                'audit,model=%s,action=%s ip="%s",event_id=%d,model_id=%d %s',
                strtolower($model),
                strtolower($action),
                $ip,
                $eventId,
                $modelId,
                round(microtime(true) * 1000)
            )
        );
    }

    /**
     * Returns the duration in miliseconds
     * 
     * @param float $microtimeStart
     * @param float $microtimeEnd
     * 
     * @return int
     */
    private function getDuration(float $microtimeStart, float $microtimeEnd)
    {
        return round(($microtimeEnd - $microtimeStart) * 1000);
    }
}
