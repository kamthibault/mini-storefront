export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Mouse', price: 10, category: 'Electronics', stock: 5 },
    { id: 'p5', name: 'Couch', price: 200, category: 'Furniture', stock: 8 },
    { id: 'p6', name: 'Rug', price: 20, category: 'Household', stock: 10 },
    { id: 'p7', name: 'Sink', price: 2200, category: 'Household', stock: 9 },
    { id: 'p8', name: 'Blender', price: 120, category: 'Appliances', stock: 3 },





  ];
  return Response.json(products);
}