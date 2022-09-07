package GenericsExercise;

public class Book<T extends Integer> implements CatalogItem <Number> {
	
	private T id;

	public Book(T id) {
		super();
		this.id = id;
	}
	
	public T getId() {
		return id;
	}

	
	public void setId(Number id) {
		
		this.id=(T) id;
	}

}
