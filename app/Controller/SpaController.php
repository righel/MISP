<?php

App::uses('AppController', 'Controller');

class SpaController extends AppController
{
    public $components = array('Security', 'RequestHandler', 'Session');

    public function beforeFilter()
    {
        parent::beforeFilter();

        $allowedActions = array('index');
        $this->Auth->allow($allowedActions);
    }

    public function index()
    {
        $this->layout = 'spa';
    }
}
