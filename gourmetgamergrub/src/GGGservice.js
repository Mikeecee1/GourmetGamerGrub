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
export async function getFoodItem() {

    const response = await fetch(
        apiURL + '/FoodItem/'
    );
    
    return response.json(); 

}