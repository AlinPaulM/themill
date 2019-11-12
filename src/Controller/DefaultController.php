<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;

class DefaultController
{
	/**
     * @Route("/", name="index")
     */
	public function index()
	{
		die("zx");
	}
}