<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class DefaultController
{
	/**
     * @Route("/", name="index")
     */
	public function index()
	{
		return new Response(
			'blablabla', 
			 Response::HTTP_OK
		);
		return json_encode(array(1,2));
	}
}