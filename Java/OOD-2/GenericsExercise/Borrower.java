package GenericsExercise;

public class Borrower<T extends Double> implements CatalogItem<Number> {
	
	public T id;
	

	public Borrower(T id) {
		super();
		this.id = id;
	}

	public Number getId() {
		return id;
	}

	public void setId(Number id) {
		this.id = (T) id;
	}
}
