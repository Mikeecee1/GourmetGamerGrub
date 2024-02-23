//holds customer info

class Customer{
    static customerNumber = 1;
    constructor(first_name, surname, address, email, phone){
        this.first_name = first_name;
        this.surname = surname;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.orders = [];
        this.customerId = customerNumber;
        Customer.customerNumber++ // increments customer Number after each assignment to create unique id
    }
}