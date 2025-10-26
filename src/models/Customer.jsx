//holds customer info  for use once we move onto back end dev

class Customer{
    static customerNumber = 1; //static variabe to assign unique id (may adjust later)
    constructor(first_name, surname, address, email, phoneNumber){
        this.first_name = first_name;
        this.surname = surname;
        this.address = address;  // maybe implement as object/ array
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.orders = [];
        this.customerId = customerNumber;
        Customer.customerNumber++ // increments customer Number after each assignment to create unique id
    }

    //getters, setters & other methods
    getFirstName() {
        return this.first_name;
    }
    getSurname()  {
        return this.surname;
    }
    getAddress(){
        return this.address
    }
    setAddress(newAddress) {
        this.address = newAddress
    }
    getEmail(){
        return this.email; 
    }
    setEmail(newEmail){
        this.email = newEmail //  add functionality to check for valid address
    }
    getPhone(){
        return this.phone
    }
    setPhoneNumber(newNumber){
        this.phoneNumber = newNumber;
    }
    getCustomerId(){
        return this.customerId;
    }
    /**
     * 
     * adds a new order to customers list of orders
     */
    addOrder(order){
        ///not sure how this will be implemented yet
    }
    /**
     * allow customer to view previous orders
     */
    viewOrders(){
        ///not sure how this will be implemented yet
    }
}

export default Customer