package GenericsExercise;

import java.util.ArrayList;
import java.util.List;

public class Catalog<T extends CatalogItem<Number>, X extends Number> {
	private List<T> items = new ArrayList<T>();
	
	public List<T> getitems(){
		return items;
	}
		
	public void additems(T item) {
		items.add(item);
	}

	public T finditem(X id) {
		
		for(T item : items) {
			if (id == item.getId()) {     //(int) is called casting!
				
				return item;
			}
		}
		
		return null;
	}
	
	

}
