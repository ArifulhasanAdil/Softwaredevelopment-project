class Employee 
{
    constructor(name, id, salary) 
    {
      this.name = name;
      this.id = id;
      this.salary = salary;
    }
  
    calculateBonus() 
    {
      return this.salary * 0.1; //return bonus 10%
    }
 }
  
  class Manager extends Employee 
  {
    calculateBonus() {
      return this.salary * 0.2; // Manager bonus 20%
    }
  }
  
  class Developer extends Employee {
    calculateBonus() {
      return this.salary * 0.15; // Developer bonus 15%
    }
  }
  
  const emp1 = new Employee("adil", 101, 5000);
  const emp2 = new Manager("khan", 102, 7000);
  const emp3 = new Developer("towhid", 103, 6000);
  
  console.log(`${emp1.name}'s Bonus: $${emp1.calculateBonus()}`);
  console.log(`${emp2.name}'s Bonus: $${emp2.calculateBonus()}`);
  console.log(`${emp3.name}'s Bonus: $${emp3.calculateBonus()}`);
  