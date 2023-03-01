import java.util.ArrayList;

class javaCollections {

    public static void name(String[] args) {

      ArrayList<String> Name = new ArrayList<String>();
      Name.add("Varsha");
      Name.add("Sachin");
      
      System.out.println(Name);
      Name.add(1,"Panchal");
      System.out.println(Name);

      Name.remove(2);
      System.out.println(Name);


    }

  
}