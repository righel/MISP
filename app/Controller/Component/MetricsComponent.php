<?php

use function PHPSTORM_META\type;

class MetricsComponent extends Component
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
     * Write API usage metrics
     * 
     * @return void
     */
    public function writeApi(
        float $microtimeStart,
        float $microtimeEnd,
        string $controller,
        string $action,
        int $statusCode
    ): void {
        if ($controller === null || $action === null) {
            return;
        }

        $this->writeApi->write(sprintf(
            'api,url=/%s/%s,status=%s value=%d %s',
            $controller,
            $action,
            $statusCode,
            $this->getDuration($microtimeStart, $microtimeEnd),
            round(microtime(true) * 1000)
        ));
    }

    /**
     * Write DB usage metrics
     * 
     * @return void
     */
    public function writeSql(
        string $type,
        string $query,
        int $affected,
        int $numRows,
        int $took
    ): void {

        $this->writeApi->write(
            sprintf(
                'sql,type=%s query="%s",affected=%d,numRows=%d,value=%d %s',
                $type,
                str_replace('"', '_', $query),
                $affected,
                $numRows,
                $took,
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
