interface Animal {
  void walk();
}

interface Herbivore {

}
//Multiple inheritance
class Horse implements Animal, Herbivore {  
  public void walk() {
      System.out.println("Horse walks on 4 legs");

  }
}
public class OOPS {

  public static void main(String args[]) {
    Horse horse = new Horse();
    horse.walk();
  }
}