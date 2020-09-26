<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{
  public function __construct()
  {
    parent::__construct();
  }

  public function index()
  {
    $data['title'] = 'Icemain Documentation';
    $this->load->view('templates/panel_header', $data);
    $this->load->view('templates/panel_sidebar', $data);
    $this->load->view('templates/panel_topbar', $data);
    $this->load->view('home/index', $data);
    $this->load->view('templates/panel_footer');
  }
}
