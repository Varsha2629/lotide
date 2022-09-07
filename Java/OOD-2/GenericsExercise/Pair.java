package GenericsExercise;

public class Pair <T, E>{
	
	private T phone;
	private E grade;
	
	public T getPhone() {
		return phone;
	}
	public void setPhone(T phone) {
		this.phone = phone;
	}
	public E getGrade() {
		return grade;
	}
	public void setGrade(E grade) {
		this.grade = grade;
	}

}