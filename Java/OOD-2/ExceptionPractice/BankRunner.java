package ExceptionPractice;

public class BankRunner {

	public static void main(String[] args) {
	BankAccount account1= new BankAccount("Tania", 100.0, 500.0);
	
	try {
		account1.withdraw(100.0);
		System.out.println("First withdraw"+account1.getBalance());
		
		account1.withdraw(400.0);
		System.out.println("Second withdraw"+account1.getBalance());
		
	} catch (Exception e) {
		System.out.println(e);
	}

	}

}

