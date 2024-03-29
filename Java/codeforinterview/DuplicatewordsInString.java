package codeforinterview;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class DuplicatewordsInString {
		
	public static void main(String[] args) {
		
		findMachingWords("Hey java is java best language is java");
		//split the string
		// create one hashmap:
		//check for each word in given array
		//if word is present
	}
 
	private static void findMachingWords(String inputString) {
		
		String words[] = inputString.split(" ");
 		
		Map<String, Integer> wordCount = new HashMap<String, Integer>();
		
		for(String word: words) {
			if(wordCount.containsKey(word)) {
				wordCount.put(word.toLowerCase(), wordCount.get(word)+1);
			} else {
				wordCount.put(word, 1);
			}
		}
		
		Set<String> wordInStr = wordCount.keySet();

		for(String word: wordInStr) {
			System.out.println(word+ ":" + wordCount.get(word));
		}
	}

}
