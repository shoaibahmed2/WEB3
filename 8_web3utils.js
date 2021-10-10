const underscore = () =>{
    try{
        console.log("contains", _.contains([1,2,3],2));
        console.log("contains", _.contains([1,2,3],4));
        
    } catch (error){
        console.log("error,", error);
    }
}
underscore();