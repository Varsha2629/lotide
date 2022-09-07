package GenericsExercise;

public class Runner {
		
	public static void main(String[] args) {
		
		Book<Integer> book1 = new Book<Integer>(1);
		Book<Integer> book2 = new Book<Integer>(2);

		Borrower <Double> borrower1 = new Borrower<Double>(1.0);
		Borrower <Double> borrower2 = new Borrower<Double>(2.0);

		
		Catalog<CatalogItem<Number>,Number> catalog1 = new Catalog<>();
		catalog1.additems(book1);
		catalog1.additems(book2);
		catalog1.additems(borrower1);
		catalog1.additems(borrower2);
		
		System.out.println(catalog1.finditem(book1.getId()).getId());
		System.out.println(catalog1.finditem(book2.getId()).getId());
		System.out.println(catalog1.finditem(borrower1.getId()).getId());
		System.out.println(catalog1.finditem(borrower2.getId()).getId());
	}
}	
