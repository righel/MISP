<?php

App::uses('Component', 'Controller');

class MetricsComponent extends Component
{
    public function write($controller, $action, $statusCode, $duration): void
    {
        if ($controller === null || $action === null) {
            return;
        }

        $client = new InfluxDB2\Client([
            'url' => Configure::read('Metrics.InfluxDB.url'),
            'token' => Configure::read('Metrics.InfluxDB.token'),
            'bucket' => Configure::read('Metrics.InfluxDB.bucket'),
            'org' => Configure::read('Metrics.InfluxDB.org'),
            'precision' => InfluxDB2\Model\WritePrecision::MS,
            'timeout' => Configure::read('Metrics.InfluxDB.timeout')
        ]);

        $write_api = $client->createWriteApi();

        $write_api->write(sprintf(
            'api,url=/%s/%s,status=%s value=%d %s',
            $controller,
            $action,
            $statusCode,
            $duration,
            round(microtime(true) * 1000)
        ));
    }
}
