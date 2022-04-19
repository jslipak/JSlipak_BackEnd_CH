# First review


-[JSON GENERATOR](https://json-generator.com/)
  - Products
```json
[
  '{{repeat(15)}}',
  {
    id: '{{index()}}',
    timestamp: '{{date(new Date(2014, 0, 1), new Date(), "hh:mm,dd-MM-YYYY")}}',
    title: '{{firstName()}} {{surname()}}',
    code: '{{guid()}}',
    thumbnail: "http://placehold.it/32x32",
    price:'{{floating(1000, 4000, 2, "$0,0.00")}}',
    stock: '{{integer(20, 40)}}' }
]
```

  - Carts (bug in id product could be repeated)
```json
  [
  '{{repeat(5, 7)}}',
  {
	id: '{{index()}}',
	timestamp: '{{date(new Date(2014, 0, 1), new Date(), "hh:mm,dd-MM-YYYY")}}',
    products:['{{repeat(4 ,7)}}',
              {pid: '{{integer(0,12)}}',
               quantity: '{{integer(3,7)}}'
              }
              ]
    
  }
]
```
