<?php namespace Acme\Transformers;

abstract class Transformer{
	// phil stirgeon "fractal" transofmration package
	public function transformCollection($items)
	{
		return array_map([$this, 'transform'], $items);
	}

	public abstract function transform($item);
	
}