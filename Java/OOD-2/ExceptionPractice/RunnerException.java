package ExceptionPractice;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;

public class RunnerException {

	public static void main(String[] args){
	

		try {
			FileReader fr = new FileReader("NonExistant.File");
			fr.read();
			
		} 			
				
		catch (FileNotFoundException e) {
			System.out.println(e);
			
			System.out.println("Program continues");
		}
		
		catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		
		
	}

}