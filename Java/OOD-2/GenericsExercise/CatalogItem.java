package GenericsExercise;

public interface CatalogItem<N extends Number> {
	
	N getId();
	void setId(N id);


}
