<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
	/**
     * @Route("/", name="index")
     */
	public function index()
	{
		return $this->render(
			"build/index.html", [
				"controller_name" => "DefaultController",
			]
		);
	}
}