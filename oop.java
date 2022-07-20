// Object
// Java Object
// Any entity that has state and behavior is known as an object. For example, a chair, pen, table, keyboard, bike, etc. It can be physical or logical.

// An Object can be defined as an instance of a class. An object contains an address and takes up some space in memory. Objects can communicate without knowing the details of each other's data or code. The only necessary thing is the type of message accepted and the type of response returned by the objects.
// Example: A dog is an object because it has states like color, name, breed, etc. as well as behaviors like wagging the tail, barking, eating, etc.

// Class
// Collection of objects is called class. It is a logical entity.
// A class can also be defined as a blueprint from which you can create an individual object. Class doesn't consume any space.

// Inheritance
    // The idea behind inheritance in Java is that you can create new classes that are built upon existing classes. When you inherit from an existing class, you can reuse methods and fields of the parent class. Moreover, you can add new methods and fields in your current class also.
    // Inheritance represents the IS-A relationship which is also known as a parent-child relationship.
    // types of inheritance: single, Multilevel, Hierarchical, Multiple, Hybrid.
    // Example: Single 
    class Animal{  
        void eat(){System.out.println("eating...");}  
        }  
        class Dog extends Animal{  
        void bark(){System.out.println("barking...");}  
        }  
        class TestInheritance{  
        public static void main(String args[]){  
        Dog d=new Dog();  
        d.bark();   
        d.eat();  
    }}  
    // output: barking...
    //         eating...

    //Example: Multilevel
    class Animal{  
        void eat(){System.out.println("eating...");}  
        }  
        class Dog extends Animal{  
        void bark(){System.out.println("barking...");}  
        }  
        class BabyDog extends Dog{  
        void weep(){System.out.println("weeping...");}  
        }  
        class TestInheritance2{  
        public static void main(String args[]){  
        BabyDog d=new BabyDog();  
        d.weep();  
        d.bark();  
        d.eat();  
    }}  



// Polymorphysam : "The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. As JavaScript is not a type-safe language, we can pass any type of data members with the methods."
    // MethodOverloading and MethodOverriding

    // Example1: MethodOverloading
    class Student {
            string name;
            int age;
            public void printInfo(string name) {
                system.out.println(name);

            }
            public void printInfo(int age) {
                system.out.println(age);
            }
            public void printInfo(string name, int age) {
                system.out.println(name + " " + age);
            }
        }
    class OOP {
        public void printInfo() {
            Suduent s1 = new Student();
            s1.printInfo(12);
            
        }
    }  
    

    // Example2: MethodOverriding 
    class Student {
                
        public void printInfo(string name) {
            system.out.println("Varsha");

        }
        public void printInfo(string name) {
            system.out.println("Sachin");       // Method overriding
        }
       
    }
class OOP {
    public void printInfo() {
        Suduent s1 = new Student();
        s1.printInfo();
        
    }
}

//  Encapsulation
// Encapsulation in Java is a process of wrapping code and data together into a single unit, for example, a capsule which is mixed of several medicines.

//Advantages encapsulation in java
// We can create a fully encapsulated class in Java by making all the data members of the class private. Now we can use setter and getter methods to set and get the data in it.
// it providing only a setter or getter method, you can make the class read-only or write-only.
// The encapsulate class is easy to test. So, it is better for unit testing.


// Abstraction
    // Abstraction is a process of hiding the implementation details and showing only functionality to the user.
    // Example: 
    abstract class Bike{  
        abstract void run();  
      }  
      class Honda4 extends Bike{  
      void run(){
        System.out.println("running safely");
      }  
      public static void main(String args[]){  
       Bike obj = new Honda4();  
       obj.run();                   
      }  
    }  

    // output: running safely


