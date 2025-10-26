const apiURL = "http://127.0.0.1:3000"

export async function getCategories() {

    const response = await fetch(
        apiURL + "/Categories/"
    );
    
    return response.json(); 

}

/**
 * 
 * @returns returns FoodItems
 */
export async function getFoodItems() {

    const response = await fetch(
        apiURL + '/FoodItem/'
    );
    
    return response.json(); 

}

export async function getCategories(){

}

export async function postOrder(){

}

export async function PostOrderItems(){
    
}