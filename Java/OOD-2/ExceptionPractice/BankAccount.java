package ExceptionPractice;

public class BankAccount {
	
	private String name;
	private double minimumBalance;
	private double balance;
	
	public BankAccount(String name, double minimumBalance, double balance) {
		super();
		this.name = name;
		this.minimumBalance = minimumBalance;
		this.balance = balance;
	}
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getMinimumBalance() {
		return minimumBalance;
	}

	public void setMinimumBalance(double minimumBalance) {
		this.minimumBalance = minimumBalance;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
	
     public void withdraw(double amount) throws InvalidBalanceException{
		
		if (this.balance-amount >minimumBalance) {
			this.balance = this.balance -amount;
		}
		else {
			throw new InvalidBalanceException("Low Funds");
		}
	}

}