const imagevalidate = (images) =>{
    let imagesTable= []
    if(Array.isArray(images)){
        return{error:"Select only 1 image"}
    }else{
        imagesTable.push(images)
    }

    for(let image of imageTable){
        if(image.size >  3145728){return {error:"Size is too large(above 3MB)"}} 
        
        const filetypes = /jpg|jpeg|png/
        const mimetype = filetypes.test(image.mimetype)
        if(!mimetype) return {error:"Incorrect mime type (should be jpg,jpeg or png)"}
    }
}